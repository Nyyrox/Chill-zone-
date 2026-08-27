import "./Services.css";

const SERVICES = [
  {
    icon: "install",
    title: "AC Installation",
    desc: "Split and window units mounted, wired and pressure-tested by trained technicians.",
  },
  {
    icon: "repair",
    title: "AC Repair",
    desc: "Diagnose and fix cooling, noise, leakage and electrical faults — most jobs same visit.",
  },
  {
    icon: "service",
    title: "AC Servicing",
    desc: "Filter and coil cleaning to bring back full airflow and cut your power bill.",
  },
  {
    icon: "gas",
    title: "Gas Filling",
    desc: "Refrigerant top-up and leak checks with genuine gas, done to the right pressure.",
  },
  {
    icon: "uninstall",
    title: "Uninstallation",
    desc: "Safe removal and gas recovery if you're shifting home or swapping units.",
  },
  {
    icon: "emergency",
    title: "Emergency Repairs",
    desc: "AC down in peak summer? Priority slots for urgent breakdowns, same day.",
  },
];

const ICONS = {
  install: (
    <path d="M4 17h16M7 17V9a5 5 0 0110 0v8M9 21h6" />
  ),
  repair: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.6 2.6-2-2z" />
  ),
  service: (
    <path d="M3 12h4l2-6 4 12 2-6h6" />
  ),
  gas: (
    <path d="M12 3c2 3-2 4-2 7a4 4 0 108 0c0-1.5-1-2-1-2s.5 2-1 3a2.5 2.5 0 01-3-4c1-1.5 1-2-1-4z" />
  ),
  uninstall: (
    <path d="M4 7h16M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2m-9 4v6m4-6v6M6 7l1 13a2 2 0 002 2h6a2 2 0 002-2l1-13" />
  ),
  emergency: (
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  ),
};

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {ICONS[name]}
    </svg>
  );
}

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <p className="section-eyebrow">What we do</p>
          <h2 className="section-title">Services, priced upfront</h2>
          <p className="section-sub">
            One team, all your AC needs — book by phone and a technician
            comes to you.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s) => (
            <a href="tel:+918651726130" className="service-card" key={s.title}>
              <span className="service-card__icon">
                <Icon name={s.icon} />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <span className="service-card__arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
