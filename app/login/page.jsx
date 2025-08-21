import { Suspense } from 'react';
import LoginForm from './LoginForm'; // Adjust the import path if needed

function LoadingFallback() {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
        <div className="space-y-6">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-300 rounded mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Suspense fallback={<LoadingFallback />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}