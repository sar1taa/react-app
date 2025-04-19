import React from "react";
import { useAuth } from "../auth/AuthProvider";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page" style={{ textAlign: "center" }}>
      <h1>Welcome, {user?.email}!</h1>
      <p>This is the user dashboard.</p>
    </div>
  );
};

export default Dashboard;
