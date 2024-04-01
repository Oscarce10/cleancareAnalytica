import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Otros(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [acidezResult, setAcidezResult] = useState({});
    const [alcalinidadResult, setAlcalinidadResult] = useState({});
    const [dcalcicaResult, setDcalcicaResult] = useState({});
    const [durezaResult, setDurezaResult] = useState({});
    const [colorResult, setColorResult] = useState({});

    useEffect(() => {
        const acidez = props.otros.acidez;
        setAcidezResult((state) => ({ ...state, value: Number(searchParams.get("acidez")) }));
        setAcidezResult((state) => ({ ...state, result: "favorable", obs: acidez.favorable }));
    }, [acidezResult.value]);

    useEffect(() => {
        const alcalinidad = props.otros.alcalinidad;
        setAlcalinidadResult((state) => ({ ...state, value: Number(searchParams.get("alcalinidad")) }));
        setAlcalinidadResult((state) => ({ ...state, result: "favorable", obs: alcalinidad.favorable }));
    }, [alcalinidadResult.value]);

    useEffect(() => {
        const dcalcica = props.otros.dcalcica;
        setDcalcicaResult((state) => ({ ...state, value: Number(searchParams.get("dcalcica")) }));
        setDcalcicaResult((state) => ({ ...state, result: "favorable", obs: dcalcica.favorable }));
    }, [dcalcicaResult.value]);

    useEffect(() => {
        const dureza = props.otros.dureza;
        setDurezaResult((state) => ({ ...state, value: Number(searchParams.get("dureza")) }));
        setDurezaResult((state) => ({ ...state, result: "favorable", obs: dureza.favorable }));
    }, [durezaResult.value]);

    useEffect(() => {
        const color = props.otros.color;
        setColorResult((state) => ({ ...state, value: Number(searchParams.get("color")) }));
        setColorResult((state) => ({ ...state, result: "favorable", obs: color.favorable }));
    }, [colorResult.value]);
    return (
        <>
            <section>
                <div className="href-target" id="Otros" />
                <h1>Otros Parámetros para Análisis y Reporte</h1>

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
                                <strong>Acidez Total</strong>
                            </td>
                            <td>
                                {acidezResult.value} mg/L CaCO<sub>3</sub>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        acidezResult.result === "favorable"
                                            ? "green"
                                            : acidezResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {acidezResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Alcalinidad Total</strong>
                            </td>
                            <td>
                                {alcalinidadResult.value} mg/L CaCO<sub>3</sub>
                            </td>
                            <td
                                dangerouslySetInnerHTML={{ __html: alcalinidadResult.obs }}
                                style={{
                                    backgroundColor:
                                        alcalinidadResult.result === "favorable"
                                            ? "green"
                                            : alcalinidadResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            ></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Dureza Cálcica</strong>
                            </td>
                            <td>
                                {dcalcicaResult.value} mg/L CaCO<sub>3</sub>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        dcalcicaResult.result === "favorable"
                                            ? "green"
                                            : dcalcicaResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {dcalcicaResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Dureza Total</strong>
                            </td>
                            <td>
                                {durezaResult.value} mg/L CaCO<sub>3</sub>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        durezaResult.result === "favorable"
                                            ? "green"
                                            : durezaResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {durezaResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Color Real</strong>
                            </td>
                            <td>
                                {colorResult.value} m <sup>-1</sup>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        colorResult.result === "favorable"
                                            ? "green"
                                            : colorResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {colorResult.obs}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
