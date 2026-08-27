import "./MobileCallBar.css";

export default function MobileCallBar() {
  return (
    <a href="tel:+918651726130" className="mobile-call-bar">
      <span className="mobile-call-bar__dot" aria-hidden="true" />
      Call Chill Zone now — +91 86517 26130
    </a>
  );
}
