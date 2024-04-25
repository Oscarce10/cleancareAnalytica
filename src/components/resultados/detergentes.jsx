import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Detergentes(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [listDetegentes, setListDetegentes] = useState([]);
    // const [cadmioResult, setCadmioResult] = useState({});
    // const [cromoResult, setCromoResult] = useState({});
    // const [mercurioResult, setMercurioResult] = useState({});
    // const [plataResult, setPlataResult] = useState({});
    // const [plomoResult, setPlomoResult] = useState({});

    // useEffect(() => {
    //     const cadmio = props.metales.cadmio;
    //     setCadmioResult((state) => ({ ...state, value: Number(searchParams.get("cadmio")) }));
    //     if (0 < cadmioResult.value && cadmioResult.value < 0.03) {
    //         setCadmioResult((state) => ({ ...state, result: "favorable", obs: cadmio.favorable }));
    //     } else if (0.03 <= cadmioResult.value && cadmioResult.value <= 0.05) {
    //         setCadmioResult((state) => ({ ...state, result: "aceptable", obs: cadmio.aceptable }));
    //     } else {
    //         setCadmioResult((state) => ({ ...state, result: "desfavorable", obs: cadmio.desfavorable }));
    //     }
    // }, [cadmioResult.value]);

    // useEffect(() => {
    //     const cromo = props.metales.cromo;
    //     setCromoResult((state) => ({ ...state, value: Number(searchParams.get("cromo")) }));
    //     if (0 < cromoResult.value && cromoResult.value < 0.4) {
    //         setCromoResult((state) => ({ ...state, result: "favorable", obs: cromo.favorable }));
    //     } else if (0.4 <= cromoResult.value && cromoResult.value <= 0.5) {
    //         setCromoResult((state) => ({ ...state, result: "aceptable", obs: cromo.aceptable }));
    //     } else {
    //         setCromoResult((state) => ({ ...state, result: "desfavorable", obs: cromo.desfavorable }));
    //     }
    // }, [cromoResult.value]);

    // useEffect(() => {
    //     const mercurio = props.metales.mercurio;
    //     setMercurioResult((state) => ({ ...state, value: Number(searchParams.get("mercurio")) }));
    //     if (0 < mercurioResult.value && mercurioResult.value < 0.005) {
    //         setMercurioResult((state) => ({ ...state, result: "favorable", obs: mercurio.favorable }));
    //     } else if (0.005 <= mercurioResult.value && mercurioResult.value <= 0.01) {
    //         setMercurioResult((state) => ({ ...state, result: "aceptable", obs: mercurio.aceptable }));
    //     } else {
    //         setMercurioResult((state) => ({ ...state, result: "desfavorable", obs: mercurio.desfavorable }));
    //     }
    // }, [mercurioResult.value]);

    // useEffect(() => {
    //     const plata = props.metales.plata;
    //     setPlataResult((state) => ({ ...state, value: Number(searchParams.get("plata")) }));
    //     if (0 < plataResult.value && plataResult.value < 4.8) {
    //         setPlataResult((state) => ({ ...state, result: "favorable", obs: plata.favorable }));
    //     } else {
    //         setPlataResult((state) => ({ ...state, result: "aceptable", obs: plata.aceptable }));
    //     }
    // }, [plataResult.value]);

    // useEffect(() => {
    //     const plomo = props.metales.plomo;
    //     setPlomoResult((state) => ({ ...state, value: Number(searchParams.get("plomo")) }));
    //     if (0 < plomoResult.value && plomoResult.value < 0.08) {
    //         setPlomoResult((state) => ({ ...state, result: "favorable", obs: plomo.favorable }));
    //     } else if (0.08 <= plomoResult.value && plomoResult.value <= 0.1) {
    //         setPlomoResult((state) => ({ ...state, result: "aceptable", obs: plomo.aceptable }));
    //     } else {
    //         setPlomoResult((state) => ({ ...state, result: "desfavorable", obs: plomo.desfavorable }));
    //     }
    // }, [plomoResult.value]);

    return (
        <>
            <section
                style={{
                    background: "red",
                    opacity: "0.25",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "1rem",
                    marginBottom: "1rem",
                }}
            >
                <div
                    style={{
                        position: "relative",
                    }}
                >
                    <strong>RECORDATORIO</strong>
                    <br />
                    Ninguno de los productos aquí identificados afectan directamente los vertimientos. Lo que se
                    identifica es un posible exceso del producto en los vertimiento según lo estipulado en las distintas
                    instrucciones del producto
                </div>
            </section>
            <section>
                <div className="href-target" id="Detergentes" />
                <h1>Detergentes</h1>

                <table>
                    <thead>
                        <tr>
                            <td scope="col">Item</td>
                            <td scope="col">Resultado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listDetegentes.map((detergente, index) => (
                            <tr key={index}>
                                <td>
                                    <strong>{detergente.name}</strong>
                                </td>
                                <td
                                    style={{
                                        backgroundColor:
                                            detergente.result === "favorable"
                                                ? "green"
                                                : detergente.result === "aceptable"
                                                ? "orange"
                                                : "red",
                                        color: "white",
                                    }}
                                >
                                    {detergente.obs}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
