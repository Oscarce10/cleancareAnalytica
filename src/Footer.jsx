import logo from "/geo.png";

export default function Footer() {
    return (
        <footer>
            <div class="footer">
                <div class="message-container">
                    <div class="message-contents">
                        <p>
                            <img
                                src={logo}
                                alt="Cleancare Analytica"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    margin: "10px auto",
                                    display: "block",
                                }}
                            />
                        </p>
                        <p
                            style={{
                                textAlign: "center",
                                fontSize: "1.2em",
                                fontWeight: "bold",
                            }}
                        >
                            SEMILLERO DE INVESTIGACIÓN DE LA UNIVERSIDAD DISTRITAL <br /> FRANCISCO JOSÉ DE CALDAS :
                            GROUP ON EARTH OBSERVATION AND ANALYSIS (GEO-A) <br /> JEFERSON YARA & MARIA PAULA CASTAÑEDA
                            <br /> Contáctenos <br /> <br />{" "}
                            <a href="mailto: jayarav@udistrital.edu.co"> jayarav@udistrital.edu.co </a> <br />{" "}
                            <a href="mailto: mpcastanedal@udistrital.edu.co"> mpcastanedal@udistrital.edu.co </a>{" "}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
