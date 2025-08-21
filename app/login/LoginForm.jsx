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
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... your form inputs and button ... */}
        {/* (The JSX for your form is unchanged) */}
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