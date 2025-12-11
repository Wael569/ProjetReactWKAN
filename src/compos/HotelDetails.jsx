// src/compos/HotelDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { getHotelByCityAndId } from "./hotelsData";

export default function HotelDetails() {
  const { citySlug, hotelId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 data jeya men CityHotels (checkIn, checkOut, adults, children)
  const search = location.state || {};
  const { checkIn, checkOut, adults = 1, children = 0 } = search;

  const hotel = getHotelByCityAndId(citySlug, hotelId);

  const cityName = citySlug
    ? citySlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  // 🧮 nombre de nuits
  let nights = null;
  if (checkIn && checkOut) {
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffMs = d2 - d1;
    if (!isNaN(diffMs) && diffMs > 0) {
      nights = diffMs / (1000 * 60 * 60 * 24);
    }
  }

  const nbAdults = Number(adults) || 0;
  const nbChildren = Number(children) || 0;
  const peopleFactor = nbAdults + nbChildren * 0.5;

  // 🧮 total price
  let totalPrice = null;
  if (hotel && nights && peopleFactor > 0) {
    totalPrice = hotel.priceValue * nights * peopleFactor;
  }

  // ---------- AVIS CLIENTS (comme avant) ----------
  const [reviews, setReviews] = useState([
    { id: 1, name: "nadine", rating: 5.0, text: "tresssssss bienn" },
    {
      id: 2,
      name: "Sarra",
      rating: 4.5,
      text: "Très bel hôtel, chambre propre et personnel très sympa.",
    },
    {
      id: 3,
      name: "Yassine",
      rating: 4.0,
      text: "Bon rapport qualité-prix, petit déjeuner pourrait être amélioré.",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newRating, setNewRating] = useState("5");
  const [newText, setNewText] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const r = {
      id: Date.now(),
      name: newName.trim(),
      rating: parseFloat(newRating),
      text: newText.trim(),
    };
    setReviews((prev) => [r, ...prev]);
    setNewName("");
    setNewRating("5");
    setNewText("");
  };

  // ---------- BOOK THIS HOTEL ----------
  const handleBook = () => {
    if (!hotel) return;
    navigate("/reservation", {
      state: {
        citySlug,
        cityName,
        hotelId: hotel.id,
        hotelName: hotel.name,
        pricePerNight: hotel.priceValue,
        currency: hotel.currency,
        checkIn,
        checkOut,
        adults: nbAdults,
        children: nbChildren,
        nights,
        totalPrice,
      },
    });
  };

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

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* BREADCRUMB + TITLE */}
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

            {/* 🔥 هنا نظهر التوتال متاع الستاي */}
            {totalPrice !== null && (
              <p className="text-success fw-semibold mb-0">
                Total for your stay ({nights} night(s), {nbAdults} adult(s),{" "}
                {nbChildren} child(ren)): {totalPrice.toFixed(2)}{" "}
                {hotel.currency}
              </p>
            )}
          </div>

          <button
            className="btn fw-semibold"
            style={{
              background: "rgba(155, 107, 255, 0.95)",
              color: "white",
              borderRadius: "999px",
              padding: "0.4rem 1.4rem",
            }}
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>

        {/* MAIN CONTENT */}
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
                  {nights && (
                    <li>
                      Stay length: {nights} night(s) · {nbAdults} adult(s) ·{" "}
                      {nbChildren} child(ren)
                    </li>
                  )}
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

        {/* AVIS CLIENTS + FORM */}
        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Avis des clients</h4>
            <div className="list-group">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="list-group-item border-0 mb-2 shadow-sm rounded"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <strong>{r.name}</strong>
                    <span className="text-warning small">
                      ★ {r.rating.toFixed(1)} / 5
                    </span>
                  </div>
                  <p className="mb-0 text-muted small mt-1">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <h4 className="fw-bold mb-3">Ajouter votre avis</h4>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <form onSubmit={handleAddReview}>
                  <div className="mb-3">
                    <label className="form-label">Votre nom</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Note</label>
                    <select
                      className="form-select"
                      value={newRating}
                      onChange={(e) => setNewRating(e.target.value)}
                    >
                      <option value="5">5 - Excellent</option>
                      <option value="4.5">4.5 - Très bien</option>
                      <option value="4">4 - Bien</option>
                      <option value="3.5">3.5 - Moyen</option>
                      <option value="3">3 - Mauvais</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Commentaire</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
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
                    }}
                  >
                    Envoyer l'avis
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
