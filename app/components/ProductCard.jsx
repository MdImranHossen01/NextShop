import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 h-24 overflow-hidden">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
          <Link href={`/products/${product.id}`} className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-200">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}