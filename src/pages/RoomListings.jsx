import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoomListings.css';

const RoomListings = () => {
  const navigate = useNavigate();

  // Sample data for room listings
  const rooms = [
    { id: 1, location: 'New York', budget: 1200, lifestyle: 'Non-smoker', description: 'Cozy 2-bedroom apartment in the heart of NYC.' },
    { id: 2, location: 'San Francisco', budget: 1500, lifestyle: 'Pet-friendly', description: 'Spacious room in a modern house with great amenities.' },
    { id: 3, location: 'Austin', budget: 900, lifestyle: 'Quiet environment', description: 'Affordable room in a peaceful neighborhood.' },
  ];

  // States for filters
  const [filters, setFilters] = useState({
    location: '',
    budget: '',
    lifestyle: '',
  });

  const [filteredRooms, setFilteredRooms] = useState(rooms);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters to room listings
  const applyFilters = () => {
    setFilteredRooms(
      rooms.filter((room) => {
        const matchesLocation = filters.location ? room.location.includes(filters.location) : true;
        const matchesBudget = filters.budget ? room.budget <= parseInt(filters.budget) : true;
        const matchesLifestyle = filters.lifestyle ? room.lifestyle.includes(filters.lifestyle) : true;
        return matchesLocation && matchesBudget && matchesLifestyle;
      })
    );
  };

  const handleJoinWaitlist = (room) => {
    navigate(`/waitlist/${room.id}`, { state: { room } });
  };

  const handleSeeDetails = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div className="room-listings">
      <div className="filters">
        <h2>Filters</h2>
        <div className="filter-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="budget">Max Budget:</label>
          <input
            type="number"
            id="budget"
            name="budget"
            placeholder="Enter budget"
            value={filters.budget}
            onChange={handleFilterChange}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="lifestyle">Lifestyle:</label>
          <select
            id="lifestyle"
            name="lifestyle"
            value={filters.lifestyle}
            onChange={handleFilterChange}
          >
            <option value="">Any</option>
            <option value="Non-smoker">Non-smoker</option>
            <option value="Pet-friendly">Pet-friendly</option>
            <option value="Quiet environment">Quiet environment</option>
          </select>
        </div>
        <button className="apply-filters" onClick={applyFilters}>
          Apply Filters
        </button>
      </div>

      <div className="room-listings-grid">
        {filteredRooms.map((room) => (
          <div key={room.id} className="room-card">
            <h3>{room.location}</h3>
            <p><strong>Budget:</strong> ${room.budget}/month</p>
            <p><strong>Lifestyle:</strong> {room.lifestyle}</p>
            <p>{room.description}</p>
            <div className="room-card-buttons">
              <button className="see-details" onClick={() => handleSeeDetails(room.id)}>
                See Details
              </button>
              <button className="join-waitlist" onClick={() => handleJoinWaitlist(room)}>
                Join Waitlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomListings;
