import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


const GuruForm = () => {
    const [teachers, setTeachers] = useState([]);
    const [formData, setFormData] = useState({
      id: "",
      name: "",
      email: "",
      phone_number: "",
      role: "",
    });
    const [isEdit, setIsEdit] = useState(false); 

  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isEdit) {
        try {
          await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/edit/teacher/${formData.id}`, formData);
          alert("Teacher updated successfully!");
        } catch (error) {
          console.error("Error updating teacher:", error);
        }
      } else {
        try {
          await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/store/teacher`, formData);
          alert("Teacher added successfully!");
        } catch (error) {
          console.error("Error adding teacher:", error);
        }
      }
      setFormData({ id: "", name: "", email: "", phone_number: "", role: "" });
      setIsEdit(false);
    };
  
    const handleDelete = async (nip) => {
      try {
        await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/data/delete/teacher/${nip}`);
        setTeachers(teachers.filter((teacher) => teacher.nip !== nip));
      } catch (error) {
        console.error("Error deleting teacher:", error);
      }
    };
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{isEdit ? "Edit Teacher" : "Add Teacher"}</h1>
  
        {/* Form for adding or editing a teacher */}
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
            className="px-4 py-2 mb-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
            className="px-4 py-2 mb-2"
          />
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="px-4 py-2 mb-2"
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="Role"
            className="px-4 py-2 mb-2"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white"
          >
            {isEdit ? "Update Teacher" : "Add Teacher"}
          </button>
        </form>
    </div>
  )
}

export default GuruForm