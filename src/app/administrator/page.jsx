"use client"

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
    <div>page</div>
  )
}

export default page