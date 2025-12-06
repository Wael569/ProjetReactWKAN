import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Reservation({ onBackToHome }) {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name}!`);
    // Reset form
    setFormData({
      destination: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      name: "",
      email: "",
      phone: ""
    });
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow border-0">
              <div className="card-header text-white py-4" style={{
                background: "linear-gradient(to right, #ff9f40, #8a4fff)"
              }}>
                <h2 className="mb-0 fw-bold">Make Your Reservation</h2>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Hotel Details Section */}
                  <h5 className="fw-bold mb-3 mt-3">Hotel Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Destination</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Where to?" 
                        required 
                      />
                    </div>
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
                      <label className="form-label fw-semibold">Check Out</label>
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
                      <label className="form-label fw-semibold">Children</label>
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
                      <label className="form-label fw-semibold">Full Name</label>
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

                  {/* Buttons */}
                  <div className="d-flex gap-2 mt-4">
                    <button 
                      type="submit" 
                      className="btn btn-lg text-white flex-grow-1"
                      style={{
                        background: "linear-gradient(to right, #ff9f40, #8a4fff)"
                      }}
                    >
                      Confirm Reservation
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-lg btn-outline-secondary"
                      onClick={onBackToHome}
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
