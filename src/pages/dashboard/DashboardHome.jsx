import React from "react";

const DashboardHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>
      {user?.role === "user" ? (
        <p>Welcome {user.name}! Check your homework below.</p>
      ) : (
        <p>Welcome Admin {user.name}! Manage homework and users here.</p>
      )}
    </div>
  );
};

export default DashboardHome;
