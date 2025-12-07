// src/compos/HotelDetails.jsx
import React from "react";
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

  const handleBook = () => {
    navigate("/reservation", {
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

        {/* Content */}
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
      </div>
    </div>
  );
}
