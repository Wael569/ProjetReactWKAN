// src/ComponentsLogin/ForgotPassword.jsx
import React, { useState } from "react";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`A reset link has been sent to: ${email}`);
  };
  return (
    <>
      <style>
        {`
          body {
            background-color: #8B5FBF !important;
          }
        `}
      </style>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="card shadow border-0 p-4"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "15px",
            backgroundColor: "white",
          }}
        >
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-3" style={{ color: "#8B5FBF" }}>
              Forgot Password
            </h2>
            <p style={{ color: "#555", fontSize: "0.95rem" }}>
              Enter your email address and we will send you instructions to
              reset your password.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark">Email</label>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn w-100 py-2 fw-bold border-0 mt-2"
              style={{
                backgroundColor: "#8B5FBF",
                color: "white",
                borderRadius: "8px",
                fontSize: "1.1rem",
              }}
            >
              Send Reset Link
            </button>
          </form>
          <div className="text-center mt-4">
            <a
              href="#back"
              className="text-decoration-none fw-semibold"
              style={{ color: "#f9105eff" }}
              onClick={(e) => {
                e.preventDefault();
                if (props.onBackToLogin) props.onBackToLogin();
              }}
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
