import React from "react";

export default function HotelDetails() {
    return (
        <div className="container my-5">

            {/* Title */}
            <h1 className="fw-bold mb-3">Royal Palace Hotel</h1>
            <p className="text-muted mb-1">Paris, France</p>
            <p className="text-warning fs-4">⭐⭐⭐⭐☆ 4.5</p>

            {/* Image Gallery */}
            <div className="row g-3 mb-4">
                <div className="col-md-8">
                    <img
                        src="/hotel_main.jpg"
                        className="w-100 rounded shadow"
                        style={{ height: "380px", objectFit: "cover" }}
                        alt="main"
                    />
                </div>

                <div className="col-md-4 d-flex flex-column gap-3">
                    <img
                        src="/hotel_room.jpg"
                        className="w-100 rounded shadow"
                        style={{ height: "180px", objectFit: "cover" }}
                        alt="room"
                    />

                    <img
                        src="/hotel_pool.jpg"
                        className="w-100 rounded shadow"
                        style={{ height: "180px", objectFit: "cover" }}
                        alt="pool"
                    />
                </div>
            </div>

            {/* Price + Booking */}
            <div className="d-flex justify-content-between align-items-center p-4 bg-light rounded shadow mb-4">
                <h3 className="fw-bold mb-0">$149 <span className="fs-6 text-muted">/ night</span></h3>

                <button className="btn btn-primary btn-lg">
                    Book Now
                </button>
            </div>

            {/* Description */}
            <div className="mb-4">
                <h3 className="fw-bold mb-3">Description</h3>

                <p className="text-muted">
                    The Royal Palace Hotel offers luxurious rooms with a modern touch,
                    a panoramic view of the Eiffel Tower, fine dining, a large swimming pool,
                    and world-class services. Perfect for couples, families, and business travelers.
                </p>
            </div>

            {/* Services */}
            <div className="mb-4">
                <h3 className="fw-bold mb-3">Services & Amenities</h3>

                <div className="row g-3">

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">🛏️ King Size Beds</div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">🏊 Swimming Pool</div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">🍽️ Restaurant</div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">💻 Free Wi-Fi</div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">🧖 Spa & Wellness</div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-3 rounded shadow-sm bg-white">🚗 Private Parking</div>
                    </div>

                </div>
            </div>

            {/* Reviews */}
            <div className="mb-4">
                <h3 className="fw-bold mb-3">Customer Reviews</h3>

                <div className="p-3 bg-light rounded shadow-sm mb-3">
                    <strong>Sarah M.</strong> – ⭐⭐⭐⭐⭐  
                    <p className="text-muted mb-0">Amazing stay! Staff were very friendly.</p>
                </div>

                <div className="p-3 bg-light rounded shadow-sm mb-3">
                    <strong>Daniel R.</strong> – ⭐⭐⭐⭐☆  
                    <p className="text-muted mb-0">Clean rooms and beautiful location.</p>
                </div>
            </div>

            {/* Map */}
            <div className="mb-5">
                <h3 className="fw-bold mb-3">Location</h3>

                <iframe
                    className="w-100 rounded shadow"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    title="hotel map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999591436542!2d2.2922926156734796!3d48.8583730792871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdfd99f6f4f%3A0x5c676f1ea2966ac5!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1634231811998!5m2!1sen!2sfr"
                ></iframe>
            </div>
        </div>
    );
}
