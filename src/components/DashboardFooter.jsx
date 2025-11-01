import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 text-center mt-auto">
      &copy; {new Date().getFullYear()} HomeworkHub Dashboard. All rights reserved.
    </footer>
  );
};

export default DashboardFooter;
