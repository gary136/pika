import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">RoommateFinder</Link>
        <div className="nav-links">
          <Link to="/listings">Find Rooms</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/signup">Sign Up/Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;