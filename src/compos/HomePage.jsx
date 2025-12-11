// src/compos/HomePage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function HomePage({ userName, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const displayName = userName || "";

  // 🔹 state mta3 formulaire de recherche
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // helper: kol action 9bal ma yetsar, ntcheckiw login
  const requireLogin = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return false;
    }
    return true;
  };

  // mapping ben destination text w citySlug
  const mapDestinationToSlug = (dest) => {
    const d = dest.trim().toLowerCase();
    const map = {
      tunis: "tunis",
      sousse: "sousse",
      hammamet: "hammamet",
      "la marsa": "la-marsa",
      "la-marsa": "la-marsa",
    };
    return map[d] || null;
  };

  const handleExplore = () => {
    // lezem login louwel
    if (!requireLogin()) return;

    const citySlug = mapDestinationToSlug(destination);
    if (!citySlug) {
      alert(
        "Please enter a valid destination: Tunis, Sousse, Hammamet or La Marsa."
      );
      return;
    }
    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    navigate(`/hotels/${citySlug}`, {
      state: {
        checkIn,
        checkOut,
        adults: Number(adults),
        children: Number(children),
      },
    });
  };

  const handleLogoutClick = () => {
    if (onLogout) onLogout();
    navigate("/login");
  };

  // click from cards ↓
  const goToCityHotels = (citySlug) => {
    if (!requireLogin()) return;
    navigate(`/hotels/${citySlug}`);
  };

  // ⭐ Avis sur le site Travana (section homepage)
  const [siteReviews, setSiteReviews] = useState([
    {
      id: 1,
      name: "Nadine",
      rating: 5.0,
      text:
        "Réservation rapide et simple, j'ai trouvé mon hôtel à Hammamet en quelques minutes seulement.",
    },
    {
      id: 2,
      name: "Sarra",
      rating: 4.8,
      text:
        "Interface claire, beaucoup de choix d'hôtels et des prix très intéressants pour Sousse et Tunis.",
    },
    {
      id: 3,
      name: "Yassine",
      rating: 4.6,
      text:
        "Service client réactif, j'ai pu modifier ma réservation sans complication. Je recommande Travana.",
    },
  ]);

  const [showSiteForm, setShowSiteForm] = useState(false);
  const [siteAuthor, setSiteAuthor] = useState("");
  const [siteRating, setSiteRating] = useState("5");
  const [siteComment, setSiteComment] = useState("");

  const handleSubmitSiteReview = (e) => {
    e.preventDefault();
    if (!siteAuthor.trim() || !siteComment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: siteAuthor.trim(),
      rating: parseFloat(siteRating),
      text: siteComment.trim(),
    };

    setSiteReviews((prev) => [newReview, ...prev]);
    setSiteAuthor("");
    setSiteRating("5");
    setSiteComment("");
    setShowSiteForm(false);
  };

  // click 3ala "Leave a review"
  const handleLeaveReviewClick = () => {
    if (!requireLogin()) return;
    setShowSiteForm((v) => !v);
  };

  // handler lel navbar links (Offers / News / Contact)
  const handleProtectedNavClick = (e, path) => {
    if (!requireLogin()) {
      e.preventDefault();
      return;
    }
    navigate(path);
    e.preventDefault(); // 5atir ista3melna navigate bel hand
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

              <a
                href="/offers"
                className="fw-semibold fs-5 text-white text-decoration-none"
                onClick={(e) => handleProtectedNavClick(e, "/offers")}
              >
                Offers
              </a>

              <a
                href="/news"
                className="fw-semibold fs-5 text-white text-decoration-none"
                onClick={(e) => handleProtectedNavClick(e, "/news")}
              >
                News
              </a>

              <a
                href="/contact"
                className="fw-semibold fs-5 text-white text-decoration-none"
                onClick={(e) => handleProtectedNavClick(e, "/contact")}
              >
                Contact
              </a>
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
                <input
                  className="form-control"
                  placeholder="Tunis, Sousse, Hammamet, La Marsa..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="col-md">
                <label className="form-label">Check In</label>
                <input
                  type="date"
                  className="form-control"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="col-md">
                <label className="form-label">Check Out</label>
                <input
                  type="date"
                  className="form-control"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="col-md">
                <label className="form-label">Adults</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                />
              </div>
              <div className="col-md">
                <label className="form-label">Children</label>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
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

      {/* 💬 SITE REVIEWS SECTION */}
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <h2 className="fw-bold mb-1">What travelers say about Travana</h2>
            <p className="text-muted mb-0">
              Real feedback from people who used Travana to book their stays.
            </p>
          </div>

          <button
            className="btn btn-outline-dark btn-sm rounded-pill"
            onClick={handleLeaveReviewClick}
          >
            ✏️ Leave a review
          </button>
        </div>

        <div className="row g-4 mt-3">
          {siteReviews.map((rev) => (
            <div className="col-md-4" key={rev.id}>
              <div className="h-100 p-3 shadow rounded bg-white text-start">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-bold mb-0">{rev.name}</h6>
                  <span className="text-warning fw-semibold">
                    ★ {rev.rating.toFixed(1)} / 5
                  </span>
                </div>
                <p className="text-muted mb-0">{rev.text}</p>
              </div>
            </div>
          ))}
        </div>

        {showSiteForm && (
          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="p-3 shadow rounded bg-white text-start">
                <h5 className="fw-bold mb-3">Write a review about Travana</h5>
                <form onSubmit={handleSubmitSiteReview}>
                  <div className="mb-3">
                    <label className="form-label">Your name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={siteAuthor}
                      onChange={(e) => setSiteAuthor(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Rating</label>
                    <select
                      className="form-select"
                      value={siteRating}
                      onChange={(e) => setSiteRating(e.target.value)}
                    >
                      <option value="5">5 - Excellent</option>
                      <option value="4.5">4.5 - Very good</option>
                      <option value="4">4 - Good</option>
                      <option value="3.5">3.5 - Average</option>
                      <option value="3">3 - Poor</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Comment</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={siteComment}
                      onChange={(e) => setSiteComment(e.target.value)}
                      placeholder="Share your experience with Travana..."
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
                    Submit review
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
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
