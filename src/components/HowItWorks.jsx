import "./HowItWorks.css";

const STEPS = [
  {
    n: "01",
    title: "Call or WhatsApp",
    desc: "Tell us your AC issue and where you're based in Muzaffarpur.",
  },
  {
    n: "02",
    title: "Get a time slot",
    desc: "We confirm a visit window — same day for emergencies.",
  },
  {
    n: "03",
    title: "Technician visits",
    desc: "Diagnosis and a clear price before any work begins.",
  },
  {
    n: "04",
    title: "Cool air, guaranteed",
    desc: "Job done with genuine parts, and a follow-up if anything's off.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <div className="how__head">
          <p className="section-eyebrow">Process</p>
          <h2 className="section-title">From call to cool, in four steps</h2>
        </div>

        <ol className="how__steps">
          {STEPS.map((s, i) => (
            <li className="how__step" key={s.n}>
              <span className="how__num">{s.n}</span>
              <h3 className="how__title">{s.title}</h3>
              <p className="how__desc">{s.desc}</p>
              {i < STEPS.length - 1 && <span className="how__connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
