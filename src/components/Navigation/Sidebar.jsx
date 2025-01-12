'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  HomeIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const menuItems = [
  {
    name: 'Scan QR',
    icon: HomeIcon,
    path: '/siswa'
  },
  {
    name: 'Jadwal Mata Pelajaran',
    icon: ChartBarIcon,
    path: '/Jadwal'
  },
  {
    name: 'Student',
    icon: UsersIcon,
    path: '/Students'
  },
]

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div
      className={`
        relative left-0 top-0 h-screen bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out z-50
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <img
          src="./assets/Logo.png"
          alt="Logo"
          className="w-12 h-12 object-contain"
        />
        {!isCollapsed && (
          <h1 className="text-xl font-semibold text-gray-800">Presensi</h1>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg hover:bg-gray-100"
        >
          {isCollapsed ? (
            <ChevronRightIcon className="w-5 h-5" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5" />
          )}
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path

            return (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`
                    flex items-center space-x-2 p-2 rounded-lg
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar