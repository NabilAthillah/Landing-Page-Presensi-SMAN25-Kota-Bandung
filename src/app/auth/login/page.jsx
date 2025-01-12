"use client"

import LoginForm from '@/components/loginForm'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
  const router = new useRouter();

  useEffect(() => {
    const token = localStorage.getItem('presensi_sman25_kota_bandung_auth_token');
    const role = localStorage.getItem('presensi_sman25_kota_bandung_auth_role');
    if (token) {
      if (role === 'administrator') {
        router.push('/administrator');
      } else if (role === 'teacher') {
        router.push('/guru');
      } else  if (role === 'student') {
        router.push('/siswa');
      }
    }
}, [router]);

  return <LoginForm/>
}