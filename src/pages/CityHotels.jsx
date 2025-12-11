// src/pages/CityHotels.jsx
import React from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { getHotelsByCity } from "../compos/hotelsData";

export default function CityHotels() {
  const { citySlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // data jeya mel HomePage (Explore Now)
  const search = location.state || {};
  const { checkIn, checkOut, adults = 1, children = 0 } = search;

  const hotels = getHotelsByCity(citySlug) || [];

  const cityName = citySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

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
  // مثال بسيط: طفل بنص السعر
  const peopleFactor = nbAdults + nbChildren * 0.5;

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              / Hotels in {cityName}
            </small>
            <h2 className="fw-bold mb-1 mt-1">Hotels in {cityName}</h2>

            {nights ? (
              <p className="text-muted mb-0">
                For your search:{" "}
                <strong>{nights}</strong> night(s) ·{" "}
                <strong>{nbAdults}</strong> adult(s) ·{" "}
                <strong>{nbChildren}</strong> child(ren)
              </p>
            ) : (
              <p className="text-muted mb-0">
                Browse a selection of stays handpicked for this destination.
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

        {/* LISTE DES HOTELS */}
        {hotels.length === 0 ? (
          <div className="alert alert-info">
            No hotels found for this destination.
          </div>
        ) : (
          <div className="row g-4">
            {hotels.map((hotel) => {
              const basePrice = hotel.priceValue;

              // 👇 TOTAL = prix/nuit × nuits × facteur personnes
              let total = null;
              if (nights && peopleFactor > 0) {
                total = basePrice * nights * peopleFactor;
              }

              return (
                <div className="col-md-4" key={hotel.id}>
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{ borderRadius: "18px" }}
                  >
                    <img
                      src={hotel.image}
                      className="card-img-top"
                      alt={hotel.name}
                      style={{
                        borderTopLeftRadius: "18px",
                        borderTopRightRadius: "18px",
                        height: "210px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="fw-semibold mb-1">{hotel.name}</h5>

                      <div className="d-flex align-items-center mb-1">
                        <span style={{ color: "#f5b300", marginRight: 4 }}>★</span>
                        <span className="text-muted small">
                          {hotel.rating} / 5
                        </span>
                      </div>

                      {/* prix / nuit */}
                      <p className="fw-semibold mb-1">
                        {hotel.price} ({hotel.currency})
                      </p>

                      {/* TOTAL POUR LE SÉJOUR */}
                      {total !== null && (
                        <p className="text-success fw-semibold mb-2">
                          Total for your stay:{" "}
                          {total.toFixed(2)} {hotel.currency}
                        </p>
                      )}

                      <p className="small text-muted mb-3">
                        {hotel.location}
                      </p>

                      <button
                        className="btn mt-auto text-white fw-semibold"
                        style={{
                          background:
                            "linear-gradient(to right, #c47bff, #8b5bff)",
                          borderRadius: "999px",
                        }}
                        onClick={() =>
                          navigate(`/hotels/${citySlug}/${hotel.id}`, {
                            state: search,
                          })
                        }
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
