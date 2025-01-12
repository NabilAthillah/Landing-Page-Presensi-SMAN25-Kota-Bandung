"use client";

import { useEffect, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [nisnip, setNisnip] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const router = new useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
                { nisnip, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if(response.status === 200) {
                localStorage.setItem('presensi_sman25_kota_bandung_auth_token', response.data.token);
                localStorage.setItem('presensi_sman25_kota_bandung_auth_role', response.data.role);

                setNisnip('');
                setPassword('');

                Swal.fire({
                    title: 'Success!',
                    text: response.data.message,
                    icon: 'success',
                    confirmButtonText: 'Close'
                  });
                if (response.data.role === 'student') {
                    router.push('/siswa');
                } else if (response.data.role === 'teacher') {
                    router.push('/guru');
                } else if (response.data.role === 'administrator') {
                    router.push('/administrator');
                }
            }
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <>
            <div className="flex">
                <div className="w-1/2 h-screen hidden md:hidden lg:block">
                    <img src="/Assets/login-img.png" alt="..." className="w-full h-full" />
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-screen md:w-screen lg:w-1/2 h-screen flex justify-center items-center bg-white"
                >
                    <div className="grid justify-center items-center">
                        <div className="flex justify-center items-center h-28 font-bold">
                            <img src="/Assets/Logo.png" alt="...." className="w-12 h-12 pr-1" />
                            <h1 className="text-[#86C127] text-xl">SMA Negri 25 Kota Bandung</h1>
                        </div>

                        <div className="w-72 pl-5 py-4">
                            <h1 className="font-bold text-xl pb-1">Selamat Datang di Presensi SMAN 25 Kota Bandung</h1>
                            <p className="text-xs text-[#9ca3af]">Silahkan untuk login menggunakan user SIKAD</p>
                        </div>

                        <div className="w-72 pl-5 py-5">
                            {errorMessage && (
                                <p className="text-red-500 text-xs pb-2">{errorMessage}</p>
                            )}

                            <div className="pb-4">
                                <p className="text-sm text-[#6b7280] pb-1">NIS/NIP</p>
                                <input
                                    type="text"
                                    onChange={(e) => setNisnip(e.target.value)}
                                    placeholder="Type Here"
                                    className="bg-white border border-[#9ca3af] w-72 h-7 text-xs rounded-xl pl-2"
                                />
                            </div>

                            <div className="pb-5 relative">
                                <p className="text-sm text-[#6b7280] pb-1">Password</p>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Type Here"
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

                            <button
                                type="submit"
                                className="bg-[#86C127] w-72 h-7 rounded-lg"
                            >
                                <p className="flex justify-center items-center text-white text-sm">Masuk</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
