export default function CompFosforo() {
    return (
        <>
            <section>
                <div className="href-target" id="compfosforo" />
                <h1>Compuestos de Fósforo</h1>
                <div className="nice-form-group">
                    <label>
                        Ortofosfatos (PO<sub>4</sub> <sup>3-</sup>)
                    </label>
                    <input type="number" name="ortofostatos" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Fósforo Total (P)</label>
                    <input type="number" name="fosforoTotal" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
            </section>
        </>
    );
}
