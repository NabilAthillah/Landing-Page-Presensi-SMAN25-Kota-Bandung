import Sidebar from '@/components/navigation/Sidebar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-50">
          <Sidebar />
          <main className="transition-all duration-300 ease-in-out ml-16 lg:ml-64 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}