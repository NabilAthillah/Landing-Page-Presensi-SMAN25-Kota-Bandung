import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Guru = () => {
  const [teachers, setTeachers] = useState([]);
  const router = useRouter()

  const handleClick = () => {
    router.push('../AdminForm/GuruForm')
  }

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/teacher`
        );
        setTeachers(response.data.teachers);
      } catch (error) {
        console.error("Error fetching parents:", error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Guru</h1>  
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Teacher</button>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">No. Telepon</th>
            <th className="py-2 px-4">Role</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.email} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{teacher.name}</td>
                <td className="py-2 px-4 text-center">{teacher.email}</td>
                <td className="py-2 px-4 text-center">{teacher.phone_number}</td>
                <td className="py-2 px-4 text-center">{teacher.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center">
                No teachers available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
