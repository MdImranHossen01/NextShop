'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const toastId = toast.loading('Adding new product...');

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, image }),
    });

    if (res.ok) {
      toast.success('Product added successfully!', { id: toastId });
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
      setTimeout(() => router.push('/products'), 1500);
    } else {
      const data = await res.json();
      toast.error(`Error: ${data.message}`, { id: toastId });
    }
    setIsLoading(false);
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-12 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Product Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
          </div>
          {/* Price Input */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
            <input type="number" id="price" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          {/* Image URL Input */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
            <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="https://example.com/image.jpg" />
          </div>
          {/* Submit Button */}
          <div>
            <button type="submit" disabled={isLoading} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300">
              {isLoading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}