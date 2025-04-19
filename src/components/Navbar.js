import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin-dashboard">Admin Panel</Link>
      </div>
      <div className="nav-right">
        <button onClick={() => {
          logout();
          navigate("/login");
        }}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
