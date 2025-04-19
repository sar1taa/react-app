import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, role);
    navigate("/dashboard");
  };

  return (
    <div className="auth-form">
      <div className="form-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Login</button>
          <p onClick={() => navigate("/signup")}>Don't have an account? <span style={{color:"red", fontWeight:700}}>Sign up</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
