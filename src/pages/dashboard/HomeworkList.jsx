import React, { useEffect, useState } from "react";
import axios from "axios";

const HomeworkList = () => {
  const [homework, setHomework] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomework = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/user/homework", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHomework(res.data.homework || []); // expect backend returns { homework: [...] }
      } catch (err) {
        console.error(err);
        alert("Failed to fetch homework");
      } finally {
        setLoading(false);
      }
    };

    fetchHomework();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Homework List</h1>

      {homework.length === 0 ? (
        <p className="text-gray-700">No homework assignments yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homework.map((hw) => (
            <div key={hw._id} className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-2">{hw.title}</h3>
              <p className="text-gray-600 mb-1">
                <strong>Subject:</strong> {hw.subject}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Due Date:</strong> {new Date(hw.dueDate).toLocaleDateString()}
              </p>
              <p className={`mt-2 font-semibold ${hw.completed ? "text-green-600" : "text-red-600"}`}>
                {hw.completed ? "Completed" : "Pending"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeworkList;
