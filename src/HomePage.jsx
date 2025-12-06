import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function HomePage() {
    return (
        <div className="bg-white text-dark">

            <div
                className="position-relative"
                style={{
                    height: "85vh",
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(123, 97, 255, 0.7), rgba(89, 45, 200, 0.6))"
                    }}
                ></div>

               
                <div className="container position-relative py-3 d-flex justify-content-between align-items-center">
                  
                    <div className="d-flex align-items-center gap-2 text-white">
                        <div
                            className="rounded d-flex justify-content-center align-items-center"
                            style={{
                                width: "35px",
                                height: "35px",
                                background: "rgba(255,255,255,0.2)"
                            }}
                        >
                            T
                        </div>
                        <span className="fw-semibold fs-5">Travana</span>
                    </div>

                  
                    <nav className="d-none d-md-flex gap-4 text-white-50 small align-items-center">
                        <a className="fw-semibold fs-5 text-white text-decoration-none">Home</a>
                        <a className="fw-semibold fs-5 text-white text-decoration-none">Offers</a>
                        <a className="fw-semibold fs-5 text-white text-decoration-none">News</a>
                        <a className="fw-semibold fs-5 text-white text-decoration-none">Contact</a>

                        <button className="btn btn-outline-light px-3 py-1 rounded-pill">
                            Login
                        </button>
                        <button
                            className="btn px-3 py-1 rounded-pill text-white"
                            style={{
                                background: "linear-gradient(to right, #ff9f40, #8a4fff)"
                            }}
                        >
                            Sign In
                        </button>
                    </nav>
                </div>

                <div className="position-relative text-center top-50 translate-middle-y text-white">
                    <h1 className="fw-bold display-4">DISCOVER</h1>
                    <p className="fw-bold display-4">the world</p>

                    <div
                        className="container mt-4 p-4 rounded shadow text-white"
                        style={{
                            background:
                                "linear-gradient(to right, #ffb370, #9b6bff)"
                        }}
                    >
                        <div className="row g-3">

                            <div className="col-md">
                                <label className="form-label">Destination</label>
                                <input className="form-control" placeholder="Where to?" />
                            </div>

                            <div className="col-md">
                                <label className="form-label">Check In</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-md">
                                <label className="form-label">Check Out</label>
                                <input type="date" className="form-control" />
                            </div>

                            <div className="col-md">
                                <label className="form-label">Adults</label>
                                <input type="number" className="form-control" min="1" defaultValue="1" />
                            </div>

                            <div className="col-md">
                                <label className="form-label">Children</label>
                                <input type="number" className="form-control" min="0" defaultValue="0" />
                            </div>

                        </div>
                    </div>

                    <button
                        className="btn btn-lg text-white mt-3"
                        style={{
                            background: "linear-gradient(to right, #ff9f40, #8a4fff)"
                        }}
                    >
                        EXPLORE NOW
                    </button>
                </div>

            </div>
<div className="container my-5">
    <h2 className="fw-bold mb-4">Recommended Hotels</h2>

    <div className="row g-4">
        <div className="col-md-4">
            <div className="card shadow border-0">
                <img src="/hotel1.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Royal Palace Hotel</h5>
                    <p className="text-muted">⭐⭐⭐⭐☆ 4.5</p>
                    <button className="btn btn-outline-primary w-100">See Details</button>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card shadow border-0">
                <img src="/hotel2.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Skyline Grand</h5>
                    <p className="text-muted">⭐⭐⭐⭐⭐ 4.9</p>
                    <button className="btn btn-outline-primary w-100">See Details</button>
                </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card shadow border-0">
                <img src="/hotel3.jpg" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Ocean View Resort</h5>
                    <p className="text-muted">⭐⭐⭐⭐☆ 4.6</p>
                    <button className="btn btn-outline-primary w-100">See Details</button>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Why Choose Us */}
<div className="container my-5 text-center">
    <h2 className="fw-bold mb-4">Why Choose Us?</h2>

    <div className="row g-4">
        <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
                <h5 className="fw-bold">Best Prices</h5>
                <p className="text-muted">We offer competitive hotel rates.</p>
            </div>
        </div>

        <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
                <h5 className="fw-bold">Trusted Reviews</h5>
                <p className="text-muted">Real customer opinions.</p>
            </div>
        </div>

        <div className="col-md-4">
            <div className="p-3 shadow rounded bg-white">
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted">We assist you anytime.</p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
}
