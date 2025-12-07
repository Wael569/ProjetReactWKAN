// src/compos/HotelsByCity.jsx
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { HOTELS_BY_CITY } from "./hotelsData";

export default function HotelsByCity() {
  const { citySlug } = useParams();
  const navigate = useNavigate();

  const hotels = HOTELS_BY_CITY[citySlug?.toLowerCase()] || [];

  // Pretty city name: la-marsa → La Marsa
  const cityName = citySlug
    ? citySlug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "";

  const goToDetails = (hotelId) => {
    navigate(`/hotels/${citySlug}/${hotelId}`);
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container">
        {/* Header / breadcrumb */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              / Hotels in {cityName}
            </small>
            <h2 className="fw-bold mb-1 mt-1">Hotels in {cityName}</h2>
            <p className="text-muted mb-0">
              Browse a selection of stays handpicked for this destination.
            </p>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>

        {hotels.length === 0 ? (
          <div className="alert alert-info">
            No hotels found for this destination yet.
          </div>
        ) : (
          <div className="row g-4">
            {hotels.map((hotel) => (
              <div className="col-md-4" key={hotel.id}>
                <div className="card border-0 shadow-sm h-100">
                  {/* Hotel image */}
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-1">{hotel.name}</h5>
                    <p className="text-muted mb-1">
                      ⭐ {hotel.rating} / 5
                    </p>
                    <p className="fw-semibold mb-3">{hotel.price}</p>
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => goToDetails(hotel.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
