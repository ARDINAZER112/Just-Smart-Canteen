# Product Requirements Document (PRD)
## Proyek: Smart Canteen (Aplikasi Kantin Sekolah)

**Konteks Dokumen:** Dokumen spesifikasi kebutuhan perangkat lunak untuk tugas praktik pembuatan aplikasi pemesanan menu kantin berbasis web.

---

## 1. Ringkasan Eksekutif
Smart Canteen adalah aplikasi web sederhana yang berfungsi sebagai sistem pemesanan menu (makanan, minuman, dan *snack*) di kantin sekolah. Aplikasi ini dirancang agar interaktif, *real-time*, dan memiliki antarmuka yang modern serta responsif menyerupai desain standar industri (Figma).

## 2. Tujuan Proyek
Membuat aplikasi pemesanan menu kantin sederhana menggunakan ekosistem ReactJS yang interaktif dan *real-time*, guna memenuhi kriteria penilaian praktik *frontend development*.

## 3. Teknologi yang Digunakan (Tech Stack)
*   **Frontend Library:** React.js (Sangat disarankan menggunakan Vite untuk inisiasi proyek yang lebih cepat).
*   **Styling:** Tailwind CSS (Untuk mengimplementasikan desain UI yang responsif dan rapi sesuai referensi visual).
*   **Icons:** Lucide-React (Untuk ikon keranjang, *plus*, *minus*, dan kategori).

## 4. Fitur Utama (Core Features)
Aplikasi harus memiliki 3 fungsionalitas utama:

### A. Daftar & Filter Menu
*   Menampilkan daftar produk (makanan, minuman, *snack*) dalam bentuk *grid* atau daftar.
*   Wajib menggunakan metode `.map()` untuk me-render daftar menu dari *array* data.
*   Memiliki tombol filter berdasarkan kategori (Semua, Makanan, Minuman, Snack) yang memperbarui daftar menu secara dinamis ketika diklik.

### B. Keranjang Belanja (Cart Management)
*   Terdapat tombol untuk menambah item ke dalam keranjang.
*   **Pencegahan Duplikasi:** Jika item yang sama ditambahkan kembali, aplikasi tidak boleh membuat baris/data duplikat di keranjang, melainkan hanya menambah jumlahnya (*quantity*).
*   Pengguna dapat menambah, mengurangi, atau menghapus (*remove*) item pesanan dari keranjang.

### C. Total Harga Otomatis
*   Sistem harus mampu menghitung subtotal tiap item (harga × kuantitas) dan total tagihan keseluruhan.
*   Wajib menggunakan metode `.reduce()` untuk menghitung total tagihan secara *real-time* setiap kali ada perubahan pada isi keranjang.

## 5. Komponen UI Minimal (Komponen Modular)
Kode aplikasi wajib dipecah menjadi minimal 3 komponen React:
1.  **`Navbar`**: Menampilkan judul aplikasi ("Smart Canteen") dan ikon keranjang yang menunjukkan total (*badge*) jumlah item di dalam keranjang.
2.  **`MenuCard`**: Komponen kartu (UI) untuk menampilkan detail setiap menu (gambar, nama, harga, dan tombol "Tambah").
3.  **`CartSummary`**: Komponen di bilah samping (desktop) atau bawah (mobile) yang menampilkan ringkasan pesanan, pengaturan kuantitas (+/-), tombol hapus, dan total harga akhir.

## 6. Kriteria Keberhasilan (Acceptance Criteria)
*   Fungsionalitas filter, tambah keranjang, dan hitung total berjalan dengan lancar tanpa *bug*.
*   Penerapan *Hooks* (`useState`) dan pelemparan *Props* antar komponen dilakukan dengan tepat.
*   Tampilan harus rapi dan responsif (menyesuaikan dengan baik di layar HP maupun layar komputer/laptop).