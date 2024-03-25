export default function CompNitrogeno() {
    return (
        <>
            <section>
                <div className="href-target" id="compNitrogeno" />
                <h1>Compuestos de Nitrógeno</h1>
                <div className="nice-form-group">
                    <label>
                        Nitratos (N-NO<sub>3</sub>
                        <sup>-</sup>)
                    </label>
                    <input type="number" name="nitratos" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>
                        Nitritos (N-NO<sub>2</sub>
                        <sup>-</sup>)
                    </label>
                    <input type="number" name="nitritos" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>
                        Nitrógeno Amoniacal (N-NH<sub>3</sub>)
                    </label>
                    <input type="number" name="nitrogenoAmoniacal" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
                <div className="nice-form-group">
                    <label>Nitrógeno Total (N)</label>
                    <input type="number" name="nitrogenoTotal" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
            </section>
        </>
    );
}
