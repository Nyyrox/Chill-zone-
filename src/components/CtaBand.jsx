import "./CtaBand.css";

export default function CtaBand() {
  return (
    <section className="cta-band" id="contact">
      <div className="container cta-band__inner">
        <div>
          <h2 className="cta-band__title">AC acting up? Let's sort it today.</h2>
          <p className="cta-band__sub">
            Call now or drop a message — a technician near you responds
            fast.
          </p>
        </div>
        <div className="cta-band__actions">
          <a className="btn btn--primary" href="tel:+918651726130">
            Call +91 86517 26130
          </a>
          <a
            className="btn btn--outline"
            href="mailto:info@chillzonerepair.in"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
