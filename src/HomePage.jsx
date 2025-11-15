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

                    <nav className="d-none d-md-flex gap-4 text-white-50 small">
                        <a className=" fw-semibold fs-5 text-white text-decoration-none">Home</a>
                        <a className=" fw-semibold fs-5 text-white text-decoration-none">Offers</a>
                        <a className=" fw-semibold fs-5 text-white text-decoration-none">News</a>
                        <a className=" fw-semibold fs-5 text-white text-decoration-none">Contact</a>
                    </nav>
                </div>

                <div className="position-relative text-center top-50 translate-middle-y text-white">
                    <h1 className="fw-bold display-4">DISCOVER</h1>
                    <p className="fw-bold display-4">the world</p>
                    <button className="btn btn-lg text-white"
                        style={{
                            background:
                                "linear-gradient(to right, #ff9f40, #8a4fff)"
                        }}
                    >
                        EXPLORE NOW
                    </button>
                </div>
            </div>

            <div className="container position-relative" style={{ marginTop: "-40px" }}>
                <div className="bg-white shadow rounded-pill d-flex overflow-hidden text-center">
                    <button className="btn px-4 py-2 text-white fw-semibold"
                        style={{
                            background:
                                "linear-gradient(to right, #ff9f40, #ff7a40)"
                        }}
                    >
                        Hotels
                    </button>
                    <button className="btn px-4 py-2">Car Rentals</button>
                    <button className="btn px-4 py-2">Flights</button>
                    <button className="btn px-4 py-2">Trips</button>
                    <button className="btn px-4 py-2">Cruises</button>
                    <button className="btn px-4 py-2">Activities</button>
                </div>
            </div>


            <div className="container mt-4 p-4 rounded shadow text-white"
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
                        <input
                            type="number"
                            className="form-control"
                            min="1"
                            defaultValue="1"
                        />
                    </div>

                    <div className="col-md">
                        <label className="form-label">Children</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            defaultValue="0"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
}
