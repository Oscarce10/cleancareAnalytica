import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Iones(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [cianuroTotalResult, setCianuroTotalResult] = useState({});

    useEffect(() => {
        const cianuro = props.iones.cianuro;
        setCianuroTotalResult((state) => ({ ...state, value: Number(searchParams.get("cianuro")) }));
        if (0 <= cianuroTotalResult.value && cianuroTotalResult.value < 0.4) {
            setCianuroTotalResult((state) => ({ ...state, result: "favorable", obs: cianuro.favorable }));
        } else if (0.4 <= cianuroTotalResult.value && cianuroTotalResult.value <= 0.5) {
            setCianuroTotalResult((state) => ({ ...state, result: "aceptable", obs: cianuro.aceptable }));
        } else {
            setCianuroTotalResult((state) => ({ ...state, result: "desfavorable", obs: cianuro.desfavorable }));
        }
    }, [cianuroTotalResult.value]);

    return (
        <>
            <section>
                <div className="href-target" id="compNitrogeno" />
                <h1>Generales</h1>

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
                                    Cianuro Total (CN<sup>-</sup>)
                                </strong>
                            </td>
                            <td>{cianuroTotalResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        cianuroTotalResult.result === "favorable"
                                            ? "green"
                                            : cianuroTotalResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {cianuroTotalResult.obs}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
