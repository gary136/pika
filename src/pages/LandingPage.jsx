// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <section className="hero">
        <h1>Find Your Perfect Roommates</h1>
        <p>Save on rent by connecting with compatible roommates and landlords quickly and easily.</p>
        <Link to="/auth" className="cta-button">Get Started</Link>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Join Waitlists</h3>
            <p>Join waitlists for rooms that match your preferences.</p>
          </div>
          <div className="feature-card">
            <h3>Filter Matches</h3>
            <p>Apply filters to find compatible roommates.</p>
          </div>
          <div className="feature-card">
            <h3>Direct Connect</h3>
            <p>Connect with landlords and other renters directly.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search & Join</h3>
            <p>Search for rooms and join a waitlist.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Match & Filter</h3>
            <p>Use filters to match with compatible roommates.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect & Contact</h3>
            <p>Connect with your group and contact landlords.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <blockquote>
            <p>"This app made finding a roommate so much easier! Highly recommend."</p>
            <cite>- Alex T.</cite>
          </blockquote>
          <blockquote>
            <p>"I found the perfect apartment and roommates within a week!"</p>
            <cite>- Jamie L.</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;