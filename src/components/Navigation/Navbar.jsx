"use client"
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Navbar = () => {

  const router = new useRouter();
  const role = localStorage.getItem('presensi_sman25_kota_bandung_auth_role');

  
  const handleLogout = async (e) => {
    e.preventDefault();

    localStorage.removeItem('presensi_sman25_kota_bandung_auth_token');
    localStorage.removeItem('presensi_sman25_kota_bandung_auth_role');

    Swal.fire({
      title: 'Success!',
      text: 'Logout berhasil!',
      icon: 'success',
      confirmButtonText: 'Close'
    });

    router.push('/auth/login');
  }

  return (
    <div className="navbar bg-white">
      <div className="flex-1">

      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className='col-auto  text-center'>
            <div>
            {name ? name : 'Nama tidak ditemukan'}
            </div>
            {role ? role : 'Role tidak ditemukan'}
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar