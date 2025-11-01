import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BookOpen, CheckCircle, User, LogOut } from "lucide-react";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-6 text-center border-b border-blue-500">
          <h1 className="text-2xl font-bold">HomeworkHub</h1>
        </div>
        <nav className="flex-1 p-6 space-y-4">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 hover:bg-blue-500 px-3 py-2 rounded"
          >
            <BookOpen className="w-5 h-5" /> Dashboard
          </Link>
          <Link
            to="/dashboard/homework"
            className="flex items-center gap-2 hover:bg-blue-500 px-3 py-2 rounded"
          >
            <CheckCircle className="w-5 h-5" /> Homework
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center gap-2 hover:bg-blue-500 px-3 py-2 rounded"
          >
            <User className="w-5 h-5" /> Profile
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="flex items-center gap-2 hover:bg-red-500 px-3 py-2 rounded w-full"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
