"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const EditGuruForm = () => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const token = localStorage.getItem("presensi_sman25_kota_bandung_auth_token");
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/teacher/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { nip, name, email, phone_number } = response.data.teacher;
        setNip(nip);
        setName(name);
        setEmail(email);
        setPhoneNumber(phone_number);
        setAddress(address);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };
    if (nip) fetchTeacher();
  }, [nip]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("presensi_sman25_kota_bandung_auth_token");
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/update/teacher/${nip}`,
        { nip, name, email, phone_number: phoneNumber, address },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Guru berhasil diperbarui.");
      router.push("/administrator");
    } catch (error) {
      console.error("Error updating teacher:", error);
      alert("Gagal memperbarui guru.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md">
      <h2 className="text-2xl font-bold mb-4">Edit Guru</h2>
      <div className="mb-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">NIP
        <input
          type="text"
          value={nip}
          onChange={(e) => setNip(e.target.value)}
          className="grow"
          required
        />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">Nama
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="grow"
          required
        />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="grow"
          required
        />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">No. Telepon
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="grow"
          required
        />
        </label>
      </div>
      <div className="mb-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">Alamat
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="grow"
          required
        />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Perbarui Guru
      </button>
    </form>
  );
};

export default EditGuruForm;
