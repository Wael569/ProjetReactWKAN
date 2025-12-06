// src/ComponentsLogin/UserSignup.jsx
import React, { useState } from "react";

const UserSignup = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.firstName} ${formData.lastName}!`);
  };

  return (
    <>
      {/* 💜 Override background of the whole page */}
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
          className="card shadow border-0"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "15px",
            backgroundColor: "white",
          }}
        >
          <div className="card-body p-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h2
                className="fw-bold"
                style={{ color: "#8B5FBF", fontSize: "2rem" }}
              >
                Sign up
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name row */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@email.com"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="At least 6 characters, 1 number"
                />
                <div className="form-text">At least 6 characters, 1 number</div>
              </div>

              {/* Terms */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label text-dark">
                  I agree to the{" "}
                  <a href="#terms" style={{ color: "#f9105eff" }}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#privacy" style={{ color: "#f9105eff" }}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 py-2 fw-bold border-0 mb-3"
                style={{
                  backgroundColor: "#8B5FBF",
                  color: "white",
                  borderRadius: "-8px",
                  fontSize: "1.1rem",
                }}
              >
                Create an account
              </button>

              {/* Or */}
              <div className="text-center mb-3">
                <span className="text-muted">or</span>
              </div>

              {/* Social Buttons */}
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary py-2"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fab fa-google me-2"></i>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary py-2"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fab fa-facebook me-2"></i>
                  Sign up with Facebook
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-muted mb-0">
                Already have an account?{" "}
                <a
                  href="#login"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#f9105eff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (props.onSwitchToLogin) props.onSwitchToLogin();
                  }}
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
// src/ComponentsLogin/UserSignup.jsx
import React, { useState } from "react";

const UserSignup = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for ${formData.firstName} ${formData.lastName}!`);
  };

  return (
    <>
      {/* 💜 Override background of the whole page */}
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
          className="card shadow border-0"
          style={{
            width: "100%",
            maxWidth: "450px",
            borderRadius: "15px",
            backgroundColor: "white",
          }}
        >
          <div className="card-body p-4">
            {/* Header */}
            <div className="text-center mb-4">
              <h2
                className="fw-bold"
                style={{ color: "#8B5FBF", fontSize: "2rem" }}
              >
                Sign up
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name row */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@email.com"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-dark">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="At least 6 characters, 1 number"
                />
                <div className="form-text">At least 6 characters, 1 number</div>
              </div>

              {/* Terms */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label text-dark">
                  I agree to the{" "}
                  <a href="#terms" style={{ color: "#f9105eff" }}>
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#privacy" style={{ color: "#f9105eff" }}>
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn w-100 py-2 fw-bold border-0 mb-3"
                style={{
                  backgroundColor: "#8B5FBF",
                  color: "white",
                  borderRadius: "-8px",
                  fontSize: "1.1rem",
                }}
              >
                Create an account
              </button>

              {/* Or */}
              <div className="text-center mb-3">
                <span className="text-muted">or</span>
              </div>

              {/* Social Buttons */}
              <div className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary py-2"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fab fa-google me-2"></i>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary py-2"
                  style={{ borderRadius: "8px" }}
                >
                  <i className="fab fa-facebook me-2"></i>
                  Sign up with Facebook
                </button>
              </div>
            </form>
            <div className="text-center mt-4">
              <p className="text-muted mb-0">
                Already have an account?{" "}
                <a
                  href="#login"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#f9105eff" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (props.onSwitchToLogin) props.onSwitchToLogin();
                  }}
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
