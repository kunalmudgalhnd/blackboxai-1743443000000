import { CartProvider } from './contexts/CartContext';
import { LocationProvider } from './contexts/LocationContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <LocationProvider>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-6xl mx-auto py-4 px-4">
            <Home />
          </main>
          <CartDrawer />
        </div>
      </CartProvider>
    </LocationProvider>
  );
}

export default App;
