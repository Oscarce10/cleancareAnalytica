import "./components/form/form.scss";
import Navigation from "./components/form/nav";
import Head from "./components/form/head";
import Generales from "./components/form/generales";
import CompFosforo from "./components/form/comp-fosforo";
import CompNitrogeno from "./components/form/comp-nitrogeno";
import logo from "/cleancare-analytica-logo.png";
import Iones from "./components/form/iones";
import Metales from "./components/form/metales";
import Otros from "./components/form/otros";
import Detergentes from "./components/form/detergentes";
import Footer from "./Footer";

function MainForm() {
    return (
        <>
            <div id="only-mb" className="div-logo">
                <img id="logo" className="logo" src={logo} alt="Cleancare Analytica" />
            </div>
            <div className="demo-page">
                <Navigation />
                <main className="demo-page-content">
                    <Head />
                    <form action="results" method="get">
                        <Generales />
                        <CompFosforo />
                        <CompNitrogeno />
                        <Iones />
                        <Metales />
                        <Otros />
                        <Detergentes />
                        <div className="nice-form-group">
                            <input type="submit" value="Analizar" />
                        </div>
                    </form>
                    <Footer />
                </main>
            </div>
        </>
    );
}

export default MainForm;
