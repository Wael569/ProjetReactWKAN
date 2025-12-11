// src/compos/Reservation.jsx
import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Reservation() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 data jeya mel HotelDetails
  const bookingData = location.state || {};

  const {
    hotelName = "your stay",
    cityName = "",
    checkIn,
    checkOut,
    adults = 1,
    children = 0,
    nights: nightsFromState,
    pricePerNight,
    currency = "€",
    totalPrice: totalFromState,
  } = bookingData;

  // 🧮 re-calculate nights if needed
  const nightsComputed = useMemo(() => {
    if (nightsFromState) return nightsFromState;
    if (!checkIn || !checkOut) return null;
    const d1 = new Date(checkIn);
    const d2 = new Date(checkOut);
    const diffMs = d2 - d1;
    if (isNaN(diffMs) || diffMs <= 0) return null;
    return diffMs / (1000 * 60 * 60 * 24);
  }, [checkIn, checkOut, nightsFromState]);

  // 🧮 total price (fallback in case not passed)
  const totalPrice =
    totalFromState ??
    (pricePerNight && nightsComputed
      ? pricePerNight * (Number(adults) + Number(children) * 0.5) * nightsComputed
      : null);

  // 🔹 form user details only (dates/guests read-only)
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ma na3mlouch alert, nkhallou HTML "required" ychouf el champs
    if (!guestName.trim() || !guestEmail.trim() || !guestPhone.trim()) {
      return;
    }

    // 👉 نمشيوا لصفحة التأكيد مع كل الداتا
    navigate("/confirmation", {
      state: {
        hotelName,
        cityName,
        checkIn,
        checkOut,
        adults,
        children,
        nights: nightsComputed,
        totalPrice,
        currency,
        guestName,
        guestEmail,
        guestPhone,
      },
    });
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* HEADER */}
        <div
          className="rounded-3 shadow-sm mb-4 text-white p-4"
          style={{
            background:
              "linear-gradient(90deg, #ff9f40 0%, #ff7ad9 40%, #8a4fff 100%)",
          }}
        >
          <h2 className="fw-bold mb-1">Make Your Reservation</h2>
          <p className="mb-0">
            You are booking:{" "}
            <strong>
              {hotelName} {cityName ? `– ${cityName}` : ""}
            </strong>
          </p>
          {totalPrice && (
            <p className="mb-0 mt-1">
              Estimated total for your stay:{" "}
              <strong>
                {totalPrice.toFixed(2)} {currency}
              </strong>
            </p>
          )}
        </div>

        {/* FORM CARD */}
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              {/* STAY DETAILS */}
              <h5 className="fw-bold mb-3">Stay Details</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">Check In</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkIn || ""}
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Check Out</label>
                  <input
                    type="date"
                    className="form-control"
                    value={checkOut || ""}
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Adults</label>
                  <input
                    type="number"
                    className="form-control"
                    value={adults}
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Children</label>
                  <input
                    type="number"
                    className="form-control"
                    value={children}
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Nights</label>
                  <input
                    type="number"
                    className="form-control"
                    value={nightsComputed || ""}
                    readOnly
                  />
                </div>
              </div>

              {/* GUEST DETAILS */}
              <h5 className="fw-bold mb-3">Guest Details</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your phone number"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* SUMMARY */}
              {totalPrice && (
                <div className="mb-4 p-3 rounded bg-light">
                  <p className="mb-1">
                    <strong>Summary:</strong>
                  </p>
                  <p className="mb-0 small text-muted">
                    {nightsComputed} night(s) · {adults} adult(s) · {children}{" "}
                    child(ren) – Estimated total:{" "}
                    <strong>
                      {totalPrice.toFixed(2)} {currency}
                    </strong>
                  </p>
                </div>
              )}

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn text-white fw-semibold"
                  style={{
                    background:
                      "linear-gradient(to right, #ff9f40, #8a4fff)",
                  }}
                >
                  Confirm reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
