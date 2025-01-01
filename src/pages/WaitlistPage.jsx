import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WaitlistPage.css';

const WaitlistPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { room } = location.state || {}; // Handle case where room may not be passed

  const [waitlist, setWaitlist] = useState([]);
  const [userDetails, setUserDetails] = useState({ name: '', age: '', lifestyle: '', budget: '' });
  const [customWaitlist, setCustomWaitlist] = useState({ area: '', priceRange: '', lifestyle: '' });

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleCustomWaitlistChange = (e) => {
    const { name, value } = e.target;
    setCustomWaitlist({ ...customWaitlist, [name]: value });
  };
  
  const handleJoinWaitlist = () => {
    if (!userDetails.name || !userDetails.age || !userDetails.lifestyle || !userDetails.budget) {
      alert('Please fill in all fields');
      return;
    }
    setWaitlist([...waitlist, userDetails]);
    setUserDetails({ name: '', age: '', lifestyle: '', budget: '' });
  };

  const handleCreateCustomWaitlist = () => {
    if (!customWaitlist.area || !customWaitlist.priceRange || !customWaitlist.lifestyle) {
      alert('Please fill in all fields for the custom waitlist');
      return;
    }
    alert('Custom Waitlist Created Successfully!');
    navigate('/waitlists'); // Navigate to the user waitlists page
  };
  
  return (
    <div className="waitlist-page">
      <button className="back-button" onClick={() => navigate('/listings')}>Back to Listings</button>
      
      {room ? (
        <>
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
        </>
      ) : (
        <>
          <h2>Create a Custom Waitlist</h2>
          <div className="custom-waitlist-form">
            <div className="form-group">
              <label>Area:</label>
              <input
                type="text"
                name="area"
                placeholder="Enter desired area"
                value={customWaitlist.area}
                onChange={handleCustomWaitlistChange}
              />
            </div>
            <div className="form-group">
              <label>Price Range:</label>
              <input
                type="text"
                name="priceRange"
                placeholder="Enter price range (e.g., 1000-1500)"
                value={customWaitlist.priceRange}
                onChange={handleCustomWaitlistChange}
              />
            </div>
            <div className="form-group">
              <label>Lifestyle Preferences:</label>
              <input
                type="text"
                name="lifestyle"
                placeholder="Enter lifestyle preferences"
                value={customWaitlist.lifestyle}
                onChange={handleCustomWaitlistChange}
              />
            </div>
            <button onClick={handleCreateCustomWaitlist}>Create Custom Waitlist</button>
          </div>
        </>
      )}
    </div>
  );
};

export default WaitlistPage;
