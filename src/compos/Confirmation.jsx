// src/compos/Confirmation.jsx
import React, { useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Confirmation() {
  const location = useLocation();
  const data = location.state || {};
  const ticketRef = useRef(null);

  const handleDownloadPdf = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(
        `Travana_Reservation_${data.hotelName || "ticket"}.pdf`
      );
    } catch (err) {
      console.error("PDF error:", err);
      alert("Problem while generating the PDF. Try again.");
    }
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container" style={{ maxWidth: "700px" }}>
        {/* HEADER */}
        <div
          className="p-4 rounded-3 shadow-sm text-white mb-4 d-flex justify-content-between align-items-center"
          style={{
            background:
              "linear-gradient(90deg, #8a4fff 0%, #ff7ad9 50%, #ff9f40 100%)",
          }}
        >
          <div>
            <h2 className="fw-bold mb-1">Reservation Confirmed 🎉</h2>
            <p className="mb-0">
              Your booking has been successfully completed.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-light fw-semibold"
            style={{ borderRadius: "999px", fontSize: "0.9rem" }}
            onClick={handleDownloadPdf}
          >
            ⬇ Download PDF
          </button>
        </div>

        {/* TICKET CONTENT ONLY (PDF) */}
        <div className="card shadow-sm border-0">
          <div className="card-body" ref={ticketRef}>
            <h5 className="fw-bold mb-3">Booking Details</h5>

            <p>
              <strong>Hotel:</strong> {data.hotelName}
            </p>
            <p>
              <strong>City:</strong> {data.cityName}
            </p>

            <p>
              <strong>Check-in:</strong> {data.checkIn}
            </p>
            <p>
              <strong>Check-out:</strong> {data.checkOut}
            </p>

            <p>
              <strong>Guests:</strong> {data.adults} adult(s),{" "}
              {data.children} child(ren)
            </p>

            <p>
              <strong>Nights:</strong> {data.nights}
            </p>

            <p>
              <strong>Total Paid:</strong>{" "}
              {data.totalPrice && data.currency
                ? `${data.totalPrice.toFixed(2)} ${data.currency}`
                : "N/A"}
            </p>

            <hr />

            <h5 className="fw-bold mb-3">Guest Information</h5>

            <p>
              <strong>Name:</strong> {data.guestName}
            </p>
            <p>
              <strong>Email:</strong> {data.guestEmail}
            </p>
            <p>
              <strong>Phone:</strong> {data.guestPhone}
            </p>
          </div>

          {/* HNE BACK TO HOME – YB9A F PAGE BARCHA, MA YOD5OLCH FEL PDF */}
          <div className="card-footer bg-white border-0 text-center pb-4">
            <Link
              to="/"
              className="btn text-white fw-semibold px-4"
              style={{
                background:
                  "linear-gradient(to right, #8a4fff, #ff7ad9, #ff9f40)",
                borderRadius: "999px",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
