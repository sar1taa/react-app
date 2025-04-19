import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  if (user) return <Navigate to="/dashboard" />;
  return children;
};

export default PublicRoute;
