import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function CompFosforo(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [ortofosfatosResult, setortofosfatosResult] = useState({});
    const [fosforoTotalResult, setFosforoTotalResult] = useState({});

    useEffect(() => {
        const fosforoTotal = props.compFosforo.fosforoTotal;
        setFosforoTotalResult((state) => ({ ...state, value: Number(searchParams.get("fosforoTotal")) }));
        if (0 <= fosforoTotalResult.value && fosforoTotalResult.value < 60) {
            setFosforoTotalResult((state) => ({ ...state, result: "favorable", obs: fosforoTotal.favorable }));
        } else {
            setFosforoTotalResult((state) => ({ ...state, result: "aceptable", obs: fosforoTotal.aceptable }));
        }
    }, [fosforoTotalResult.value]);

    useEffect(() => {
        const ortofosfatos = props.compFosforo.ortofosfatos;
        setortofosfatosResult((state) => ({ ...state, value: Number(searchParams.get("ortofosfatos")) }));
        setortofosfatosResult((state) => ({ ...state, result: "favorable", obs: ortofosfatos.favorable }));
    }, [ortofosfatosResult.value]);

    return (
        <>
            <section>
                <div className="href-target" id="compFosforo" />
                <h1>Compuestos de Fósforo</h1>

                <table>
                    <thead>
                        <tr>
                            <td scope="col">Item</td>
                            <td scope="col">Valor</td>
                            <td scope="col">Resultado</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>
                                    Ortofosfatos (PO<sub>4</sub> <sup>3-</sup>)
                                </strong>
                            </td>
                            <td>{ortofosfatosResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        ortofosfatosResult.result === "favorable"
                                            ? "green"
                                            : ortofosfatosResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {ortofosfatosResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Fósforo Total (P)</strong>
                            </td>
                            <td>{fosforoTotalResult.value} mg/L</td>
                            <td
                                valign="center"
                                style={{
                                    backgroundColor:
                                        fosforoTotalResult.result === "favorable"
                                            ? "green"
                                            : fosforoTotalResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                <div>{fosforoTotalResult.obs}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
