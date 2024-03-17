import Navigation from "./components/form/nav";
import Head from "./components/form/head";
import Generales from "./components/form/generales";
import "./components/form/form.scss";

function MainForm() {
    return (
        <>
            <div className="demo-page">
                <Navigation />
                <main className="demo-page-content">
                    <Head />
                    <form action="/results" method="get">
                        <Generales />
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
