'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ShoppingBagIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <ShoppingBagIcon className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-800">NextShop</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/products" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              {status === 'authenticated' && (
                <Link href="/dashboard/add-product" className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {status === 'authenticated' ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700 hidden sm:block">{session.user.email}</span>
                <button onClick={() => signOut({ callbackUrl: '/' })} className="bg-red-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-600 flex items-center gap-2">
                  <ArrowRightOnRectangleIcon className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link href="/login" className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center gap-2">
                <UserCircleIcon className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}