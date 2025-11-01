import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const navigate = useNavigate(); // For redirect after registration

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://homeworksiteserver.onrender.com/api/auth/register",
        form
      );

      alert(res.data.message); // Success message from backend

      // Redirect to login page after registration
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data.message); // Show backend validation error
      } else {
        alert("Registration failed. Try again.");
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="border p-2 rounded"
          onChange={handleChange}
          value={form.fullName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={handleChange}
          value={form.password}
          required
        />
        <button className="bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
