// src/ComponentsLogin/UserLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UserLogin = ({ onLogin }) => {
  const [name, setName] = useState("");   // 🔹 بدلنا email → name
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Welcome ${name}!`);

    if (onLogin) {
      onLogin(name);   // 🔹 نبعت الإسم لـ App.jsx
    }

    navigate("/"); // redirect to Home
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
          className="card shadow border-0 p-3"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "15px",
            backgroundColor: "white",
          }}
        >
          <div className="text-center mb-4">
            <h2
              className="fw-bold mb-2"
              style={{ color: "#8B5FBF", fontSize: "2rem" }}
            >
              Hello!
            </h2>
            <h4 style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  color: "#8B5FBF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Sign in{" "}
              </span>
              <span
                style={{
                  color: "#212529",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                your account
              </span>
            </h4>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 🔹 Name instead of Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold text-dark">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-3 text-end">
              <Link
                to="/forgot"
                className="text-decoration-none fw-semibold"
                style={{ color: "#f9105eff" }}
              >
                forget password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn w-100 py-2 fw-bold border-0"
              style={{
                backgroundColor: "#8B5FBF",
                color: "white",
                borderRadius: "8px",
                fontSize: "1.1rem",
              }}
            >
              Sign in
            </button>
          </form>

          <div className="text-center mt-3">
            <p className="text-muted mb-0">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-decoration-none fw-bold"
                style={{ color: "#f9105eff" }}
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
