// src/compos/OffersPage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const offers = [
  {
    slug: "weekend-escape",
    title: "Weekend Escape",
    shortText:
      "Save up to 20% on 2-night stays in Tunis, Sousse or Hammamet.",
    priceLine: "From €60 / night",
  },
  {
    slug: "family-special",
    title: "Family Special",
    shortText: "Free stay for 1 child when booking a family room.",
    priceLine: "Selected beach hotels",
  },
  {
    slug: "early-booking",
    title: "Early Booking",
    shortText:
      "Book at least 30 days in advance and get up to 15% off.",
    priceLine: "All destinations",
  },
];

export default function OffersPage() {
  const navigate = useNavigate();

  const handleDetails = (slug) => {
    navigate(`/offers/${slug}`);
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              / Offers
            </small>
            <h2 className="fw-bold mt-2 mb-1">Current Offers</h2>
            <p className="text-muted mb-0">
              Discover our best deals and limited-time discounts.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {offers.map((offer) => (
            <div key={offer.slug} className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="fw-bold mb-2">{offer.title}</h5>
                  <p className="text-muted mb-2">{offer.shortText}</p>
                  <p className="fw-semibold mb-3">{offer.priceLine}</p>
                  <button
                    className="btn mt-auto text-white fw-semibold"
                    style={{
                      background:
                        "linear-gradient(to right, #a566ff, #c174ff)",
                      borderRadius: "12px",
                    }}
                    onClick={() => handleDetails(offer.slug)}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
