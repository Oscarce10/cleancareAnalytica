import "./components/form/form.scss";
import Navigation from "./components/form/nav";
import Head from "./components/form/head";
import Generales from "./components/form/generales";
import CompFosforo from "./components/form/comp-fosforo";
import CompNitrogeno from "./components/form/comp-nitrogeno";
import logo from "/cleancare-analytica-logo.png";

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

                        <div className="nice-form-group">
                            <input type="submit" value="Analizar" />
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}

export default MainForm;
