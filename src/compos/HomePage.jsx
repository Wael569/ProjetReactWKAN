// src/compos/HomePage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function HomePage({ userName, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/reservation");
  };

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/");
  };

  const displayName = userName || "";

  // navigate to city hotels page
  const goToCityHotels = (citySlug) => {
    navigate(`/hotels/${citySlug}`);
  };

  return (
    <div className="bg-white text-dark">
      {/* HERO SECTION */}
      <div
        className="position-relative"
        style={{
          height: "85vh",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to bottom, rgba(123, 97, 255, 0.7), rgba(89, 45, 200, 0.6))",
          }}
        ></div>

        {/* NAVBAR */}
        <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center gap-2 text-white">
            <div
              className="rounded d-flex justify-content-center align-items-center"
              style={{
                width: "35px",
                height: "35px",
                background: "rgba(255,255,255,0.2)",
              }}
            >
              T
            </div>
            <span className="fw-semibold fs-5">Travana</span>
          </div>

          {/* Menu + Auth */}
          <div className="d-flex align-items-center gap-4">
            <nav className="d-none d-md-flex gap-4 text-white-50 small align-items-center">
              <Link
                to="/"
                className="fw-semibold fs-5 text-white text-decoration-none"
              >
                Home
              </Link>
              <Link
                to="/offers"
                className="fw-semibold fs-5 text-white text-decoration-none"
              >
                Offers
              </Link>
              <Link
                to="/news"
                className="fw-semibold fs-5 text-white text-decoration-none"
              >
                News
              </Link>
              <Link
                to="/contact"
                className="fw-semibold fs-5 text-white text-decoration-none"
              >
                Contact
              </Link>
            </nav>

            {isLoggedIn ? (
              <div className="d-flex align-items-center gap-3">
                {/* Welcome badge */}
                <div
                  className="d-flex align-items-center px-3 py-1 rounded-pill shadow-sm"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-2"
                    style={{
                      width: "28px",
                      height: "28px",
                      background: "rgba(255,255,255,0.35)",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                      color: "#4b2c82",
                    }}
                  >
                    {displayName.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-start">
                    <div
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        opacity: 0.8,
                      }}
                    >
                      Welcome
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                      {displayName}
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-sm fw-semibold px-3 py-2 border-0"
                  style={{
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.8))",
                    color: "#6b3df0",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
                  }}
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-light fw-semibold">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="position-relative text-center top-50 translate-middle-y text-white">
          <h1 className="fw-bold display-4">DISCOVER</h1>
          <p className="fw-bold display-4">the world</p>

          {/* Search / Booking Card */}
          <div
            className="container mt-4 p-4 rounded shadow text-white"
            style={{
              background: "linear-gradient(to right, #ffb370, #9b6bff)",
            }}
          >
            <div className="row g-3">
              <div className="col-md">
                <label className="form-label">Destination</label>
                <input className="form-control" placeholder="Where to?" />
              </div>
              <div className="col-md">
                <label className="form-label">Check In</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md">
                <label className="form-label">Check Out</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md">
                <label className="form-label">Adults</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  defaultValue="1"
                />
              </div>
              <div className="col-md">
                <label className="form-label">Children</label>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  defaultValue="0"
                />
              </div>
            </div>
          </div>

          <button
            className="btn btn-lg text-white mt-3"
            style={{
              background: "linear-gradient(to right, #ff9f40, #8a4fff)",
            }}
            onClick={handleExplore}
          >
            EXPLORE NOW
          </button>
        </div>
      </div>

      {/* SECTION 1: TOP DESTINATIONS IN TUNISIA */}
      <div className="container my-5">
        <h2 className="fw-bold mb-1">
          Top Destinations for Urban Getaways in Tunisia
        </h2>
        <p className="text-muted mb-4">
          Discover hotels in the most popular cities across Tunisia.
        </p>

        <div className="row g-4">
          {/* TUNIS */}
          <div className="col-md-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ cursor: "pointer" }}
              onClick={() => goToCityHotels("tunis")}
            >
              <img src="/dest-tunis.jpeg" className="card-img-top" alt="Tunis" />
              <div className="card-body">
                <h5 className="fw-semibold mb-1">Tunis</h5>
                <p className="small text-muted mb-1">
                  Friendly locals, historic old town, sunny weather.
                </p>
                <p className="fw-semibold small mb-0">575 hotels</p>
              </div>
            </div>
          </div>

          {/* SOUSSE */}
          <div className="col-md-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ cursor: "pointer" }}
              onClick={() => goToCityHotels("sousse")}
            >
              <img
                src="/dest-sousse.jpg"
                className="card-img-top"
                alt="Sousse"
              />
              <div className="card-body">
                <h5 className="fw-semibold mb-1">Sousse</h5>
                <p className="small text-muted mb-1">
                  Beach, sunny climate, seaside walks.
                </p>
                <p className="fw-semibold small mb-0">392 hotels</p>
              </div>
            </div>
          </div>

          {/* HAMMAMET */}
          <div className="col-md-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ cursor: "pointer" }}
              onClick={() => goToCityHotels("hammamet")}
            >
              <img
                src="/dest-hammamet.jpeg"
                className="card-img-top"
                alt="Hammamet"
              />
              <div className="card-body">
                <h5 className="fw-semibold mb-1">Hammamet</h5>
                <p className="small text-muted mb-1">
                  Seaside, relaxation, sandy beaches.
                </p>
                <p className="fw-semibold small mb-0">323 hotels</p>
              </div>
            </div>
          </div>

          {/* LA MARSA */}
          <div className="col-md-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ cursor: "pointer" }}
              onClick={() => goToCityHotels("la-marsa")}
            >
              <img
                src="/dest-lamarsa.jpg"
                className="card-img-top"
                alt="La Marsa"
              />
              <div className="card-body">
                <h5 className="fw-semibold mb-1">La Marsa</h5>
                <p className="small text-muted mb-1">
                  Restaurants, beach, relaxation.
                </p>
                <p className="fw-semibold small mb-0">241 hotels</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="container my-5 text-center">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
              <h5 className="fw-bold">Best Prices</h5>
              <p className="text-muted mb-0">
                We work with top partners to offer you great deals.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
              <h5 className="fw-bold">Trusted Reviews</h5>
              <p className="text-muted mb-0">
                Real feedback from travelers like you.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-muted mb-0">
                Our team is here to help you anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
