import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__brand-col">
          <span className="footer__name">Chill Zone</span>
          <p className="footer__tag">
            Expert AC repair and maintenance in Muzaffarpur.
          </p>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/share/17twt6Rxnr/"
              aria-label="Chill Zone on Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.9 2 14.55 2 11.73 2 9.75 3.74 9.75 7v2.5H6.5v4h3.25V22h4.25V13.5z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/chillzone_ac_repair_servies_"
              aria-label="Chill Zone on Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.55.55.89 1.1 1.15 1.76.25.64.42 1.37.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47C15.06 21.99 14.72 22 12 22s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm5.4-8.4a1.17 1.17 0 100-2.33 1.17 1.17 0 000 2.33z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Services</span>
          <a href="#services">AC Installation</a>
          <a href="#services">AC Repair</a>
          <a href="#services">AC Servicing</a>
          <a href="#services">Gas Filling</a>
        </div>

        <div className="footer__col">
          <span className="footer__heading">Contact</span>
          <a href="tel:+918651726130">+91 86517 26130</a>
          <a href="mailto:info@chillzonerepair.in">info@chillzonerepair.in</a>
          <span className="footer__static">Muzaffarpur, Bihar</span>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Chill Zone Repair &amp; Services. All rights reserved.</span>
      </div>
    </footer>
  );
}
