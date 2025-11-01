import axios from "axios";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate(); // 👈 useNavigate hook

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "https://homeworksiteserver.onrender.com/api/auth/login",
        { email, password } // request body
      );

      // Save token to localStorage
      localStorage.setItem("token", data.token);

      // Redirect to dashboard
     navigate("/dashboard");
    } catch (err) {
      // Axios error handling
      if (err.response && err.response.data) {
        alert(err.response.data.message); // Show backend error
      } else {
        console.error(err);
        alert("Login failed. Try again.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
