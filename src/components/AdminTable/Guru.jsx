import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const Guru = () => {
  const [teachers, setTeachers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/teacher`
        );
        setTeachers(response.data.teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  const handleDelete = async (nip) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/delete/teacher/${nip}`
      );
      setTeachers((prevTeachers) =>
        prevTeachers.filter((teacher) => teacher.nip !== nip)
      );
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };
  
  
  
  

  const handleEdit = (nip) => {
    router.push(`/administrator/AdminForm/EditGuruForm?id=${nip}`);
  };

  const handleAddTeacher = () => {
    router.push(`/administrator/AdminForm`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Daftar Guru</h1>
      </div>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">No. Telepon</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(teachers) && teachers.length > 0 ? (
            teachers.map((teacher) => (
              <tr key={teacher.nip} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{teacher.name}</td>
                <td className="py-2 px-4 text-center">{teacher.email}</td>
                <td className="py-2 px-4 text-center">{teacher.phone_number}</td>
                <td className="py-2 px-4 text-center">{teacher.role}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDelete(teacher.nip)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Hapus
                  </button>
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleEdit(teacher.nip)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))    
          ) : (
            <tr>
              <td colSpan="5" className="py-2 px-4 text-center">
                Tidak Ada Guru
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
