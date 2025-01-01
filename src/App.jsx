import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import LandingPage from './pages/LandingPage'
import RoomListings from './pages/RoomListings';
import WaitlistPage from './pages/WaitlistPage';
import RoomDetails from './pages/RoomDetails';
import UserDashboard from './pages/UserDashboard';
import UserWaitlistsPage from './pages/UserWaitlistsPage';
// import LandlordDashboard from './pages/LandlordDashboard';
import SignupLoginPage from './pages/SignupLoginPage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/listings" element={<RoomListings />} />
            <Route path="/waitlist/:roomId" element={<WaitlistPage />} />
            <Route path="/waitlists" element={<UserWaitlistsPage />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            {/* <Route path="/landlord" element={<LandlordDashboard />} /> */}
            <Route path="/auth" element={<SignupLoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="*" element={
              <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default App