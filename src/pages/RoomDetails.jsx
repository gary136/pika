import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RoomDetails.css';

const RoomDetails = ({ room: propRoom }) => {
  const { id } = useParams(); // Get room ID from URL
  const navigate = useNavigate();
  const [room, setRoom] = useState(propRoom || null);

  useEffect(() => {
    if (!propRoom && id) {
      // Simulated API call to fetch room details
      const fetchRoomDetails = async () => {
        const roomData = {
          1: {
            id: 1, // Ensure `id` is included here
            title: 'Cozy 2-bedroom apartment',
            location: 'New York',
            price: '$1200/month',
            size: '2-bedroom',
            availabilityDate: 'Available Now',
            amenities: ['Wi-Fi', 'Parking', 'Air Conditioning'],
            lifestyleCompatibility: 'Non-smoker',
            petPolicy: 'No pets allowed',
            houseRules: 'No loud music after 10 PM',
            media: {
              photos: ['/images/room1.jpg', '/images/room2.jpg'],
              video: '/videos/room-tour.mp4',
            },
            roommates: 'Currently 1 roommate, prefers quiet individuals.',
            landlord: {
              name: 'John Doe',
              contact: 'johndoe@example.com',
              ratings: '4.8/5',
              reviews: 'Very responsive and helpful!',
            },
            waitlistCount: 3,
            mapLocation: 'New York',
          },
        };
        console.log("Fetched room data:", roomData[id]); // Debug room data
        setRoom(roomData[id] || null);
      };

      fetchRoomDetails();
    }
  }, [propRoom, id]);

  const handleJoinWaitlist = (room) => {
    console.log("Room object in handleJoinWaitlist:", room);
    if (room && room.id) {
        navigate(`/waitlist/${room.id}`, { state: { room } });
    } else {
        console.error("Room ID is undefined");
    }
  };

  if (!room) {
    return (
      <div className="room-details-error">
        <p>No room details available. Please return to the listings page.</p>
        <button onClick={() => navigate(-1)} className="btn-back">
          Back to Listings
        </button>
      </div>
    );
  }

  const {
    title,
    location,
    price,
    size,
    availabilityDate,
    amenities,
    lifestyleCompatibility,
    petPolicy,
    houseRules,
    media,
    roommates,
    landlord,
    waitlistCount,
    mapLocation,
  } = room;

  return (
    <div className="room-details">
      <div className="details-header">
        <h1>{title}</h1>
        <p><strong>Location:</strong> {location}</p>
      </div>

      <div className="details-info">
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Size/Type:</strong> {size}</p>
        <p><strong>Availability:</strong> {availabilityDate}</p>
      </div>

      <div className="details-section">
        <h2>Features</h2>
        <p><strong>Amenities:</strong> {amenities.join(', ')}</p>
        <p><strong>Lifestyle Compatibility:</strong> {lifestyleCompatibility}</p>
        <p><strong>Pet Policy:</strong> {petPolicy}</p>
        <p><strong>House Rules:</strong> {houseRules}</p>
      </div>

      <div className="details-media">
        <h2>Media</h2>
        <div className="gallery">
          {media.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Room view ${index + 1}`} />
          ))}
        </div>
        {media.video && (
          <div className="video-tour">
            <h3>Video Tour</h3>
            <video controls>
              <source src={media.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      <div className="details-roommates">
        <h2>Roommates</h2>
        <p>{roommates}</p>
      </div>

      <div className="details-landlord">
        <h2>Landlord Details</h2>
        <p><strong>Name:</strong> {landlord.name}</p>
        <p><strong>Contact:</strong> {landlord.contact}</p>
        <p><strong>Ratings:</strong> {landlord.ratings}</p>
        <p><strong>Reviews:</strong> {landlord.reviews}</p>
      </div>

      <div className="details-waitlist">
        <h2>Waitlist</h2>
        <p>Current waitlist count: {waitlistCount}</p>
        <button
          onClick={() => handleJoinWaitlist(room)}
          className="btn-join-waitlist"
        >
          Join Waitlist
        </button>
      </div>

      <div className="details-map">
        <h2>Interactive Map</h2>
        <div className="map-placeholder">
          <p>Map showing location: {mapLocation}</p>
          {/* Insert mapping API here */}
        </div>
      </div>

      <div className="details-actions">
        <button onClick={() => navigate(-1)} className="btn-back">
          Back to Listings
        </button>
        <button onClick={() => alert('Contacting landlord...')} className="btn-contact">
          Contact Landlord
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
