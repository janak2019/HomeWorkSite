import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardLayout from "./layout/DashboardLayout";
import HomeworkList from "./pages/dashboard/HomeworkList";
import Profile from "./pages/dashboard/Profile";


function App() {
  return (
   <Routes>
  {/* Main site routes */}
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="contact" element={<Contact />} />
    <Route path="about" element={<About />} />
  </Route>

  {/* Dashboard routes */}
  <Route path="/dashboard" element={<DashboardLayout />}>
  <Route index element={<DashboardHome />} />
  <Route path="homework" element={<HomeworkList />} />
  <Route path="profile" element={<Profile />} />
</Route>
</Routes>
  );
}

export default App;
