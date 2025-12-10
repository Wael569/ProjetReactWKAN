import React, { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PROMO_CODES = {
  WEEKEND20: {
    label: "Weekend Escape -20%",
    discount: 0.2, // 20%
  },
  FAMILYFREEKID: {
    label: "Family Special",
    discount: 0.15, // tnajjem tbadelha kif t7eb
  },
  EARLY15: {
    label: "Early Booking -15%",
    discount: 0.15, // 15%
  },
};


export default function Reservation({ onBackToHome }) {
  const location = useLocation();
  const navigate = useNavigate();

  // data jeya mel HotelDetails (hotelName, pricePerNight, currency...)
  const bookingData = location.state || {};

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    name: "",
    email: "",
    phone: "",
  });

  // promo code state
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0); // 0 → ma famma ch remisé
  const [promoStatus, setPromoStatus] = useState(null); // { type: "success" | "error", message: "" }

  const pricePerNight = bookingData.pricePerNight || 0;
  const currency = bookingData.currency || "€";
  const hotelName = bookingData.hotelName || "your stay";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // apply promo
  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();

    if (!code) {
      setAppliedDiscount(0);
      setPromoStatus({
        type: "error",
        message: "Please enter a promo code.",
      });
      return;
    }

    const promo = PROMO_CODES[code];

    if (!promo) {
      setAppliedDiscount(0);
      setPromoStatus({
        type: "error",
        message: "Invalid promo code.",
      });
      return;
    }

    setAppliedDiscount(promo.discount);
    setPromoStatus({
      type: "success",
      message: `Code "${code}" applied (${promo.label}).`,
    });
  };

  // calcul nights + prix
  const { nights, basePrice, finalPrice } = useMemo(() => {
    let n = 1;
    if (formData.checkIn && formData.checkOut) {
      const inDate = new Date(formData.checkIn);
      const outDate = new Date(formData.checkOut);
      const diffMs = outDate - inDate;
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      n = diffDays > 0 ? diffDays : 1;
    }

    const adults = Number(formData.adults) || 1;
    const children = Number(formData.children) || 0;

    // children = 0.5 men price (tnajjem tbadelha)
    const guestFactor = adults + children * 0.5;

    const base = pricePerNight * n * guestFactor;
    const final = base * (1 - appliedDiscount);

    return {
      nights: n,
      basePrice: base || 0,
      finalPrice: final || 0,
    };
  }, [
    formData.checkIn,
    formData.checkOut,
    formData.adults,
    formData.children,
    pricePerNight,
    appliedDiscount,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload
    const payload = {
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      adults: formData.adults,
      children: formData.children,
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      promo_code: promoCode,
      nights: nights,
      price_per_night: pricePerNight,
      total_price: finalPrice,
    };

    try {
      const response = await fetch("http://localhost/backend/apireservation.php/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Reservation confirmed! ${data.message}`);
        // reset
        setFormData({
          checkIn: "",
          checkOut: "",
          adults: 1,
          children: 0,
          name: "",
          email: "",
          phone: "",
        });
        setPromoCode("");
        setAppliedDiscount(0);
        setPromoStatus(null);
        navigate("/"); // back to home or wherever you want
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Reservation error:", error);
      alert(`Network error: ${error.message}`);
    }
  };

  const handleBack = () => {
    if (onBackToHome) onBackToHome();
    else navigate("/");
  };
  

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow border-0">
              <div
                className="card-header text-white py-4"
                style={{
                  background: "linear-gradient(to right, #ff9f40, #8a4fff)",
                }}
              >
                <h2 className="mb-0 fw-bold">Make Your Reservation</h2>
                {bookingData.hotelName && (
                  <p className="mb-0 mt-1">
                    You are booking: <strong>{hotelName}</strong>
                  </p>
                )}
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Stay Details Section */}
                  <h5 className="fw-bold mb-3 mt-3">Stay Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Check In</label>
                      <input
                        type="date"
                        className="form-control"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Check Out
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-semibold">Adults</label>
                      <input
                        type="number"
                        className="form-control"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        min="1"
                        required
                      />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label fw-semibold">
                        Children
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        name="children"
                        value={formData.children}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/* Guest Details Section */}
                  <h5 className="fw-bold mb-3">Guest Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone"
                        required
                      />
                    </div>
                  </div>

                  {/* Promo code */}
                  <hr className="my-4" />
                  <h5 className="fw-bold mb-3">Promo Code</h5>
                  <div className="row g-2 align-items-end mb-2">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Enter your code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="e.g. WEEKEND20"
                      />
                    </div>
                    <div className="col-md-3">
                      <button
                        type="button"
                        className="btn w-100 text-white fw-semibold"
                        style={{
                          background:
                            "linear-gradient(to right, #ff9f40, #8a4fff)",
                        }}
                        onClick={handleApplyPromo}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  {promoStatus && (
                    <p
                      className={`small mb-0 ${
                        promoStatus.type === "success"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {promoStatus.message}
                    </p>
                  )}

                  {/* Summary / total price */}
                  <hr className="my-4" />
                  <div className="p-3 rounded" style={{ background: "#f8f5ff" }}>
                    <h6 className="fw-bold mb-2">Price Summary</h6>
                    {bookingData.hotelName && (
                      <p className="mb-1 text-muted">
                        Hotel: <strong>{hotelName}</strong>
                      </p>
                    )}
                    <p className="mb-1 text-muted">
                      Nights: <strong>{nights}</strong>
                    </p>
                    <p className="mb-1 text-muted">
                      Guests:{" "}
                      <strong>
                        {formData.adults} adults, {formData.children} children
                      </strong>
                    </p>
                    <p className="mb-1 text-muted">
                      Price per night:{" "}
                      <strong>
                        {currency} {pricePerNight.toFixed(2)}
                      </strong>
                    </p>
                    {appliedDiscount > 0 && (
                      <p className="mb-1 text-muted">
                        Discount:{" "}
                        <strong>
                          -{Math.round(appliedDiscount * 100)}% (
                          {currency}{" "}
                          {(basePrice - finalPrice).toFixed(2)})
                        </strong>
                      </p>
                    )}
                    <p className="mb-0">
                      Total:{" "}
                      <strong>
                        {currency} {finalPrice.toFixed(2)}
                      </strong>
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="d-flex gap-2 mt-4">
                    <button
                      type="submit"
                      className="btn btn-lg text-white flex-grow-1"
                      style={{
                        background:
                          "linear-gradient(to right, #ff9f40, #8a4fff)",
                      }}
                    >
                      Confirm Reservation
                    </button>
                    <button
                      type="button"
                      className="btn btn-lg btn-outline-secondary"
                      onClick={handleBack}
                    >
                      Back to Home
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
