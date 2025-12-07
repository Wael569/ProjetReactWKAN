// src/compos/OfferDetails.jsx
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const offersData = [
  {
    slug: "weekend-escape",
    title: "Weekend Escape",
    subtitle: "Perfect for a short city break or a quick beach escape.",
    description:
      "Enjoy a 2-night stay in selected hotels in Tunis, Sousse or Hammamet with up to 20% discount. Ideal for couples or friends looking for a relaxing weekend.",
    includes: [
      "Up to 20% discount on 2-night stays",
      "Flexible check-in and late check-out (when available)",
      "Free cancellation up to 48 hours before arrival",
    ],
    conditions: [
      "Offer valid on selected hotels only",
      "Minimum stay: 2 nights",
      "Not combinable with other promotions",
    ],
    suggestion:
      "Apply this code during your booking to activate the discount.",
    promoCode: "WEEKEND20",
  },
  {
    slug: "family-special",
    title: "Family Special",
    subtitle: "Make family holidays easier and more affordable.",
    description:
      "Book a family room in selected beach hotels and get a free stay for one child. Enjoy spacious rooms, kids’ areas and family-friendly services.",
    includes: [
      "Free stay for 1 child in the room",
      "Access to kids’ pool or play area (where available)",
      "Breakfast included for adults and children",
    ],
    conditions: [
      "Offer valid for children under 12 years old",
      "Available in selected family rooms only",
      "Limited availability during high season",
    ],
    suggestion:
      "Use the code below when booking a family room in a beach hotel.",
    promoCode: "FAMILYFREEKID",
  },
  {
    slug: "early-booking",
    title: "Early Booking",
    subtitle: "Plan ahead and enjoy lower prices.",
    description:
      "Reserve your stay at least 30 days in advance and benefit from discounts of up to 15% on participating hotels across Tunisia.",
    includes: [
      "Up to 15% discount on the standard rate",
      "Wide choice of destinations and hotels",
      "Ideal for summer and holiday trips",
    ],
    conditions: [
      "Booking must be made at least 30 days before arrival",
      "Non-refundable rate in most cases",
      "Dates cannot always be modified after booking",
    ],
    suggestion:
      "Add this promo code when you confirm your booking to get the early booking discount.",
    promoCode: "EARLY15",
  },
];

export default function OfferDetails() {
  const { offerSlug } = useParams();
  const navigate = useNavigate();

  const offer = offersData.find((o) => o.slug === offerSlug);

  if (!offer) {
    return (
      <div className="bg-light min-vh-100 py-5">
        <div className="container">
          <button
            className="btn btn-outline-secondary mb-3"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
          <div className="alert alert-danger">
            Offer not found. Please go back to the offers list.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* breadcrumb + title */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              /{" "}
              <Link to="/offers" className="text-decoration-none">
                Offers
              </Link>{" "}
              / {offer.title}
            </small>
            <h2 className="fw-bold mt-2 mb-1">{offer.title}</h2>
            <p className="text-muted mb-0">{offer.subtitle}</p>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>

        <div className="row g-4">
          {/* main text */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h5 className="fw-bold mb-2">About this offer</h5>
                <p className="text-muted">{offer.description}</p>

                <h6 className="fw-semibold mt-3 mb-2">What&apos;s included</h6>
                <ul className="text-muted mb-3">
                  {offer.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h6 className="fw-semibold mt-3 mb-2">Conditions</h6>
                <ul className="text-muted mb-0">
                  {offer.conditions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* side card / promo code only */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h5 className="fw-bold mb-2">Promo code</h5>
                <p className="text-muted mb-3">{offer.suggestion}</p>

                {/* big promo code */}
                <div
                  className="d-inline-flex align-items-center px-4 py-2 mb-3 rounded-pill"
                  style={{
                    background:
                      "linear-gradient(to right, #ff9f40, #8a4fff)",
                    color: "white",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontSize: "0.95rem",
                  }}
                >
                  {offer.promoCode}
                </div>

                <p className="text-muted small mb-0">
                  Enter this code on the payment or confirmation step of your
                  booking.
                </p>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">Need help?</h6>
                <p className="text-muted mb-1">
                  Our support team can help you choose the best option for your
                  trip.
                </p>
                <p className="mb-0">
                  <strong>Email:</strong> support@travana.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
