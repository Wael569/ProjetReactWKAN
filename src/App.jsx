// src/App.jsx
import React, { useState } from 'react';
import UserLogin from './ComponentsLogin/UserLogin.jsx';
import UserSignup from './ComponentsLogin/UserSignup.jsx';
import ForgotPassword from './ComponentsLogin/ForgotPassword.jsx'; 
import HomePage from './compos/HomePage.jsx';
import Reservation from './compos/Reservation.jsx';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login'); 
  // login | signup | forgot | home | reservation

  return (
    <div className="App">
      {currentView === 'login' && (
        <UserLogin 
          onSwitchToSignup={() => setCurrentView('signup')}
          onSwitchToForgot={() => setCurrentView('forgot')}
          onLogin={() => setCurrentView('home')}
        />
      )}

      {currentView === 'signup' && (
        <UserSignup 
          onSwitchToLogin={() => setCurrentView('login')} 
        />
      )}

      {currentView === 'forgot' && (
        <ForgotPassword 
          onBackToLogin={() => setCurrentView('login')}
        />
      )}

      {currentView === 'home' && (
        <HomePage onExplore={() => setCurrentView('reservation')} />
      )}

      {currentView === 'reservation' && (
        <Reservation onBackToHome={() => setCurrentView('home')} />
      )}
    </div>
  );
}

export default App;
