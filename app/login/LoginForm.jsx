'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/products';

  // Handler for Google Sign-In
  const handleGoogleSignIn = () => {
    signIn('google', { callbackUrl });
  };

  // Handler for Email/Password Sign-In
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        setError('Invalid email or password');
      } else {
        router.push(callbackUrl);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Sign in to your account</h2>
        <p className="text-gray-500">
          Or{' '}
          <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            go back to the homepage
          </Link>
        </p>
      </div>

      {/* Google Sign-in Button */}
      <button
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 mb-6"
      >
        <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
          <path fill="#4285F4" d="M24 9.5c3.9 0 6.9 1.6 9.1 3.7l6.9-6.9C35.2 2.3 30.1 0 24 0 14.8 0 7.3 5.4 4.1 12.9l8.3 6.5C14.1 13.4 18.6 9.5 24 9.5z"></path>
          <path fill="#34A853" d="M46.2 25.4c0-1.7-.2-3.4-.5-5H24v9.5h12.5c-.5 3.1-2.2 5.7-4.9 7.5l7.9 6.1c4.6-4.2 7.2-10.2 7.2-17.6z"></path>
          <path fill="#FBBC05" d="M12.4 29.4c-.4-.9-.7-2-.7-3.1s.3-2.2.7-3.1l-8.3-6.5C1.5 20.3 0 24.5 0 29.4c0 4.9 1.5 9.1 4.1 12.6l8.3-6.5c-1.7-1.3-2.8-3.4-2.8-5.7z"></path>
          <path fill="#EA4335" d="M24 48c6.1 0 11.2-2 14.9-5.4l-7.9-6.1c-2.7 1.8-6.2 2.9-10.1 2.9-5.4 0-9.9-3.9-11.6-9.1L4.1 36.9C7.3 44.4 14.8 48 24 48z"></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
        Sign in with Google
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Email/Password Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <p className="text-sm text-gray-500">Use `test@example.com` and `password` to log in.</p>
        <div>
          <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed">
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
}