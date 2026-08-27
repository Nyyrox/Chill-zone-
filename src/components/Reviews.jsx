import "./Reviews.css";

const REVIEWS = [
  {
    quote:
      "Chill Zone provided excellent service and fixed my AC quickly.",
    name: "Rahul S.",
    place: "Muzaffarpur",
  },
  {
    quote:
      "Impressed with the professionalism and speed of the technicians. Efficient work at a fair price.",
    name: "Anita K.",
    place: "Muzaffarpur",
  },
  {
    quote:
      "Came same day when my AC stopped cooling in peak summer. Explained the issue clearly before starting.",
    name: "Deepak M.",
    place: "Muzaffarpur",
  },
];

function Stars() {
  return (
    <div className="review-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews__head">
          <p className="section-eyebrow">Reviews</p>
          <h2 className="section-title">What Muzaffarpur says</h2>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <figure className="review-card" key={r.name}>
              <Stars />
              <blockquote className="review-card__quote">
                “{r.quote}”
              </blockquote>
              <figcaption className="review-card__meta">
                <span className="review-card__avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <span className="review-card__name">{r.name}</span>
                  <span className="review-card__place">{r.place}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
