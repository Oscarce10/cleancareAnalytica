import "./components/resultados/resultados.scss";
import React, { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
import Head from "./components/resultados/head";
import Generales from "./components/resultados/generales";
import parametros from "./data.json";
import CompFosforo from "./components/resultados/comp-fosforo";
import CompNitrogeno from "./components/resultados/comp-nitrogeno";
import logo from "/cleancare-analytica-logo.png";
import Iones from "./components/resultados/iones";
import Metales from "./components/resultados/metales";
import Otros from "./components/resultados/otros";
import Detergentes from "./components/resultados/detergentes";

function Results() {
    const [searchParams, setSearchParams] = useSearchParams();
    useLayoutEffect(() => {}, []);
    const contentRef = useRef(null);
    const convertToPdf = () => {
        const content = contentRef.current;
        const options = {
            filename: `CleancareAnalytica-ResultadosdeAnalisis-${new Date().toLocaleDateString()}`,
            margin: 0,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
        };
        html2pdf().set(options).from(content).save();
    };
    return (
        <>
            <div ref={contentRef}>
                <div id="only-mb" className="div-logo">
                    <img id="logo" className="logo" src={logo} alt="Cleancare Analytica" />
                </div>
                <div className="demo-page">
                    <main className="demo-page-content">
                        <Head />
                        <Generales
                            generales={{
                                ph: parametros.ph,
                                DQO: parametros.DQO,
                                DBO5: parametros.DBO5,
                                SST: parametros.SST,
                                SSED: parametros.SSED,
                                GyA: parametros.GyA,
                                Fenoles: parametros.Fenoles,
                                SAAM: parametros.SAAM,
                            }}
                        />
                        <CompFosforo
                            compFosforo={{
                                ortofostatos: parametros.ortofostatos,
                                fosforoTotal: parametros.fosforoTotal,
                            }}
                        />
                        <CompNitrogeno
                            nitrogeno={{
                                nitratos: parametros.nitratos,
                                nitritos: parametros.nitritos,
                                nitrogenoAmoniacal: parametros.nitrogenoAmoniacal,
                                nitrogenoTotal: parametros.nitrogenoTotal,
                            }}
                        />
                        <Iones
                            iones={{
                                cianuro: parametros.cianuro,
                            }}
                        />
                        <Metales
                            metales={{
                                cadmio: parametros.cadmio,
                                cromo: parametros.cromo,
                                mercurio: parametros.mercurio,
                                plata: parametros.plata,
                                plomo: parametros.plomo,
                            }}
                        />
                        <Otros
                            otros={{
                                acidez: parametros.acidez,
                                alcalinidad: parametros.alcalinidad,
                                dcalcica: parametros.dcalcica,
                                dureza: parametros.dureza,
                                color: parametros.color,
                            }}
                        />
                        <Detergentes
                            detergentes={{
                                d01: parametros.d01,
                                d02: parametros.d02,
                                d03: parametros.d03,
                                d04: parametros.d04,
                                d05: parametros.d05,
                                d06: parametros.d06,
                                d07: parametros.d07,
                                d08: parametros.d08,
                                d09: parametros.d09,
                                d10: parametros.d10,
                                d11: parametros.d11,
                                d12: parametros.d12,
                                d13: parametros.d13,
                                d14: parametros.d14,
                                d15: parametros.d15,
                                d16: parametros.d16,
                            }}
                        />

                        {/* button to generate pdf */}

                        <button onClick={convertToPdf}>Imprimir reporte</button>

                        <div>
                            <a className="nice-form-group" href="/">
                                <input type="submit" value="Volver" />
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
export default Results;
