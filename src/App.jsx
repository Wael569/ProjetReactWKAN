// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./compos/HomePage.jsx";
import OffersPage from "./compos/OffersPage.jsx";
import NewsPage from "./compos/NewsPage.jsx";
import ContactPage from "./compos/ContactPage.jsx";
import OfferDetails from "./compos/OfferDetails.jsx";

import UserLogin from "./ComponentsLogin/UserLogin.jsx";
import UserSignup from "./ComponentsLogin/UserSignup.jsx";
import ForgotPassword from "./ComponentsLogin/ForgotPassword.jsx";

import Reservation from "./compos/Reservation.jsx";
import HotelDetails from "./compos/HotelDetails.jsx";
import CityHotels from "./pages/CityHotels.jsx";
import Confirmation from "./compos/Confirmation.jsx";


import "./App.css";

export default function App() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <HomePage
              userName={userName}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          }
        />

       
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/offers/:offerSlug" element={<OfferDetails />} />

 
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/login"
          element={<UserLogin onLogin={handleLoginSuccess} />}
        />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/forgot" element={<ForgotPassword />} />

       
        <Route path="/hotels/:citySlug" element={<CityHotels />} />

     
        <Route path="/hotels/:citySlug/:hotelId" element={<HotelDetails />} />

        <Route path="/reservation" element={<Reservation />} />

     
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </div>
  );
}
