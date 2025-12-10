// src/compos/ContactPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost/backend/contactapi.php/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    alert("Network error, please try again later");
    console.error(error);
  }
};

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="mb-4">
          <small className="text-muted">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>{" "}
            / Contact
          </small>
          <h2 className="fw-bold mt-2 mb-1">Contact Us</h2>
          <p className="text-muted mb-0">
            Have a question about a booking or need help? Send us a message.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold mb-2">Support</h5>
                <p className="text-muted mb-2">
                  Our team is available 24/7 to help you with your bookings.
                </p>
                <p className="mb-1">
                  <strong>Email:</strong> support@travana.com 
                  
                </p>
                <p className="mb-0">
                  <strong>Phone:</strong> +216 71 000 000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
