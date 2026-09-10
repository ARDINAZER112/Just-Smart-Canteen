import { Plus, ShoppingBag } from 'lucide-react';

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

const categoryColors = {
  Makanan: 'bg-amber-100 text-amber-700',
  Minuman: 'bg-sky-100 text-sky-700',
  Snack: 'bg-violet-100 text-violet-700',
};

const MenuCard = ({ item, onAddToCart, cartQuantity }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=fed7aa&color=c2410c&size=300&font-size=0.3`;
          }}
        />
        {/* Category Badge */}
        <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[item.category] || 'bg-gray-100 text-gray-600'}`}>
          {item.category}
        </span>
        {/* In-cart badge */}
        {cartQuantity > 0 && (
          <div className="absolute top-3 right-3 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
            {cartQuantity}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-base mb-1 line-clamp-1">{item.name}</h3>
        <p className="text-orange-500 font-bold text-lg mt-auto pt-2">{formatPrice(item.price)}</p>

        <button
          onClick={() => onAddToCart(item)}
          className={`mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer
            ${cartQuantity > 0
              ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-200'
              : 'bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white border border-orange-200'
            }`}
        >
          <Plus size={16} />
          {cartQuantity > 0 ? 'Tambah Lagi' : 'Tambah'}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
