import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Detergentes(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [listDetegentes, setListDetegentes] = useState([]);
    const ph = Number(searchParams.get("ph"));
    const nitrogenoAmoniacal = Number(searchParams.get("nitrogenoAmoniacal"));
    const nitrogenoTotal = Number(searchParams.get("nitrogenoTotal"));
    const DQO = Number(searchParams.get("DQO"));
    const DBO5 = Number(searchParams.get("DBO5"));
    const Fenoles = Number(searchParams.get("Fenoles"));
    const fosforoTotal = Number(searchParams.get("fosforoTotal"));
    const ortofosfatos = Number(searchParams.get("ortofosfatos"));
    const GyA = Number(searchParams.get("GyA"));

    useEffect(() => {
        const detergentes = props.detergentes;
        let obs;
        let result;
        if (searchParams.has("d01")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 7 && ph <= 9 && nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180 && DQO > DBO5) {
                obs = detergentes.d01.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Alcazyme",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d02")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 8.5 && ph <= 12 && DQO >= 180) {
                obs = detergentes.d02.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "BONZYME",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d03")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 5 && ph <= 9 && nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180 && DQO > DBO5) {
                obs = detergentes.d03.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "ENZIDINA PLUS®",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d04")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180 && DQO > DBO5) {
                obs = detergentes.d04.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Enzymax-AHS",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d05")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 6 && ph <= 8 && nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180 && DQO > DBO5) {
                obs = detergentes.d05.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "EUCIDA ADVANCED",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d06")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 3.5 && ph <= 6) {
                obs = detergentes.d06.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Glutfar Plus HLD",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d07")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (
                ph >= 1.5 &&
                ph <= 6 &&
                Fenoles > 0.15 &&
                nitrogenoAmoniacal > 1 &&
                nitrogenoTotal > 1 &&
                ortofosfatos > 1 &&
                fosforoTotal > 1
            ) {
                obs = detergentes.d07.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Ironcleaner",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d08")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 1.5 && ph <= 6 && ortofosfatos > 1 && fosforoTotal > 1) {
                obs = detergentes.d08.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "OXIVIR FIVE 16",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d09")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 1.5 && ph <= 6.5 && (DQO > 180 || DBO5 > 145)) {
                obs = detergentes.d09.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "PERIFAR QX",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d10")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (GyA > 8) {
                obs = detergentes.d10.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Premixslip",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d11")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 8.5 && ph <= 9 && nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180) {
                obs = detergentes.d11.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Proasepsis",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d12")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (nitrogenoAmoniacal > 1 && nitrogenoTotal > 1 && DQO >= 180 && DQO > DBO5) {
                obs = detergentes.d12.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Prodet-Uno",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d13")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (GyA > 8) {
                obs = detergentes.d13.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Prolub-UNO",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d14")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 1.5 && ph <= 6.5 && fosforoTotal > 1 && ortofosfatos > 1) {
                obs = detergentes.d14.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Surgistain",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d15")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 6.5 && ph <= 7.5 && (DQO > 180 || DBO5 > 145)) {
                obs = detergentes.d15.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "WEST ZYMME ULTRA",
                    result: result,
                    obs: obs,
                },
            ]);
        }
        if (searchParams.has("d16")) {
            obs = "Sin observaciones";
            result = "favorable";
            if (ph >= 6.8 && ph <= 8 && nitrogenoTotal > 20 && nitrogenoTotal < 70 && DBO5 >= 110) {
                obs = detergentes.d16.desfavorable;
                result = "desfavorable";
            }
            setListDetegentes((state) => [
                ...state,
                {
                    name: "Residuos Anatomopatológicos",
                    result: result,
                    obs: obs,
                },
            ]);
        }
    }, []);

    return (
        <>
            <section className="alert alert-danger">
                <div>
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
                                    dangerouslySetInnerHTML={{ __html: detergente.obs }}
                                    style={{
                                        width: "600px",
                                        backgroundColor:
                                            detergente.result === "favorable"
                                                ? "green"
                                                : detergente.result === "aceptable"
                                                ? "orange"
                                                : "red",
                                        color: "white",
                                    }}
                                ></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
