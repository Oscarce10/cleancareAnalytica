import React, { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Head from "./components/resultados/head";
import Generales from "./components/resultados/generales";
import parametros from "./data.json";
import "./components/resultados/resultados.scss";

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
                </main>
            </div>
        </>
    );
}
export default Results;
