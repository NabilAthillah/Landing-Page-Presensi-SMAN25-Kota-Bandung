"use client";

import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
        <>
            <div className='flex'>
                <div className='w-1/2  h-screen hidden md:hidden lg:block '>
                    <img src="/Assets/login-img.png" alt="..." className='w-full h-full'/>
                </div>

                <form className='w-screen md:w-screen lg:w-1/2 h-screen flex justify-center items-center bg-white'>
                    <div className='grid justify-center items-center'>
                        <div className='flex justify-center items-center h-28 font-bold'>
                            <img src="/Assets/Logo.png" alt="...." className='w-12 h-12 pr-1'/>
                            <h1 className=' text-[#86C127] text-xl'> SMA Negri 25 Kota Bandung </h1>
                        </div>

                        <div className='w-72 pl-5 py-4'>
                            <h1 className='font-bold text-xl pb-1'> Selamat Datang di Presensi SMAN 25 Kota Bandung </h1>
                            <p className='text-xs text-[#9ca3af]'> Silahkan untuk login menggunakan user SIKAD </p>
                        </div>

                        <div className='w-72 pl-5 py-5'>
                            <div className='pb-4'>
                                <p className='text-sm text-[#6b7280] pb-1'> NIS/NIP </p>
                                <input type="email" placeholder=' Type Here ' className='bg-white border border-[#9ca3af] w-72 h-7 text-xs rounded-xl pl-2'/>
                            </div>

                            <div className="pb-5 relative">
                                <p className="text-sm text-[#6b7280] pb-1">Password</p>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder=" Type Here "
                                    className="bg-white border border-[#9ca3af] w-72 h-7 text-xs rounded-xl pl-2"
                                />
                                {showPassword ? (
                                    <EyeSlashIcon
                                    className="h-5 w-5 text-gray-400 absolute right-0 top-7 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <EyeIcon
                                    className="h-5 w-5 text-gray-400 absolute right-0 top-7 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>

                            <button className='bg-[#86C127] w-72 h-7 rounded-lg'>
                                <p className='flex justify-center items-center text-white text-sm'> Masuk </p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login