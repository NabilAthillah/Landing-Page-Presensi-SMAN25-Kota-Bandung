import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Parent = () => {
  const [parents, setParents] = useState([]);
   
  useEffect(() => {
    const fetchParents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/data/get/parent`,
        );
        setParents(response.data.parents);
      } catch (error) {
        console.error("Error fetching parents:", error);
      }
    };
    fetchParents();
  }, []);


  return (
    <div>
      <h1 className='text-xl font-semibold text-gray-800 pb-4'>Orang Tua/Wali Murid</h1>
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
          {Array.isArray(parents) && parents.length > 0 ? (
            parents.map((parent) => (
              <tr key={parent.email} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4 text-center">{parent.name}</td>
                <td className="py-2 px-4 text-center">{parent.email}</td>
                <td className="py-2 px-4 text-center">{parent.phone_number}</td>
                <td className="py-2 px-4 text-center">{parent.role}</td>
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
  )
}

export default Parent