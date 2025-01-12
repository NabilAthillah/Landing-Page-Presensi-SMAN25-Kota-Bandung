import React from 'react';
import Image from 'next/image';

const Qr = () => {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 overflow-hidden">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center mb-4 sm:mb-0">
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