import React, { useState, useEffect } from "react";
import axios from "axios";

export const Matpel = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/subjects`
        );
        setSubjects(response.data.subjects);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data mata pelajaran:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <div>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">Nama Mata Pelajaran</th>
            <th className="py-2 px-4">Hari</th>
            <th className="py-2 px-4">Waktu</th>
            <th className="py-2 px-4">Durasi</th>
            <th className="py-2 px-4">Guru</th>
            <th className="py-2 px-4">Kelas</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(subjects) && subjects.length > 0 ? (
            subjects.map((subject) => (
              <tr key={subject.uuid_subject} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{subject.name}</td>
                <td className="py-2 px-4 text-center">{subject.day}</td>
                <td className="py-2 px-4 text-center">{subject.time}</td>
                <td className="py-2 px-4 text-center">{subject.duration}</td>
                <td className="py-2 px-4 text-center">{subject.teacher_employees.map((teacher) => teacher.name).join(", ")}</td>
                <td className="py-2 px-4 text-center">{subject.class}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-2 px-4 text-center">
                Tidak Ada Mata Pelajaran
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
