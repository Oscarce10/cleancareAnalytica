export default function Otros() {
    return (
        <>
            <section>
                <div className="href-target" id="Otros" />
                <h1>Otros Parámetros para Análisis y Reporte</h1>
                <div className="nice-form-group">
                    <label>Acidez Total</label>
                    <input type="number" name="acidez" required min="0" step="any" />
                    <span className="infotext">
                        mg/L CaCO<sub>3</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>Alcalinidad Total</label>
                    <input type="number" name="alcalinidad" required min="0" step="any" />
                    <span className="infotext">
                        mg/L CaCO<sub>3</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>Dureza Cálcica</label>
                    <input type="number" name="dcalcica" required min="0" step="any" />
                    <span className="infotext">
                        mg/L CaCO<sub>3</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>Dureza Total</label>
                    <input type="number" name="dureza" required min="0" step="any" />
                    <span className="infotext">
                        mg/L CaCO<sub>3</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>Color Real</label>
                    <input type="number" name="color" required min="0" step="any" />
                    <span className="infotext">
                        m <sup>-1</sup>
                    </span>
                </div>
            </section>
        </>
    );
}
