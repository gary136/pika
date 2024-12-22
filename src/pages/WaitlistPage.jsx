import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WaitlistPage.css';

const WaitlistPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state;

  const [waitlist, setWaitlist] = useState([]);
  const [userDetails, setUserDetails] = useState({ name: '', age: '', lifestyle: '', budget: '' });

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleJoinWaitlist = () => {
    if (!userDetails.name || !userDetails.age || !userDetails.lifestyle || !userDetails.budget) {
      alert('Please fill in all fields');
      return;
    }
    setWaitlist([...waitlist, userDetails]);
    setUserDetails({ name: '', age: '', lifestyle: '', budget: '' });
  };

  return (
    <div className="waitlist-page">
      <button className="back-button" onClick={() => navigate('/')}>Back to Listings</button>
      <h2>Waitlist for {room.location}</h2>
      <p><strong>Room Details:</strong> {room.description}</p>
      <ul className="waitlist">
        {waitlist.map((person, index) => (
          <li key={index}>
            {person.name}, {person.age} years old, {person.lifestyle}, Budget: ${person.budget}
          </li>
        ))}
      </ul>
      <div className="join-form">
        <h3>Join the Waitlist</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleUserDetailsChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={userDetails.age}
          onChange={handleUserDetailsChange}
        />
        <input
          type="text"
          name="lifestyle"
          placeholder="Lifestyle"
          value={userDetails.lifestyle}
          onChange={handleUserDetailsChange}
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={userDetails.budget}
          onChange={handleUserDetailsChange}
        />
        <button onClick={handleJoinWaitlist}>Join Waitlist</button>
      </div>
    </div>
  );
};

export default WaitlistPage;
