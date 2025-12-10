// src/compos/HotelDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getHotelByCityAndId } from "./hotelsData";

export default function HotelDetails() {
  const { citySlug, hotelId } = useParams();
  const navigate = useNavigate();

  const hotel = getHotelByCityAndId(citySlug, hotelId);

  const cityName = citySlug
    ? citySlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  if (!hotel) {
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
            Hotel not found. Please go back and try again.
          </div>
        </div>
      </div>
    );
  }

  // 🟡 Avis initiaux (min hotel.reviews wila fausses données)
  const initialReviews =
    hotel.reviews && Array.isArray(hotel.reviews)
      ? hotel.reviews
      : [
          {
            id: 1,
            author: "Sarra",
            rating: 4.5,
            comment: "Très bel hôtel, chambre propre et personnel très sympa.",
          },
          {
            id: 2,
            author: "Yassine",
            rating: 4.0,
            comment:
              "Bon rapport qualité-prix, petit déjeuner pourrait être amélioré.",
          },
        ];

  const [reviews, setReviews] = useState(initialReviews);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [reviewRating, setReviewRating] = useState("5");
  const [reviewComment, setReviewComment] = useState("");

  const handleBook = () => {
    // path /offers kif ma fi App.jsx
    navigate("/offers", {
      state: {
        citySlug,
        cityName,
        hotelId: hotel.id,
        hotelName: hotel.name,
        pricePerNight: hotel.priceValue,
        currency: hotel.currency,
      },
    });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;

    const newReview = {
      id: Date.now(),
      author: reviewAuthor.trim(),
      rating: parseFloat(reviewRating),
      comment: reviewComment.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setReviewAuthor("");
    setReviewRating("5");
    setReviewComment("");
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Breadcrumb + back */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              /{" "}
              <Link
                to={`/hotels/${citySlug}`}
                className="text-decoration-none"
              >
                Hotels in {cityName}
              </Link>{" "}
              / {hotel.name}
            </small>
            <h2 className="fw-bold mb-1 mt-1">{hotel.name}</h2>
            <p className="text-muted mb-0">
              {hotel.location} · ⭐ {hotel.rating} / 5 · {hotel.price}
            </p>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>

        {/* Content principal */}
        <div className="row g-4">
          <div className="col-md-7">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "380px", objectFit: "cover", width: "100%" }}
            />
          </div>

          <div className="col-md-5">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body">
                <h5 className="fw-bold mb-2">About this stay</h5>
                <p className="text-muted mb-3">{hotel.description}</p>

                <h6 className="fw-semibold">Key info</h6>
                <ul className="text-muted small mb-3">
                  <li>Location: {hotel.location}</li>
                  <li>Rating: ⭐ {hotel.rating} / 5</li>
                  <li>Price: {hotel.price}</li>
                  <li>Free Wi-Fi and 24/7 front desk</li>
                  <li>Popular choice for couples and families</li>
                </ul>

                <button
                  className="btn w-100 text-white fw-semibold"
                  style={{
                    background:
                      "linear-gradient(to right, #ff9f40, #8a4fff)",
                  }}
                  onClick={handleBook}
                >
                  Book this hotel
                </button>
              </div>
            </div>

            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">Good to know</h6>
                <ul className="text-muted small mb-0">
                  <li>Check-in from 14:00 · Check-out until 12:00</li>
                  <li>Some rooms offer sea or city views</li>
                  <li>Extra services may include spa, pool or parking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ⭐ AVIS DES CLIENTS + FORMULAIRE */}
        <div className="row mt-5 g-4 align-items-start">
          {/* LISTE DES AVIS */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <h4 className="fw-bold mb-3">Avis des clients</h4>

                {reviews.length === 0 ? (
                  <p className="text-muted mb-0">
                    Pas encore d&apos;avis. Soyez le premier à laisser un avis !
                  </p>
                ) : (
                  <ul className="list-group list-group-flush">
                    {reviews.map((rev) => (
                      <li
                        key={rev.id}
                        className="list-group-item border-0 px-0 py-3"
                      >
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <div className="fw-semibold text-capitalize">
                              {rev.author}
                            </div>
                            <p className="mb-0 text-muted small mt-1">
                              {rev.comment}
                            </p>
                          </div>

                          <div className="ms-3 d-flex align-items-center text-warning fw-semibold small">
                            <span
                              className="me-1"
                              style={{ fontSize: "1.1rem" }}
                            >
                              ★
                            </span>
                            {rev.rating.toFixed(1)} / 5
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* FORMULAIRE AJOUT AVIS */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-semibold mb-3">Ajouter votre avis</h5>

                <form onSubmit={handleSubmitReview}>
                  <div className="mb-3">
                    <label className="form-label">Votre nom</label>
                    <input
                      type="text"
                      className="form-control"
                      value={reviewAuthor}
                      onChange={(e) => setReviewAuthor(e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Note</label>
                    <select
                      className="form-select"
                      value={reviewRating}
                      onChange={(e) => setReviewRating(e.target.value)}
                    >
                      <option value="5">5 - Excellent</option>
                      <option value="4.5">4.5 - Très bien</option>
                      <option value="4">4 - Bien</option>
                      <option value="3.5">3.5 - Moyen</option>
                      <option value="3">3 - Peut mieux faire</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Commentaire</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={reviewComment}
                      onChange={(e) => setReviewComment(e.target.value)}
                      placeholder="Partagez votre expérience..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn w-100 text-white fw-semibold"
                    style={{
                      background:
                        "linear-gradient(to right, #ff9f40, #8a4fff)",
                      borderRadius: "999px",
                    }}
                  >
                    Envoyer l&apos;avis
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
