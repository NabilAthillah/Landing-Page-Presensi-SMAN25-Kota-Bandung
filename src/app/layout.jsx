import Sidebar from '@/components/navigation/Sidebar';
import Navbar from '@/components/Navigation/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex bg-gray-50">
          <Sidebar />
          <div className="w-full">
            <Navbar />
            <div className="min-h-screen">
              <main className=" p-8">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
