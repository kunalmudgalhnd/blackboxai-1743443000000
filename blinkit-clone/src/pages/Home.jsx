import { useState, useEffect } from 'react';
import { getCategories, getProducts } from '../services/products';
import ProductCard from '../components/ProductCard';
import { useCart } from '../contexts/CartContext';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, prods] = await Promise.all([
          getCategories(),
          getProducts()
        ]);
        setCategories(cats);
        setProducts(prods);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCategorySelect = async (categoryId) => {
    setLoading(true);
    try {
      const prods = await getProducts(categoryId);
      setProducts(prods);
      setSelectedCategory(categoryId);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex space-x-4 overflow-x-auto py-4 px-2">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`flex flex-col items-center px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === category.id 
                ? 'bg-green-100 text-green-700' 
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <span className="text-2xl mb-1">{category.icon}</span>
            <span className="text-sm">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">
          {selectedCategory 
            ? categories.find(c => c.id === selectedCategory)?.name 
            : 'All Products'}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}