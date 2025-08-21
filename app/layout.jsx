import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from './components/AuthProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'; // Import the Toaster

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextShop',
  description: 'A simple product management app',
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Add suppressHydrationWarning */}
      <body className={inter.className}>
          <AuthProvider>
            <div className='flex flex-col min-h-screen'>
              <Toaster position="top-center" />
              <Navbar />
              <main className='flex-grow'>
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
      </body>
    </html>
  );
}