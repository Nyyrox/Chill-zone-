import { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__brand">
          <span className="header__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26" fill="none">
              <path
                d="M16 2v28M4.8 9l22.4 14M27.2 9L4.8 23"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
              <circle cx="16" cy="16" r="4.5" fill="currentColor" />
            </svg>
          </span>
          <span className="header__name">
            Chill Zone
            <span className="header__sub">AC Repair &amp; Services</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header__cta" href="tel:+918651726130">
          <span className="header__cta-dot" aria-hidden="true" />
          Call now
        </a>
      </div>
    </header>
  );
}
