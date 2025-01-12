"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Student = () => {
  const [students, setStudents] = useState([]);
  const [parentsList, setParentsList] = useState([]);
  const [classesList, setClassesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nisn: "",
    name: "",
    email: "",
    address: "",
    phone_number: "",
    parents: "",
    class: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch data on mount
  useEffect(() => {
    fetchStudents();
    fetchParents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/student`
      );
      setStudents(response.data.students);
    } catch (error) {
      alert("Gagal memuat data siswa. Silakan coba lagi.");
      console.error("Error fetching students:", error);
    }
  };

  const fetchParents = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/parents`
      );
      setParentsList(response.data.parents);
    } catch (error) {
      console.error("Error fetching parents:", error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/classes`
      );
      setClassesList(response.data.classes);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      nisn: "",
      name: "",
      email: "",
      address: "",
      phone_number: "",
      parents: "",
      class: "",
    });
    setIsEditing(false);
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isEditing) {
        await axios.put(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/put/student/${formData.nisn}`,
          formData
        );
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/set/student`,
          formData
        );
      }
      fetchStudents();
      resetForm();
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data.");
      console.error("Error saving student:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (nisn) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/delete/student/${nisn}`
      );
      fetchStudents();
    } catch (error) {
      alert("Terjadi kesalahan saat menghapus data.");
      console.error("Error deleting student:", error);
    }
  };

  const handleEdit = (student) => {
    setFormData({
      ...student,
      parents: student.parents?.id || "",
      class: student.class?.id || "",
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Daftar Siswa</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => {
            setIsModalOpen(true);
            setIsEditing(false);
          }}
        >
          Tambah Siswa
        </button>
      </div>

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
            <th className="py-2 px-4">Aksi</th>
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
                <td className="py-2 px-4 text-center">
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(student.nisn)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-2 px-4 text-center">
                Tidak Ada Data Siswa
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-1/2">
            <h2 className="text-lg font-semibold mb-4">
              {isEditing ? "Edit Siswa" : "Tambah Siswa"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">NISN</label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.nisn}
                  onChange={(e) =>
                    setFormData({ ...formData, nisn: e.target.value })
                  }
                  disabled={isEditing}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Nama</label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Alamat</label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">No. Telepon</label>
                <input
                  type="text"
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone_number: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Orang Tua</label>
                <select
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.parents}
                  onChange={(e) =>
                    setFormData({ ...formData, parents: e.target.value })
                  }
                >
                  <option value="">Pilih Orang Tua</option>
                  {parentsList.map((parent) => (
                    <option key={parent.id} value={parent.id}>
                      {parent.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Kelas</label>
                <select
                  className="border rounded w-full px-3 py-2 bg-white"
                  value={formData.class}
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                >
                  <option value="">Pilih Kelas</option>
                  {classesList.map((classItem) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isEditing ? "Update" : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Student;