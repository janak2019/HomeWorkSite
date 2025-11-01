import React from "react";
import { Navigate } from "react-router-dom";

// role = "user" or "admin"
// If no role is passed, it just checks if user is logged in
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    // Logged in but role mismatch
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
