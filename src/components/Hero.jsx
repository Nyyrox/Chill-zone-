import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [temp, setTemp] = useState(32);
  const targetRef = useRef(18);
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();
    const from = 32;
    const to = 18;
    const duration = 2200;

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setTemp(from + (to - from) * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Map temp 32→18 to a dial sweep of -120deg to 120deg (240deg total)
  const pct = (32 - temp) / (32 - 18);
  const angle = -120 + pct * 240;

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">Muzaffarpur · On-call today</p>
          <h1 className="hero__title">
            Your AC, fixed
            <br />
            <span className="hero__title-accent">before it gets hot.</span>
          </h1>
          <p className="hero__lede">
            Chill Zone sends a trained technician to your door for
            installation, repair, servicing and gas filling — with upfront
            pricing and genuine parts.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+918651726130">
              Call +91 86517 26130
            </a>
            <a className="btn btn--ghost" href="#services">
              See services
            </a>
          </div>

          <dl className="hero__stats">
            <div className="hero__stat">
              <dt>150+</dt>
              <dd>Trusted by locals</dd>
            </div>
            <div className="hero__stat">
              <dt>15 yrs</dt>
              <dd>On the tools</dd>
            </div>
            <div className="hero__stat">
              <dt>Same day</dt>
              <dd>Emergency visits</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="dial">
            <svg viewBox="0 0 220 220" className="dial__face">
              <circle cx="110" cy="110" r="98" className="dial__ring-bg" />
              <path
                d="M 33.2 175.8 A 98 98 0 1 1 186.8 175.8"
                className="dial__ring-track"
              />
              <path
                d="M 33.2 175.8 A 98 98 0 1 1 186.8 175.8"
                className="dial__ring-progress"
                style={{ strokeDashoffset: 308 - (pct * 308) }}
              />
              <g
                className="dial__needle"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <line x1="110" y1="110" x2="110" y2="34" />
              </g>
              <circle cx="110" cy="110" r="7" className="dial__hub" />
            </svg>
            <div className="dial__readout">
              <span className="dial__temp">{Math.round(temp)}°</span>
              <span className="dial__label">Room cooling</span>
            </div>
          </div>
          <div className="hero__blob" />
        </div>
      </div>
    </section>
  );
}
