import React from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Role: {user?.role}</p>
      <p>Email: {user?.email || "user@example.com"}</p>
    </div>
  );
};

export default Profile;
