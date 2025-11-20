// src/App.jsx
import React, { useState } from 'react';
import UserLogin from './ComponentsLogin/UserLogin.jsx';
import UserSignup from './ComponentsLogin/UserSignup.jsx';
import ForgotPassword from './ComponentsLogin/ForgotPassword.jsx'; 
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('login'); 
  // login | signup | forgot

  return (
    <div className="App">
      {currentView === 'login' && (
        <UserLogin 
          onSwitchToSignup={() => setCurrentView('signup')}
          onSwitchToForgot={() => setCurrentView('forgot')}
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
    </div>
  );
}

export default App;
