import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login } = useAuth();
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    login(email, "user");
    navigate("/dashboard");
  };

  return (
    <div className="auth-form">
      <div className="form-content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} required />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Sign Up</button>
          <p onClick={() => navigate("/login")}>Already have an account? <span style={{ color: "red", fontWeight: 700 }}>Login</span></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
