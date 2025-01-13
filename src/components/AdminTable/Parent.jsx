import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Parent = () => {
  const [parent, setParent] = useState([]);

  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/parent`
        );
        console.log("API Response:", response.data);
        setParent(response.data.parents);
      } catch (error) {
        console.error("Error fetching parents:", error.response?.data || error.message);
      }
    };

    fetchParents();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-800 pb-4">
        Orang Tua/Wali Murid
      </h1>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="border-b bg-gray-50">
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">No. Telepon</th>
            {/* <th className="py-2 px-4">Role</th> */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(parent) && parent.length > 0 ? (
            parent.map((parents) => (
              <tr key={parents.email} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{parents.name}</td>
                <td className="py-2 px-4 text-center">{parents.email}</td>
                <td className="py-2 px-4 text-center">{parents.phone_number}</td>
                {/* <td className="py-2 px-4 text-center">{parents.role}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center">
                Tidak Ada Orang Tua/Wali Murid
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Parent;
