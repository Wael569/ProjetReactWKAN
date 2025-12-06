import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>

      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
