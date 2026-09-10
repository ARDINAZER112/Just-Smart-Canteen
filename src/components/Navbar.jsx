import { ShoppingCart, UtensilsCrossed } from 'lucide-react';

const Navbar = ({ cartCount, onCartToggle, isCartOpen }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center shadow-md">
              <UtensilsCrossed size={20} className="text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-gray-800 tracking-tight">
                Smart Canteen
              </span>
              <span className="text-xs text-gray-400 font-medium hidden sm:block">
                Aplikasi Kantin Sekolah
              </span>
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartToggle}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer
              ${isCartOpen
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-500'
              }`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
