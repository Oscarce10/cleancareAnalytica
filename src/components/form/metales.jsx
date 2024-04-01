export default function Metales() {
    return (
        <>
            <section>
                <div className="href-target" id="Metales" />
                <h1>Metales y Metaloides</h1>
                <div className="nice-form-group">
                    <label>Cadmio (Cd)</label>
                    <input type="number" name="cadmio" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Cromo (Cr)</label>
                    <input type="number" name="cromo" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Mercurio (Hg)</label>
                    <input type="number" name="mercurio" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Plata (Ag)</label>
                    <input type="number" name="plata" required min="0" step="any" />
                    <span className="infotext">mL/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Plomo (Pb)</label>
                    <input type="number" name="plomo" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
            </section>
        </>
    );
}
