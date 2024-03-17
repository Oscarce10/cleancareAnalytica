export default function Generales() {
    return (
        <>
            <section>
                <div className="href-target" id="Generales" />
                <div className="href-target" id="input-types" />
                <h1>Generales</h1>
                <div className="nice-form-group">
                    <label>PH</label>
                    <input type="number" name="ph" required min="0" max="14" step="any" />
                </div>
                <div className="nice-form-group">
                    <label>Demanda Química de Oxígeno (DQO)</label>
                    <input type="number" name="DQO" required min="0" step="any" />
                    <span className="infotext">mg/L O2</span>
                </div>
                <div className="nice-form-group">
                    <label>Demanda Bioquímica de Oxígeno (DBO5)</label>
                    <input type="number" name="DBO5" required min="0" step="any" />
                    <span className="infotext">mg/L O2</span>
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
