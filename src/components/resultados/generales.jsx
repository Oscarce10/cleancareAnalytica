import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Generales(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [phResult, setPhResult] = useState({});
    const [DQOResult, setDQOResult] = useState({});
    const [DBO5Result, setDBO5Result] = useState({});
    const [SSTResult, setSSTResult] = useState({});
    const [SSEDResult, setSSEDResult] = useState({});
    const [GyAResult, setGyAResult] = useState({});
    const [FenolesResult, setFenolesResult] = useState({});
    const [SAAMResult, setSAAMResult] = useState({});

    useEffect(() => {
        const ph = props.generales.ph;
        setPhResult((state) => ({ ...state, value: Number(searchParams.get("ph")) }));
        if (6.5 < phResult.value && phResult.value < 8.5) {
            setPhResult((state) => ({ ...state, result: "favorable", obs: ph.favorable }));
        } else if ((6 <= phResult.value && phResult.value <= 6.5) || (8.5 <= phResult.value && phResult.value <= 9)) {
            setPhResult((state) => ({ ...state, result: "aceptable", obs: ph.aceptable }));
        } else {
            setPhResult((state) => ({ ...state, result: "desfavorable", obs: ph.desfavorable }));
        }
    }, [phResult.value]);

    useEffect(() => {
        const DQO = props.generales.DQO;
        setDQOResult((state) => ({ ...state, value: Number(searchParams.get("DQO")) }));
        if (0 <= DQOResult.value && DQOResult.value < 180) {
            setDQOResult((state) => ({ ...state, result: "favorable", obs: DQO.favorable }));
        } else if (180 <= DQOResult.value && DQOResult.value <= 200) {
            setDQOResult((state) => ({ ...state, result: "aceptable", obs: DQO.aceptable }));
        } else {
            setDQOResult((state) => ({ ...state, result: "desfavorable", obs: DQO.desfavorable }));
        }
    }, [DQOResult.value]);

    useEffect(() => {
        const DBO5 = props.generales.DBO5;
        setDBO5Result((state) => ({ ...state, value: Number(searchParams.get("DBO5")) }));
        if (0 <= DBO5Result.value && DBO5Result.value < 130) {
            setDBO5Result((state) => ({ ...state, result: "favorable", obs: DBO5.favorable }));
        } else if (130 <= DBO5Result.value && DBO5Result.value <= 150) {
            setDBO5Result((state) => ({ ...state, result: "aceptable", obs: DBO5.aceptable }));
        } else {
            setDBO5Result((state) => ({ ...state, result: "desfavorable", obs: DBO5.desfavorable }));
        }
    }, [DBO5Result.value]);

    useEffect(() => {
        const SST = props.generales.SST;
        setSSTResult((state) => ({ ...state, value: Number(searchParams.get("SST")) }));
        if (0 <= SSTResult.value && SSTResult.value < 45) {
            setSSTResult((state) => ({ ...state, result: "favorable", obs: SST.favorable }));
        } else if (45 <= SSTResult.value && SSTResult.value <= 50) {
            setSSTResult((state) => ({ ...state, result: "aceptable", obs: SST.aceptable }));
        } else {
            setSSTResult((state) => ({ ...state, result: "desfavorable", obs: SST.desfavorable }));
        }
    }, [SSTResult.value]);

    useEffect(() => {
        const SSED = props.generales.SSED;
        setSSEDResult((state) => ({ ...state, value: Number(searchParams.get("SSED")) }));
        if (0 <= SSEDResult.value && SSEDResult.value < 4) {
            setSSEDResult((state) => ({ ...state, result: "favorable", obs: SSED.favorable }));
        } else if (4 <= SSEDResult.value && SSEDResult.value <= 5) {
            setSSEDResult((state) => ({ ...state, result: "aceptable", obs: SSED.aceptable }));
        } else {
            setSSEDResult((state) => ({ ...state, result: "desfavorable", obs: SSED.desfavorable }));
        }
    }, [SSEDResult.value]);

    useEffect(() => {
        const GyA = props.generales.GyA;
        setGyAResult((state) => ({ ...state, value: Number(searchParams.get("GyA")) }));
        if (0 <= GyAResult.value && GyAResult.value < 8) {
            setGyAResult((state) => ({ ...state, result: "favorable", obs: GyA.favorable }));
        } else if (8 <= GyAResult.value && GyAResult.value <= 10) {
            setGyAResult((state) => ({ ...state, result: "aceptable", obs: GyA.aceptable }));
        } else {
            setGyAResult((state) => ({ ...state, result: "desfavorable", obs: GyA.desfavorable }));
        }
    }, [GyAResult.value]);

    useEffect(() => {
        const Fenoles = props.generales.Fenoles;
        setFenolesResult((state) => ({ ...state, value: Number(searchParams.get("Fenoles")) }));
        if (0 <= FenolesResult.value && FenolesResult.value < 0.15) {
            setFenolesResult((state) => ({ ...state, result: "favorable", obs: Fenoles.favorable }));
        } else if (0.15 <= FenolesResult.value && FenolesResult.value <= 0.2) {
            setFenolesResult((state) => ({ ...state, result: "aceptable", obs: Fenoles.aceptable }));
        } else {
            setFenolesResult((state) => ({ ...state, result: "desfavorable", obs: Fenoles.desfavorable }));
        }
    }, [FenolesResult.value]);

    useEffect(() => {
        const SAAM = props.generales.SAAM;
        setSAAMResult((state) => ({ ...state, value: Number(searchParams.get("SAAM")) }));
        setSAAMResult((state) => ({ ...state, result: "favorable", obs: SAAM.favorable }));
    }, [SAAMResult.value]);

    return (
        <>
            <section>
                <div className="href-target" id="Generales" />
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
                                <strong>PH</strong>
                            </td>
                            <td>{phResult.value}</td>
                            <td
                                style={{
                                    backgroundColor:
                                        phResult.result === "favorable"
                                            ? "green"
                                            : phResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {phResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>DQO</strong>
                            </td>
                            <td>
                                {DQOResult.value} mg/L O<sub>2</sub>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        DQOResult.result === "favorable"
                                            ? "green"
                                            : DQOResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {DQOResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    DBO<sub>5</sub>
                                </strong>
                            </td>
                            <td>
                                {DBO5Result.value} mg/L O<sub>2</sub>
                            </td>
                            <td
                                dangerouslySetInnerHTML={{ __html: DBO5Result.obs }}
                                style={{
                                    backgroundColor:
                                        DBO5Result.result === "favorable"
                                            ? "green"
                                            : DBO5Result.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            ></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>SST</strong>
                            </td>
                            <td>{SSTResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        SSTResult.result === "favorable"
                                            ? "green"
                                            : SSTResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {SSTResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>SSED</strong>
                            </td>
                            <td>{SSEDResult.value} mL/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        SSEDResult.result === "favorable"
                                            ? "green"
                                            : SSEDResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {SSEDResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Grasas y Aceites</strong>
                            </td>
                            <td>{GyAResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        GyAResult.result === "favorable"
                                            ? "green"
                                            : GyAResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {GyAResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Fenoles</strong>
                            </td>
                            <td>{FenolesResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        FenolesResult.result === "favorable"
                                            ? "green"
                                            : FenolesResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {FenolesResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Sustancias Activas al Azul de Metileno (SAAM)</strong>
                            </td>
                            <td>{SAAMResult.value} mg/L</td>
                            <td
                                valign="center"
                                style={{
                                    backgroundColor:
                                        SAAMResult.result === "favorable"
                                            ? "green"
                                            : SAAMResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                <div>{SAAMResult.obs}</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
