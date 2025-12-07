// src/compos/NewsPage.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">
              <Link to="/" className="text-decoration-none">
                Home
              </Link>{" "}
              / News
            </small>
            <h2 className="fw-bold mt-2 mb-1">Travel News</h2>
            <p className="text-muted mb-0">
              Stay up to date with the latest travel tips and updates.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold mb-2">
                  New seaside hotels added in Hammamet
                </h5>
                <p className="text-muted small mb-2">March 2025</p>
                <p className="text-muted mb-0">
                  Discover a selection of new properties along the coast,
                  perfect for summer holidays with family or friends.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold mb-2">
                  City break ideas for a weekend in Tunis
                </h5>
                <p className="text-muted small mb-2">February 2025</p>
                <p className="text-muted mb-0">
                  Explore the medina, enjoy local cafés and book a central
                  hotel for a short but rich escape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
