import { Plus, Minus, Trash2, ShoppingBag, Receipt, X } from 'lucide-react';

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

const CartSummary = ({ cart, onIncrease, onDecrease, onRemove, total, onClose }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <ShoppingBag size={16} className="text-orange-500" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800 text-base leading-tight">Keranjang Saya</h2>
            <p className="text-xs text-gray-400">{totalItems} item dipilih</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer lg:hidden"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
              <ShoppingBag size={28} className="text-gray-300" />
            </div>
            <p className="text-gray-400 font-medium text-sm">Keranjang masih kosong</p>
            <p className="text-gray-300 text-xs mt-1">Tambahkan menu favoritmu!</p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 group"
            >
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=fed7aa&color=c2410c&size=96&font-size=0.3`;
                }}
              />

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">{item.name}</p>
                <p className="text-orange-500 font-bold text-sm">{formatPrice(item.price)}</p>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-end gap-2">
                {/* Delete */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-md hover:bg-red-100 text-gray-300 hover:text-red-500 transition-all cursor-pointer"
                >
                  <Trash2 size={13} />
                </button>

                {/* Qty controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onDecrease(item.id)}
                    className="w-6 h-6 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:border-orange-400 hover:text-orange-500 text-gray-500 transition-all cursor-pointer shadow-sm"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                  <button
                    onClick={() => onIncrease(item.id)}
                    className="w-6 h-6 flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 text-white transition-all cursor-pointer shadow-sm"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer: Summary + Checkout */}
      {cart.length > 0 && (
        <div className="px-5 py-4 border-t border-gray-100 bg-white space-y-3">
          {/* Subtotals */}
          <div className="space-y-1.5">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-xs text-gray-400">
                <span className="truncate max-w-[150px]">{item.name} × {item.quantity}</span>
                <span className="font-medium text-gray-500">{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-dashed border-gray-200 pt-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 font-medium">Total Pembayaran</p>
              <p className="text-xl font-extrabold text-gray-800">{formatPrice(total)}</p>
            </div>
            <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
              <Receipt size={18} className="text-orange-500" />
            </div>
          </div>

          <button className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-bold text-sm hover:from-orange-600 hover:to-rose-600 transition-all duration-200 shadow-lg shadow-orange-200 cursor-pointer active:scale-95">
            Pesan Sekarang 🛵
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSummary;
