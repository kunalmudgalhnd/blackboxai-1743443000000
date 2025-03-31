import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product cards will go here */}
      </div>
    </div>
  );
}