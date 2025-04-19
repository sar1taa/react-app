import React from "react";
import { useAuth } from "../auth/AuthProvider";
import "../styles/Profile.css";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-card">
      <div className="profile-content">
      <h2>User Profile</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>

      </div>
    </div>
  );
};

export default Profile;
