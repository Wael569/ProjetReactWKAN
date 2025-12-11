import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div
          className="p-4 rounded-3 shadow-sm text-white mb-4"
          style={{
            background:
              "linear-gradient(90deg, #8a4fff 0%, #ff7ad9 50%, #ff9f40 100%)",
          }}
        >
          <h2 className="fw-bold mb-1">Reservation Confirmed 🎉</h2>
          <p>Your booking has been successfully completed.</p>
        </div>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Booking Details</h5>

            <p><strong>Hotel:</strong> {data.hotelName}</p>
            <p><strong>City:</strong> {data.cityName}</p>

            <p><strong>Check-in:</strong> {data.checkIn}</p>
            <p><strong>Check-out:</strong> {data.checkOut}</p>

            <p>
              <strong>Guests:</strong> {data.adults} adult(s), {data.children} child(ren)
            </p>

            <p><strong>Nights:</strong> {data.nights}</p>

            <p>
              <strong>Total Paid:</strong>{" "}
              {data.totalPrice && data.currency
                ? `${data.totalPrice.toFixed(2)} ${data.currency}`
                : "N/A"}
            </p>

            <hr />

            <h5 className="fw-bold mb-3">Guest Information</h5>

            <p><strong>Name:</strong> {data.guestName}</p>
            <p><strong>Email:</strong> {data.guestEmail}</p>
            <p><strong>Phone:</strong> {data.guestPhone}</p>

            <div className="text-center mt-4">
              <Link
                to="/"
                className="btn text-white fw-semibold px-4"
                style={{
                  background:
                    "linear-gradient(to right, #8a4fff, #ff7ad9, #ff9f40)",
                  borderRadius: "999px",
                }}
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
