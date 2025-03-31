export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Blinkit Clone</h1>
        <div className="flex space-x-4">
          <button className="hover:bg-blue-700 px-3 py-1 rounded">
            <i className="fas fa-shopping-cart mr-1"></i> Cart
          </button>
          <button className="hover:bg-blue-700 px-3 py-1 rounded">
            <i className="fas fa-user mr-1"></i> Login
          </button>
        </div>
      </div>
    </nav>
  );
}