import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function CompNitrogeno(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [nitratosResult, setNitratosResult] = useState({});
    const [nitritosResult, setNitritosResult] = useState({});
    const [nitrogenoAmoniacalResult, setNitrogenoAmoniacalResult] = useState({});
    const [nitrogenoTotalResult, setNitrogenoTotalResult] = useState({});

    useEffect(() => {
        const nitratos = props.nitrogeno.nitratos;
        setNitratosResult((state) => ({ ...state, value: Number(searchParams.get("nitratos")) }));
        setNitratosResult((state) => ({ ...state, result: "aceptable", obs: nitratos.aceptable }));
    }, [nitratosResult.value]);

    useEffect(() => {
        const nitritos = props.nitrogeno.nitratos;
        setNitritosResult((state) => ({ ...state, value: Number(searchParams.get("nitritos")) }));
        setNitritosResult((state) => ({ ...state, result: "aceptable", obs: nitritos.aceptable }));
    }, [nitritosResult.value]);

    useEffect(() => {
        const nitrogenoAmoniacal = props.nitrogeno.nitrogenoAmoniacal;
        setNitrogenoAmoniacalResult((state) => ({ ...state, value: Number(searchParams.get("nitrogenoAmoniacal")) }));
        setNitrogenoAmoniacalResult((state) => ({ ...state, result: "aceptable", obs: nitrogenoAmoniacal.aceptable }));
    }, [nitrogenoAmoniacalResult.value]);

    useEffect(() => {
        const nitrogenoTotal = props.nitrogeno.nitrogenoTotal;
        setNitrogenoTotalResult((state) => ({ ...state, value: Number(searchParams.get("nitrogenoTotal")) }));
        setNitrogenoTotalResult((state) => ({ ...state, result: "aceptable", obs: nitrogenoTotal.aceptable }));
    }, [nitrogenoTotalResult.value]);

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
                                    Nitratos (N-NO<sub>3</sub>
                                    <sup>-</sup>)
                                </strong>
                            </td>
                            <td>
                                {nitratosResult.value} mg/L O<sub>2</sub>
                            </td>
                            <td
                                style={{
                                    backgroundColor:
                                        nitratosResult.result === "favorable"
                                            ? "green"
                                            : nitratosResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {nitratosResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    Nitritos (N-NO<sub>2</sub>
                                    <sup>-</sup>)
                                </strong>
                            </td>
                            <td>
                                {nitritosResult.value} mg/L<sub>2</sub>
                            </td>
                            <td
                                dangerouslySetInnerHTML={{ __html: nitritosResult.obs }}
                                style={{
                                    backgroundColor:
                                        nitritosResult.result === "favorable"
                                            ? "green"
                                            : nitritosResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            ></td>
                        </tr>
                        <tr>
                            <td>
                                <strong>
                                    Nitrógeno Amoniacal (N-NH<sub>3</sub>)
                                </strong>
                            </td>
                            <td>{nitrogenoAmoniacalResult.value} mg/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        nitrogenoAmoniacalResult.result === "favorable"
                                            ? "green"
                                            : nitrogenoAmoniacalResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {nitrogenoAmoniacalResult.obs}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Nitrógeno Total (N)</strong>
                            </td>
                            <td>{nitrogenoTotalResult.value} mL/L</td>
                            <td
                                style={{
                                    backgroundColor:
                                        nitrogenoTotalResult.result === "favorable"
                                            ? "green"
                                            : nitrogenoTotalResult.result === "aceptable"
                                            ? "orange"
                                            : "red",
                                    color: "white",
                                }}
                            >
                                {nitrogenoTotalResult.obs}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
}
