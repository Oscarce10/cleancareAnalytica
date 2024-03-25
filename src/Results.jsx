import React, { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Head from "./components/resultados/head";
import Generales from "./components/resultados/generales";
import parametros from "./data.json";
import "./components/resultados/resultados.scss";
import CompFosforo from "./components/resultados/comp-fosforo";
import CompNitrogeno from "./components/resultados/comp-nitrogeno";

function Results() {
    const [searchParams, setSearchParams] = useSearchParams();
    useLayoutEffect(() => {}, []);
    return (
        <>
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
