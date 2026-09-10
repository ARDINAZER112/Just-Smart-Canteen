import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import CartSummary from './components/CartSummary';
import { ChefHat, Coffee, Cookie, LayoutGrid } from 'lucide-react';

// ─── Dummy Data ────────────────────────────────────────────────────────────────
const menuData = [
  { id: 1, name: "Nasi Goreng", category: "Makanan", price: 15000, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300" },
  { id: 2, name: "Mie Goreng", category: "Makanan", price: 12000, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300" },
  { id: 3, name: "Es Teh", category: "Minuman", price: 5000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
  { id: 4, name: "Es Jeruk", category: "Minuman", price: 6000, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300" },
  { id: 5, name: "Kentang Goreng", category: "Snack", price: 8000, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300" },
];

// ─── Category Config ───────────────────────────────────────────────────────────
const categories = [
  { label: 'Semua', icon: LayoutGrid },
  { label: 'Makanan', icon: ChefHat },
  { label: 'Minuman', icon: Coffee },
  { label: 'Snack', icon: Cookie },
];

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ── Filtered menu ────────────────────────────────────────────────────────────
  const filteredMenu = activeCategory === 'Semua'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  // ── Cart total using .reduce() ───────────────────────────────────────────────
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ── Total item count for badge ───────────────────────────────────────────────
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ── Add to cart (no duplicates) ──────────────────────────────────────────────
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id);
      if (exists) {
        return prev.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ── Increase quantity ────────────────────────────────────────────────────────
  const handleIncrease = (id) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
  };

  // ── Decrease quantity (remove if qty reaches 0) ──────────────────────────────
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((c) => c.id === id ? { ...c, quantity: c.quantity - 1 } : c)
        .filter((c) => c.quantity > 0)
    );
  };

  // ── Remove item ──────────────────────────────────────────────────────────────
  const handleRemove = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartCount={cartCount}
        onCartToggle={() => setIsCartOpen((v) => !v)}
        isCartOpen={isCartOpen}
      />

      {/* Mobile Cart Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">

          {/* ── Main Content ──────────────────────────────────────── */}
          <main className="flex-1 min-w-0">

            {/* Hero Banner */}
            <div className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-rose-500 rounded-2xl p-6 mb-6 overflow-hidden shadow-lg shadow-orange-200">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -right-4 -bottom-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="relative z-10">
                <p className="text-orange-100 text-sm font-medium mb-1">👋 Halo, Selamat Datang!</p>
                <h1 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight mb-2">
                  Mau makan apa <br className="sm:hidden" />hari ini?
                </h1>
                <p className="text-orange-100 text-sm">Pesan makanan & minuman favoritmu dengan mudah</p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setActiveCategory(label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border
                    ${activeCategory === label
                      ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-500'
                    }`}
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>

            {/* Menu Section Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-800 font-bold text-lg">
                {activeCategory === 'Semua' ? 'Semua Menu' : activeCategory}
                <span className="ml-2 text-sm font-normal text-gray-400">({filteredMenu.length} item)</span>
              </h2>
            </div>

            {/* Menu Grid — using .map() */}
            {filteredMenu.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
                {filteredMenu.map((item) => {
                  const cartItem = cart.find((c) => c.id === item.id);
                  return (
                    <MenuCard
                      key={item.id}
                      item={item}
                      onAddToCart={handleAddToCart}
                      cartQuantity={cartItem ? cartItem.quantity : 0}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="text-5xl mb-4">🍽️</p>
                <p className="text-gray-400 font-medium">Tidak ada menu tersedia</p>
              </div>
            )}
          </main>

          {/* ── Desktop Cart Sidebar ──────────────────────────────── */}
          <aside className="hidden lg:flex flex-col w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-20 h-[calc(100vh-5rem)] rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <CartSummary
                cart={cart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                onRemove={handleRemove}
                total={total}
              />
            </div>
          </aside>
        </div>
      </div>

      {/* ── Mobile Cart Drawer ─────────────────────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out
          ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '75vh' }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>
        <div className="h-full overflow-hidden flex flex-col" style={{ maxHeight: 'calc(75vh - 20px)' }}>
          <CartSummary
            cart={cart}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
            total={total}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
