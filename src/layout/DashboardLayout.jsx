import React, { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar toggle

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-800 text-white rounded"
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-gray-800 text-white p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64 z-40`}
      >
        <div>
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-xl font-bold">Hello, {user?.name}!</h2>
            <p className="text-sm text-gray-300 capitalize">Role: {user?.role}</p>
          </div>

          {/* Navigation Menu */}
          <ul>
            <li className="font-semibold mt-2 mb-2">Homework</li>
            {user?.role === "user" && (
              <>
                <li className={`mb-1 ${isActive("/dashboard/homework/completed") ? "text-yellow-300" : ""}`}>
                  <Link to="/dashboard/homework/completed">Completed Homework</Link>
                </li>
                <li className={`mb-1 ${isActive("/dashboard/homework/pending-requested") ? "text-yellow-300" : ""}`}>
                  <Link to="/dashboard/homework/pending-requested">Pending Requested Homework</Link>
                </li>
              </>
            )}
            {user?.role === "admin" && (
              <>
                <li className={`mb-1 ${isActive("/dashboard/homework/pending") ? "text-yellow-300" : ""}`}>
                  <Link to="/dashboard/homework/pending">Pending Homework</Link>
                </li>
                <li className={`mb-1 ${isActive("/dashboard/homework/completed") ? "text-yellow-300" : ""}`}>
                  <Link to="/dashboard/homework/completed">Completed Homework</Link>
                </li>
              </>
            )}

            <li className="font-semibold mt-6 mb-2">Profile</li>
            <li className={`mb-1 ${isActive("/dashboard/profile") ? "text-yellow-300" : ""}`}>
              <Link to="/dashboard/profile">Profile</Link>
            </li>
          </ul>
        </div>

        {/* Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
