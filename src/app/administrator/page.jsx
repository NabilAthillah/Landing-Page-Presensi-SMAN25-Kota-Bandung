"use client"

import Admin from '@/components/AdminTable/Admin';
import { Guru } from '@/components/AdminTable/Guru';
import Parent from '@/components/AdminTable/Parent';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const router = new useRouter();

    useEffect(() => {
        const token = localStorage.getItem('presensi_sman25_kota_bandung_auth_token');
        const role = localStorage.getItem('presensi_sman25_kota_bandung_auth_role');
        if (!token || token.length !== 60 || role !== 'administrator') {
            router.push('/auth/login');
        }
    }, [router]);

  return (
    <div>
      <Parent/>
    </div>
  )
}

export default page