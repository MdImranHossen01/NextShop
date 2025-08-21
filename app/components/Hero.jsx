import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Discover Your Next</span>
          <span className="block text-indigo-600">Favorite Product</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 sm:max-w-3xl">
          Browse our curated collection of innovative and high-quality products designed to enhance your life.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <Link href="/products" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}