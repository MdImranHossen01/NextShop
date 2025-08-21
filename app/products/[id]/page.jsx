import Image from 'next/image';

// Function to fetch a single product by its ID
async function getProduct(id) {
  const { products } = await import('@/lib/data');
  return products.find(p => p.id === id);
}

// The main component for the product detail page
export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  // If no product is found for the given ID, show a not found message
  if (!product) {
    return (
      <main className="flex-grow container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold">Product not found!</h1>
      </main>
    );
  }

  // If a product is found, render its details
  return (
    <main className="flex-grow container mx-auto px-4 py-12 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
        </div>
      </div>
    </main>
  );
}