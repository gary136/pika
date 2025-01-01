import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our App</h1>
        <p>Connecting renters and landlords effortlessly to save time, money, and stress.</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide a platform where renters can find compatible roommates and landlords can fill vacancies
          faster. We aim to foster meaningful connections and streamline the rental process for everyone.
        </p>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>For Renters</h3>
          <ul>
            <li>
              <strong>How does the waitlist work?</strong>
              <p>Simply add your name and details to a room's waitlist. When the list matches the room capacity, you'll be notified to connect with others and the landlord.</p>
            </li>
            <li>
              <strong>Can I set preferences for roommates?</strong>
              <p>Yes! Use filters to specify your preferences and find the best match.</p>
            </li>
          </ul>
        </div>
        <div className="faq">
          <h3>For Landlords</h3>
          <ul>
            <li>
              <strong>How do I list a room or property?</strong>
              <p>Sign up as a landlord and add property details through our easy-to-use interface.</p>
            </li>
            <li>
              <strong>How do I connect with renters?</strong>
              <p>Once a waitlist is full, renters will reach out to schedule viewings and next steps.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
