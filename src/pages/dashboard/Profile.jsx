import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!user)
    return <div className="text-center mt-20 text-red-500">You are not logged in.</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Profile</h1>
      <p className="text-gray-700 mb-2"><strong>Full Name:</strong> {user.fullName}</p>
      <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700 mb-2"><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
