import logo from "/cleancare-analytica-logo.png";
function Head() {
    return (
        <>
            <div id="div-logo">
                <img id="logo" src={logo} alt="" />
            </div>
            <section>
                <div className="href-target" id="Inicio" />
                <h1 className="package-name">CLEANCARE ANALYTICA</h1>
                <strong>Resultados del analisis</strong>
                <p>
                    A continuación se muestran los resultados obtenidos en el analisis de los vertimientos de su clinica
                </p>
            </section>
        </>
    );
}
export default Head;
