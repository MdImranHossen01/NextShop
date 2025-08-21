import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

async function getProduct(id) {
  const { products } = await import('@/lib/data');
  return products.find(p => p.id === id);
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <span className="text-3xl font-bold text-indigo-600">${product.price}</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}