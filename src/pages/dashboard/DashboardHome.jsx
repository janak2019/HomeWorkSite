import React from "react";
import DashboardFooter from "../../components/DashboardFooter";

const DashboardHome = () => {
  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard Home</h1>
        <p className="text-gray-700">Overview of your homework activities.</p>
      </div>

      {/* Dashboard cards or content */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example cards */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-lg">Pending Homework</h3>
          <p className="text-blue-600 text-2xl mt-2">5</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-lg">Solved Homework</h3>
          <p className="text-green-600 text-2xl mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-lg">Add Homework</h3>
          <p className="text-yellow-600 text-2xl mt-2">+</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-bold text-lg">Ask for Help</h3>
          <p className="text-purple-600 text-2xl mt-2">?</p>
        </div>
      </div>

      <div className="mt-auto">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DashboardHome;
