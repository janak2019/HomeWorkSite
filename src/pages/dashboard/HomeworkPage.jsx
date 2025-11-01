import React from "react";
import { useParams, Navigate } from "react-router-dom";

const HomeworkPage = () => {
  const { type } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));

  // Role-based access control
  const allowedTypesForUser = ["completed", "pending-requested"];
  const allowedTypesForAdmin = ["completed", "pending"];

  if (
    (user.role === "user" && !allowedTypesForUser.includes(type)) ||
    (user.role === "admin" && !allowedTypesForAdmin.includes(type))
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  let title = "";
  let content = "";

  if (user?.role === "user") {
    if (type === "completed") {
      title = "Completed Homework";
      content = "Here is the list of homework you have completed.";
    } else if (type === "pending-requested") {
      title = "Pending Requested Homework";
      content = "Here is the list of homework you requested but haven’t completed yet.";
    }
  }

  if (user?.role === "admin") {
    if (type === "completed") {
      title = "Completed Homework";
      content = "List of homework completed by all users.";
    } else if (type === "pending") {
      title = "Pending Homework";
      content = "List of homework that is pending and needs review or completion.";
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default HomeworkPage;
