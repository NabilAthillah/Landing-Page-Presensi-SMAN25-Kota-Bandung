"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const MatpelForm = () => {
  const [name, setName] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [teacher, setTeacher] = useState("");
  const [className, setClassName] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false); // state for toggling the form visibility
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/store/subject`,
        { name, day, time, duration, teacher, class: className },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Mata Pelajaran berhasil ditambahkan!");
        router.push("/administrator");
      }
    } catch (error) {
      console.error("Error adding subject:", error);
      alert("Gagal menambahkan mata pelajaran.");
    }
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {isFormVisible ? "Tutup Form" : "Tambah Mata Pelajaran"}
      </button>

      {/* Toggleable form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Tambah Mata Pelajaran</h2>

          <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
            Nama Mata Pelajaran
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="grow"
              required
              placeholder="Nama Mata Pelajaran"
            />
          </label>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Hari
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="grow"
                required
                placeholder="Senin, Selasa, dst"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Waktu
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="grow"
                required
                placeholder="08:00 - 10:00"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Durasi
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="grow"
                required
                placeholder="1 Jam"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Guru
              <input
                type="text"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="grow"
                required
                placeholder="Nama Guru"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Kelas
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                className="grow"
                required
                placeholder="Kelas A, Kelas B, dst"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Tambah Mata Pelajaran
          </button>
        </form>
      )}
    </div>
  );
};

export default MatpelForm;
