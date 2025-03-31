import LocationPicker from './LocationPicker';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://www.godigit.com/content/dam/godigit/directportal/en/content/zepto-logo.jpg" 
              alt="Logo" 
              className="h-8"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <LocationPicker />
            
            <button 
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}