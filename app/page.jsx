import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { products } from '../lib/data';

export default function HomePage() {
  // Show first 3 products as highlights
  const highlightedProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Product Highlights Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlightedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}