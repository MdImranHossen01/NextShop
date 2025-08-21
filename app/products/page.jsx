import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// Function to fetch products
async function getProducts() {
  // In a real app, you would fetch from your API endpoint
  // const res = await fetch('http://localhost:3000/api/products');
  // For this example, we'll import directly to avoid fetch issues in build
  const { products } = await import('@/lib/data');
  return products;
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}