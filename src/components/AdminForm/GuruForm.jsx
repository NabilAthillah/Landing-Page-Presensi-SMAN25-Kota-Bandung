"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const GuruForm = () => {
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const token = localStorage.getItem(
    //     "presensi_sman25_kota_bandung_auth_token"
    //   );

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/store/teacher`,
        { nip, name, email, phone_number: phoneNumber, address },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Guru berhasil ditambahkan!");
        router.push("/administrator");
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Gagal menambahkan guru.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 shadow-md"
    >

      <h2 className="text-2xl font-bold mb-4">Tambah Guru</h2>
      {/* NIP */}
      <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
        NIP
        <input
          type="text"
          value={nip}
          onChange={(e) => setNip(e.target.value)}
          className="grow"
          requiredplaceholder="123456789" />
      </label>
      {/* Nama */}
      <div className="mt-4">
      <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
        Nama
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="grow"
          requiredplaceholder="Nama" />
      </label>
      {/* Email */}
      </div>
      <div className="mt-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
            Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="grow"
          requiredplaceholder="Email"
        />
        </label>
      </div>
        {/* No.Telp */}
      <div className="mt-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
            No. Telepon
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="grow"
          required
          placeholder="08123456789"
        />
        </label>
      </div>
        {/* Alamat */}
      <div className="mt-4">
        <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
            Alamat
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="grow"
          required
          placeholder="Jln. Contoh Nomor 212, Contoh, Kota Contoh, Provinsi Contoh"
        />
        </label>
      </div>
        {/* Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Tambah Guru
      </button>
    </form>
  );
};

export default GuruForm;
