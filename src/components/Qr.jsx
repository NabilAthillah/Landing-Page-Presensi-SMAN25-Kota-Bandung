import React from 'react';
import Image from 'next/image';

const Qr = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 overflow-hidden">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
          {/* Placeholder for additional content */}
        </div>
        <div className="flex items-end mb-4 sm:mb-0">
          <div className="flex flex-col items-end">
            <p className="mr-2 text-base sm:text-lg">Aditya Nugraha</p>
            <p className="text-gray-500 text-sm sm:text-base">Siswa</p>
          </div>
          <div className="ml-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center">
              Foto
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg font-medium">Scan QR-Code</p>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center">
          <p className="text-lg font-medium">Kamera</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
          Nama Kamera
        </button>
      </div>
    </div>
  );
};

export default Qr;