"use client"

import ClassForm from '@/components/AdminForm/ClassForm';
import GuruForm from '@/components/AdminForm/GuruForm';
import MatpelForm from '@/components/AdminForm/MatpelForm';
import Parents from '@/components/AdminForm/Parents';
import Admin from '@/components/AdminTable/Admin';
import { Guru } from '@/components/AdminTable/Guru';
import { Matpel } from '@/components/AdminTable/Matpel';
import Parent from '@/components/AdminTable/Parent';
import Student from '@/components/AdminTable/Students';
import StudentsUser from '@/components/AdminTable/StudentsUser';
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
      <GuruForm/>
      <Guru/>
      <MatpelForm/>
      <Matpel/>
      <Parents/>
      <Parent/>
    </div>
  )
}

export default page