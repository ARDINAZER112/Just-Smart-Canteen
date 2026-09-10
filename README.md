<div align="center">

# 🍽️ Smart Canteen
### Aplikasi Kantin Sekolah Berbasis Web

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-Icons-F56040?style=for-the-badge)

> Aplikasi web modern untuk pemesanan menu kantin sekolah secara interaktif dan real-time.

</div>

---

## 📋 Daftar Isi

- [Tentang Aplikasi](#-tentang-aplikasi)
- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Komponen Utama](#-komponen-utama)
- [Tutorial Step by Step](#-tutorial-step-by-step)
  - [Step 1 — Persiapan & Instalasi](#step-1--persiapan--instalasi)
  - [Step 2 — Konfigurasi Tailwind CSS v4](#step-2--konfigurasi-tailwind-css-v4)
  - [Step 3 — Membuat Komponen Navbar](#step-3--membuat-komponen-navbar)
  - [Step 4 — Membuat Komponen MenuCard](#step-4--membuat-komponen-menucard)
  - [Step 5 — Membuat Komponen CartSummary](#step-5--membuat-komponen-cartsummary)
  - [Step 6 — Menyusun App.jsx (State Management)](#step-6--menyusun-appjsx-state-management)
  - [Step 7 — Menjalankan Aplikasi](#step-7--menjalankan-aplikasi)
- [Konsep React yang Digunakan](#-konsep-react-yang-digunakan)
- [Cara Penggunaan Aplikasi](#-cara-penggunaan-aplikasi)
- [Pengembangan Lanjutan](#-pengembangan-lanjutan)

---

## 📖 Tentang Aplikasi

**Smart Canteen** adalah aplikasi web pemesanan menu kantin sekolah yang dibangun sebagai tugas praktik *frontend development*. Aplikasi ini memungkinkan siswa untuk:

- Melihat daftar menu (Makanan, Minuman, Snack) dalam tampilan grid yang modern
- Memfilter menu berdasarkan kategori secara dinamis
- Menambahkan item ke keranjang belanja tanpa duplikasi
- Mengatur kuantitas pesanan secara real-time
- Melihat total tagihan yang dihitung otomatis

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 📂 **Filter Kategori** | Tombol filter (Semua, Makanan, Minuman, Snack) yang memperbarui tampilan menu secara dinamis |
| 🛒 **Cart Management** | Tambah, kurangi, dan hapus item dari keranjang tanpa entri duplikat |
| 💰 **Total Otomatis** | Total tagihan dihitung real-time menggunakan `.reduce()` setiap ada perubahan keranjang |
| 📱 **Responsif** | Tampilan optimal di desktop (sidebar cart) dan mobile (bottom drawer) |
| 🏷️ **Badge Keranjang** | Ikon navbar menampilkan jumlah total item secara live |

---

## 🛠️ Tech Stack

```
Frontend  : React.js 19 (dengan Vite 8)
Styling   : Tailwind CSS v4
Icons     : Lucide React
Font      : Plus Jakarta Sans (Google Fonts)
Bundler   : Vite
```

---

## 📁 Struktur Proyek

```
Smart-Canteen/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigasi atas + badge keranjang
│   │   ├── MenuCard.jsx      # Kartu menu individual (reusable)
│   │   └── CartSummary.jsx   # Ringkasan keranjang + total harga
│   ├── App.jsx               # Root component + semua state management
│   ├── main.jsx              # Entry point React
│   └── index.css             # Global styles + Tailwind import
├── index.html                # HTML template + SEO meta
├── vite.config.js            # Konfigurasi Vite + plugin Tailwind
├── package.json
└── README.md
```

---

## 🧩 Komponen Utama

### `<Navbar />`
Menampilkan judul aplikasi dan ikon keranjang dengan badge yang menunjukkan total item. Badge ber-animasi bounce saat ada item baru.

**Props yang diterima:**

| Prop | Tipe | Deskripsi |
|------|------|-----------|
| `cartCount` | `number` | Total kuantitas item di keranjang |
| `onCartToggle` | `function` | Handler untuk toggle drawer (mobile) |
| `isCartOpen` | `boolean` | Status drawer terbuka/tertutup |

---

### `<MenuCard />`
Komponen kartu reusable yang menampilkan gambar, nama, harga, kategori, dan tombol tambah untuk setiap item menu.

**Props yang diterima:**

| Prop | Tipe | Deskripsi |
|------|------|-----------|
| `item` | `object` | Data menu (id, name, category, price, image) |
| `onAddToCart` | `function` | Handler saat tombol Tambah diklik |
| `cartQuantity` | `number` | Jumlah item ini di keranjang (untuk indikator) |

---

### `<CartSummary />`
Menampilkan daftar pesanan, kontrol kuantitas (+/-), tombol hapus, subtotal tiap item, dan total akhir menggunakan `.reduce()`.

**Props yang diterima:**

| Prop | Tipe | Deskripsi |
|------|------|-----------|
| `cart` | `array` | Array item dalam keranjang |
| `onIncrease` | `function` | Handler tambah kuantitas |
| `onDecrease` | `function` | Handler kurangi kuantitas |
| `onRemove` | `function` | Handler hapus item |
| `total` | `number` | Total harga (dihitung di App.jsx) |
| `onClose` | `function` | Handler tutup drawer (mobile only) |

---

## 🚀 Tutorial Step by Step

### Step 1 — Persiapan & Instalasi

**Prasyarat:** Pastikan Node.js (v18+) sudah terinstal di komputermu.

```bash
# 1. Buat proyek Vite baru dengan template React
npx -y create-vite@latest ./smart-canteen --template react

# 2. Masuk ke direktori proyek
cd smart-canteen

# 3. Install dependensi dasar
npm install

# 4. Install Tailwind CSS v4 dan plugin Vite-nya
npm install -D tailwindcss @tailwindcss/vite

# 5. Install Lucide React untuk ikon
npm install lucide-react
```

> **Catatan:** Tailwind CSS v4 menggunakan pendekatan baru berbasis plugin Vite,
> bukan `postcss.config.js` seperti versi sebelumnya.

---

### Step 2 — Konfigurasi Tailwind CSS v4

#### `vite.config.js` — Daftarkan plugin Tailwind

```js
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

#### `src/index.css` — Import Tailwind (satu baris, tanpa @tailwind directives lama)

```css
@import "tailwindcss";

body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

#### `index.html` — Tambahkan meta SEO dan Google Font

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smart Canteen — Aplikasi Kantin Sekolah</title>
    <meta name="description" content="Sistem pemesanan menu kantin sekolah modern." />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### Step 3 — Membuat Komponen Navbar

Buat file `src/components/Navbar.jsx`:

```jsx
import { ShoppingCart, UtensilsCrossed } from 'lucide-react';

const Navbar = ({ cartCount, onCartToggle, isCartOpen }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo & Judul */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
            <UtensilsCrossed size={20} className="text-white" />
          </div>
          <span className="text-lg font-bold text-gray-800">Smart Canteen</span>
        </div>

        {/* Tombol Keranjang + Badge */}
        <button
          onClick={onCartToggle}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm
            ${isCartOpen ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}`}
        >
          <ShoppingCart size={18} />
          <span>Keranjang</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

**Konsep kunci:**
- `sticky top-0` → navbar tetap di atas saat scroll
- `backdrop-blur-md` → efek frosted glass / glassmorphism
- Badge hanya muncul jika `cartCount > 0` (conditional rendering `&&`)

---

### Step 4 — Membuat Komponen MenuCard

Buat file `src/components/MenuCard.jsx`:

```jsx
import { Plus } from 'lucide-react';

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);

const MenuCard = ({ item, onAddToCart, cartQuantity }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col">

      {/* Gambar & Badge */}
      <div className="relative overflow-hidden h-44">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
          {item.category}
        </span>
        {cartQuantity > 0 && (
          <div className="absolute top-3 right-3 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
            {cartQuantity}
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-800 text-base mb-1">{item.name}</h3>
        <p className="text-orange-500 font-bold text-lg mt-auto">{formatPrice(item.price)}</p>
        <button
          onClick={() => onAddToCart(item)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm bg-orange-50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
        >
          <Plus size={16} />
          {cartQuantity > 0 ? 'Tambah Lagi' : 'Tambah'}
        </button>
      </div>

    </div>
  );
};

export default MenuCard;
```

**Konsep kunci:**
- Komponen ini **reusable** — dipakai untuk setiap item menu via `.map()`
- Menerima `item` sebagai data dan `onAddToCart` sebagai callback dari parent
- `cartQuantity` dipakai untuk mengubah tampilan tombol dan menampilkan badge jumlah

---

### Step 5 — Membuat Komponen CartSummary

Buat file `src/components/CartSummary.jsx`:

```jsx
import { Plus, Minus, Trash2 } from 'lucide-react';

const formatPrice = (price) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
  }).format(price);

const CartSummary = ({ cart, onIncrease, onDecrease, onRemove, total }) => {
  return (
    <div className="flex flex-col h-full bg-white">

      {/* Header */}
      <div className="px-5 py-4 border-b">
        <h2 className="font-bold text-gray-800">Keranjang Saya</h2>
      </div>

      {/* Daftar Item */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {cart.length === 0 ? (
          <p className="text-center text-gray-400 py-12">Keranjang masih kosong</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">{item.name}</p>
                <p className="text-orange-500 font-bold text-sm">{formatPrice(item.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => onRemove(item.id)}>
                  <Trash2 size={13} className="text-red-400" />
                </button>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => onDecrease(item.id)}
                    className="w-6 h-6 border rounded-lg flex items-center justify-center">
                    <Minus size={12} />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                  <button onClick={() => onIncrease(item.id)}
                    className="w-6 h-6 bg-orange-500 text-white rounded-lg flex items-center justify-center">
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="px-5 py-4 border-t space-y-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">Total Pembayaran</p>
            <p className="text-xl font-extrabold text-gray-800">{formatPrice(total)}</p>
          </div>
          <button className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-xl font-bold">
            Pesan Sekarang 🛵
          </button>
        </div>
      )}

    </div>
  );
};

export default CartSummary;
```

**Konsep kunci:**
- `cart.map()` merender setiap item keranjang secara dinamis
- `total` dihitung di App.jsx menggunakan `.reduce()` lalu dikirim sebagai prop
- Semua handler (`onIncrease`, `onDecrease`, `onRemove`) adalah fungsi dari parent — prinsip *lifting state up*

---

### Step 6 — Menyusun App.jsx (State Management)

`App.jsx` adalah pusat semua logika aplikasi. Buat/ganti file `src/App.jsx`:

```jsx
import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import CartSummary from './components/CartSummary';

// ─── Data Dummy Menu ───────────────────────────────────────────────────────────
const menuData = [
  { id: 1, name: "Nasi Goreng",    category: "Makanan", price: 15000, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=300" },
  { id: 2, name: "Mie Goreng",     category: "Makanan", price: 12000, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300" },
  { id: 3, name: "Es Teh",         category: "Minuman", price: 5000,  image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
  { id: 4, name: "Es Jeruk",       category: "Minuman", price: 6000,  image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300" },
  { id: 5, name: "Kentang Goreng", category: "Snack",   price: 8000,  image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=300" },
];

export default function App() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ── Filter menu berdasarkan kategori aktif ─────────────────────────────────
  const filteredMenu = activeCategory === 'Semua'
    ? menuData
    : menuData.filter((item) => item.category === activeCategory);

  // ── Total harga menggunakan .reduce() ──────────────────────────────────────
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ── Total item untuk badge di Navbar ───────────────────────────────────────
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // ── Tambah ke keranjang (cegah duplikasi dengan .find()) ───────────────────
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id);
      if (exists) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ── Naikkan kuantitas item ─────────────────────────────────────────────────
  const handleIncrease = (id) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, quantity: c.quantity + 1 } : c));
  };

  // ── Turunkan kuantitas (otomatis hapus jika mencapai 0) ───────────────────
  const handleDecrease = (id) => {
    setCart((prev) =>
      prev
        .map((c) => c.id === id ? { ...c, quantity: c.quantity - 1 } : c)
        .filter((c) => c.quantity > 0)
    );
  };

  // ── Hapus item langsung dari keranjang ────────────────────────────────────
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

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">

          {/* ── Area Menu Utama ── */}
          <main className="flex-1 min-w-0">
            {/* Tombol Filter Kategori */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {['Semua', 'Makanan', 'Minuman', 'Snack'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all
                    ${activeCategory === cat
                      ? 'bg-orange-500 text-white border-orange-500'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid Menu — menggunakan .map() */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          </main>

          {/* ── Sidebar Keranjang (Desktop saja) ── */}
          <aside className="hidden lg:flex flex-col w-80 flex-shrink-0">
            <div className="sticky top-20 rounded-2xl border border-gray-200 shadow-sm overflow-hidden" style={{ height: 'calc(100vh - 5rem)' }}>
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

      {/* ── Drawer Keranjang (Mobile saja) ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white rounded-t-3xl shadow-2xl transition-transform duration-300
          ${isCartOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ maxHeight: '75vh' }}
      >
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
  );
}
```

---

### Step 7 — Menjalankan Aplikasi

```bash
# Jalankan development server
npm run dev
```

Buka browser dan akses: **`http://localhost:5173`**

```bash
# Build untuk produksi
npm run build

# Preview hasil build
npm run preview
```

File hasil build tersimpan di folder `dist/`.

---

## 💡 Konsep React yang Digunakan

### 1. `useState` — Mengelola State

```jsx
const [cart, setCart] = useState([]);
// cart    → nilai state saat ini (array item di keranjang)
// setCart → fungsi untuk memperbarui state (trigger re-render)
```

### 2. `.map()` — Merender Daftar Komponen

```jsx
// Setiap item di filteredMenu dirender menjadi satu <MenuCard />
filteredMenu.map((item) => (
  <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
))
```

> `key` wajib unik agar React bisa melacak perubahan setiap elemen secara efisien.

### 3. `.reduce()` — Menghitung Total Harga

```jsx
const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//                          ↑ akumulator  ↑ item saat ini              ↑ nilai awal
```

### 4. `.filter()` — Menyaring Data Menu

```jsx
const filteredMenu = menuData.filter((item) => item.category === activeCategory);
// Hanya mengembalikan item yang kategorinya sesuai dengan activeCategory
```

### 5. Props — Komunikasi Antar Komponen

```
App.jsx (State Owner / Parent)
  │
  ├─── <Navbar cartCount={cartCount} onCartToggle={...} />
  │
  ├─── <MenuCard item={item} onAddToCart={handleAddToCart} cartQuantity={...} />
  │
  └─── <CartSummary cart={cart} total={total} onIncrease={...} onRemove={...} />
```

### 6. Conditional Rendering

```jsx
// Tampilkan badge HANYA jika ada item di keranjang
{cartCount > 0 && <span>{cartCount}</span>}

// Tampilkan pesan atau daftar, tergantung kondisi
{cart.length === 0 ? <p>Keranjang kosong</p> : cart.map(...)}
```

### 7. Lifting State Up

State `cart` disimpan di `App.jsx` (parent), bukan di `CartSummary` (child). Ini memungkinkan `Navbar`, `MenuCard`, dan `CartSummary` semuanya mengakses dan mengubah data yang sama secara konsisten.

---

## 📱 Cara Penggunaan Aplikasi

1. **Buka aplikasi** di browser — `http://localhost:5173`
2. **Filter menu** dengan klik tombol kategori: Semua / Makanan / Minuman / Snack
3. **Tambah item** dengan klik tombol `+ Tambah` pada kartu menu
4. **Lihat keranjang:**
   - 🖥️ **Desktop** → Sidebar kanan selalu terlihat
   - 📱 **Mobile** → Klik ikon keranjang di navbar untuk membuka drawer dari bawah
5. **Atur kuantitas** dengan tombol `+` dan `−` di dalam keranjang
6. **Hapus item** dengan klik ikon 🗑️ (muncul saat hover pada item)
7. **Cek total** yang diperbarui otomatis setiap ada perubahan keranjang

---

## 🔮 Pengembangan Lanjutan

Fitur-fitur yang bisa ditambahkan sebagai pengembangan:

- [ ] **Autentikasi** — Login siswa dengan Firebase Auth
- [ ] **Database** — Simpan pesanan ke Firestore atau Supabase
- [ ] **Notifikasi Toast** — Feedback visual saat item ditambah (`react-hot-toast`)
- [ ] **Fitur Pencarian** — Search bar untuk mencari menu berdasarkan nama
- [ ] **Halaman Checkout** — Form data pemesan dan metode pembayaran
- [ ] **Riwayat Pesanan** — Halaman history transaksi per siswa
- [ ] **Panel Admin** — CRUD menu oleh pengelola kantin
- [ ] **PWA** — Progressive Web App agar bisa diinstall di HP

---

<div align="center">

**Dibuat dengan ❤️ untuk tugas praktik Frontend Development**

*Smart Canteen — Aplikasi Kantin Sekolah Modern*

</div>
