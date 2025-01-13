import { useState } from "react";
import axios from "axios";

const ClassForm = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [classroomTeacher, setClassroomTeacher] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/store/class`,
        {
          name,
          classroom_teacher: classroomTeacher,
        }
      );
      console.log("Class created successfully:", response.data);
      if (onSuccess) onSuccess(); // Callback to refresh data or reset form
      setName("");
      setClassroomTeacher("");
    } catch (err) {
      console.error("Error creating class:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <h2 className="text-lg font-semibold mb-4">Add New Class</h2>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Class Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 p-2 w-full border rounded shadow-sm"
          placeholder="Enter class name"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="classroomTeacher"
          className="block text-sm font-medium text-gray-700"
        >
          Classroom Teacher
        </label>
        <input
          id="classroomTeacher"
          type="text"
          value={classroomTeacher}
          onChange={(e) => setClassroomTeacher(e.target.value)}
          className="mt-1 p-2 w-full border rounded shadow-sm"
          placeholder="Enter teacher NIP"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default ClassForm;
