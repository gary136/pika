import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserWaitlistsPage.css';

const UserWaitlistsPage = () => {
  const navigate = useNavigate();
  const [waitlists, setWaitlists] = useState([
    { id: 1, area: 'Downtown', priceRange: '1000-1500', lifestyle: 'Non-smoker' },
    { id: 2, area: 'Suburb', priceRange: '500-900', lifestyle: 'Pet-friendly' },
  ]);

  return (
    <div className="user-waitlists-page">
      <h2>Your Waitlists</h2>
      <button className="create-waitlist-button" onClick={() => navigate('/waitlist/create')}>
        Create New Waitlist
      </button>
      <ul className="waitlist-list">
        {waitlists.map((waitlist) => (
          <li key={waitlist.id}>
            <h3>{waitlist.area}</h3>
            <p><strong>Price Range:</strong> {waitlist.priceRange}</p>
            <p><strong>Lifestyle:</strong> {waitlist.lifestyle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserWaitlistsPage;
