import "./components/resultados/resultados.scss";
import React, { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
    return (
        <>
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
                    {/* <Detergentes /> */}
                    <div>
                        <a className="nice-form-group" href="/">
                            <input type="submit" value="Volver" />
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}
export default Results;
