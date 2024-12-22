import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms & Privacy</Link>
        </div>
        <p>&copy; 2024 Roommate Finder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;