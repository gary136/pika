import React, { useState, useEffect } from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [waitlists, setWaitlists] = useState([]);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    lifestyle: "",
    budget: "",
  });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching data for the dashboard
    fetchWaitlists();
    fetchProfile();
    fetchNotifications();
  }, []);

  const fetchWaitlists = () => {
    // Mock API response
    setWaitlists([
      { id: 1, room: "Studio Apartment - Downtown", status: "Matched" },
      { id: 2, room: "2BR Apartment - Uptown", status: "Waiting" },
    ]);
  };

  const fetchProfile = () => {
    // Mock API response
    setProfile({
      name: "John Doe",
      email: "johndoe@example.com",
      lifestyle: "Quiet, Non-smoker",
      budget: "$1200/month",
    });
  };

  const fetchNotifications = () => {
    // Mock API response
    setNotifications([
      { id: 1, message: "You've been matched for the Downtown Studio!", date: "2024-12-22" },
      { id: 2, message: "Landlord updated the visit schedule for Uptown 2BR.", date: "2024-12-18" },
    ]);
  };

  const handleProfileUpdate = () => {
    // Simulate profile update
    alert("Profile updated successfully!");
  };

  return (
    <div className="user-dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {profile.name}!</h1>
      </header>

      <section className="dashboard-section">
        <h2>Joined Waitlists</h2>
        <ul className="waitlist-list">
          {waitlists.map((item) => (
            <li key={item.id} className="waitlist-item">
              <span>{item.room}</span>
              <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="dashboard-section">
        <h2>Edit Profile / Preferences</h2>
        <div className="profile-form">
          <label>
            Name:
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </label>
          <label>
            Lifestyle:
            <input
              type="text"
              value={profile.lifestyle}
              onChange={(e) => setProfile({ ...profile, lifestyle: e.target.value })}
            />
          </label>
          <label>
            Budget:
            <input
              type="text"
              value={profile.budget}
              onChange={(e) => setProfile({ ...profile, budget: e.target.value })}
            />
          </label>
          <button onClick={handleProfileUpdate} className="update-button">Update Profile</button>
        </div>
      </section>

      <section className="dashboard-section">
        <h2>Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              <span>{notification.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;
