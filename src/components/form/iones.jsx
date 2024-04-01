export default function Iones() {
    return (
        <>
            <section>
                <div className="href-target" id="Iones" />
                <h1>Iones</h1>
                <div className="nice-form-group">
                    <label>
                        Cianuro Total (CN<sup>-</sup>)
                    </label>
                    <input type="number" name="cianuro" required min="0" step="any" />
                    <span className="infotext">mg/L</span>
                </div>
            </section>
        </>
    );
}
