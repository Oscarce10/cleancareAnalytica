export default function Generales() {
    return (
        <>
            <section>
                <strong>Ingrese a continuación los datos del laboratorio de vertimientos de su clinica</strong>
            </section>
            <section>
                <div className="href-target" id="Generales" />
                <h1>Generales</h1>
                <div className="nice-form-group">
                    <label>PH</label>
                    <input type="number" name="ph" required min="0" max="14" step="any" />
                </div>
                <div className="nice-form-group">
                    <label>Demanda Química de Oxígeno (DQO)</label>
                    <input type="number" name="DQO" required min="0" step="any" />
                    <span className="infotext">
                        mg/L O<sub>2</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>
                        Demanda Bioquímica de Oxígeno &#40;DBO<sub>5</sub>&#41;
                    </label>
                    <input type="number" name="DBO5" required min="0" step="any" />
                    <span className="infotext">
                        mg/L O<sub>2</sub>
                    </span>
                </div>
                <div className="nice-form-group">
                    <label>Sólidos Suspendidos Totales (SST)</label>
                    <input type="number" name="SST" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Sólidos Sedimentables (SSED)</label>
                    <input type="number" name="SSED" required min="0" step="any" />
                    <span className="infotext">mL/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Grasas y Aceites</label>
                    <input type="number" name="GyA" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Fenoles</label>
                    <input type="number" name="Fenoles" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Sustancias Activas al Azul de Metileno (SAAM)</label>
                    <input type="number" name="SAAM" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
            </section>
        </>
    );
}
