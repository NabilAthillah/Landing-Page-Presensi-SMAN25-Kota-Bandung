"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Student = () => {
  const [students, setStudents] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/student`
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Daftar Siswa</h1>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">NISN</th>
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Alamat</th>
            <th className="py-2 px-4">No. Telepon</th>
            <th className="py-2 px-4">Orang Tua</th>
            <th className="py-2 px-4">Kelas</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.nisn} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{student.nisn}</td>
                <td className="py-2 px-4 text-center">{student.name}</td>
                <td className="py-2 px-4 text-center">{student.email}</td>
                <td className="py-2 px-4 text-center">{student.address}</td>
                <td className="py-2 px-4 text-center">{student.phone_number}</td>
                <td className="py-2 px-4 text-center">
                  {student.parents?.name || "N/A"}
                </td>
                <td className="py-2 px-4 text-center">
                  {student.class?.name || "N/A"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-2 px-4 text-center">
                Tidak Ada Data Siswa
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
