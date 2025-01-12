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
  const [isFormVisible, setIsFormVisible] = useState(false); // state for toggling the form visibility
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/store/teacher`,
        { nip, name, email, phone_number: phoneNumber, address },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Guru berhasil ditambahkan!");
        router.push("/administrator");
      }
    } catch (error) {
      console.error("Error adding teacher:", error);
      alert("Gagal menambahkan guru.");
    }
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {isFormVisible ? "Tutup Form" : "Tambah Guru"}
      </button>

      {/* Toggleable form */}
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 shadow-md"
        >
          <h2 className="text-2xl font-bold mb-4">Tambah Guru</h2>

          <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
            NIP
            <input
              type="text"
              value={nip}
              onChange={(e) => setNip(e.target.value)}
              className="grow"
              required
              placeholder="123456789"
            />
          </label>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Nama
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="grow"
                required
                placeholder="Nama"
              />
            </label>
          </div>

          <div className="mt-4">
            <label className="input input-bordered border-emerald-950 flex items-center gap-2 bg-white">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="grow"
                required
                placeholder="Email"
              />
            </label>
          </div>

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

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Tambah Guru
          </button>
        </form>
      )}
    </div>
  );
};

export default GuruForm;
