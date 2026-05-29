# 🌌 YOURU Creative Community Portal

[![Framework: Vanilla JS](https://img.shields.io/badge/Framework-Vanilla__JS-blue?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Styling: Anime Glassmorphism](https://img.shields.io/badge/Styling-Anime__Glassmorphism-cyan?style=flat-square)](style.css)
[![Hosting: Google Cloud Run](https://img.shields.io/badge/Hosting-Google__Cloud__Run-orange?style=flat-square&logo=googlecloud)](https://cloud.google.com/run)
[![CDN: Cloudinary](https://img.shields.io/badge/CDN-Cloudinary-blueviolet?style=flat-square&logo=cloudinary)](https://cloudinary.com)

**YOURU Creative Community Portal** adalah platform ekosistem digital berbasis Single Page Application (SPA) yang dirancang khusus untuk mewadahi pergerakan, kolaborasi, dan transparansi komunitas kreator masa depan (NARAxYOURU). Proyek ini dibangun sepenuhnya menggunakan metode **Vibe Coding** melalui instruksi AI terukur di Google AI Studio dengan model Gemini.

Platform ini menggabungkan estetika desain kelas atas (*High-Fashion Anime Glassmorphism*) dengan arsitektur web yang sangat responsif, ringan, dan mandiri tanpa ketergantungan *backend* yang berat.

---

## 🚀 Fitur Unggulan & Inovasi Teknologi

### 1. Arsitektur SPA Mandiri & State Management
* **Vanilla JS Execution:** Aplikasi berjalan 100% menggunakan JavaScript murni untuk menjamin kecepatan *rendering* di bawah 1 detik tanpa beban *overhead* dari *framework* besar.
* **MutationObserver Lifecycle:** Memanfaatkan API `MutationObserver` bawaan *browser* untuk memantau perubahan DOM secara dinamis saat data dipasang, memastikan inisialisasi library animasi seperti **GSAP** berjalan tepat waktu tanpa *race condition*.
* **Local Storage Persistence:** Enkapsulasi data penuh menggunakan `localStorage` untuk mematangkan sistem simulasi CRUD (Create, Read, Update, Delete) yang sinkron secara *real-time* antar halaman.

### 2. Dashboard Monitoring Publik (Data-Driven Community)
* Fitur transparansi data yang dapat diakses oleh semua pengguna untuk memantau keaktifan anggota, total karya terunggah, serta metrik pertumbuhan ekosistem.
* Visualisasi grafik modern menggunakan CSS *custom progress components* berwarna *Electric Cyan* dengan aksen *glowing halo* sinematik untuk mempertahankan performa tanpa *library chart* pihak ketiga yang lambat.

### 3. Etalase Merchandise Resmi (Finansial Berkelanjutan)
* Halaman khusus katalog produk cinderamata komunitas (Kaos Studio, Hoodie, dll) untuk mendukung kemandirian ekonomi ekosistem YOURU.
* Kartu produk interaktif bergaya *3D Tilt Glassmorphism*, lengkap dengan detail spesifikasi bahan, ukuran, stok, dan tombol *Call-to-Action* (CTA) pembelian langsung.

### 4. Sistem Pengelolaan Konten & Proteksi Cache (Panel Admin)
* **Cloudinary Cloud-Hosted Assets:** Formulir admin mendukung input tautan langsung dari Cloudinary CDN. Gambar dioptimasi otomatis di sisi awan menggunakan transformasi format (`f_auto`) dan kualitas (`q_auto`) untuk memangkas ukuran aset hingga 80% namun tetap menjaga ketajaman visual *high-fashion*.
* **Auto-Pruning 14 Hari:** Algoritma pembersihan otomatis pada galeri karya; postingan yang berumur lebih dari 14 hari akan disembunyikan secara otomatis dari halaman depan untuk menjaga kebersihan konten.
* **Fitur Reset Kamar Uji:** Tombol satu klik di panel admin untuk membersihkan seluruh *cache local storage* guna mengembalikan ekosistem ke status awal yang bersih selama fase pengujian juri.

### 5. Navigasi & UI/UX Premium Minimalis
* **Menu Samping Slide-in:** Bilah menu utama yang ringkas menggabungkan seluruh akses halaman ke dalam satu tombol menu yang memicu animasi *slide-in* elegan dari samping kanan layar menggunakan GSAP.
* **Responsive Layout:** Menggunakan teknik *fluid grids* dan CSS Media Queries adaptif untuk menjamin keserasian tampilan vertikal yang simetris, baik saat diakses lewat layar lebar (Desktop) maupun layar genggam (Mobile).

---

## 📂 Struktur Berkas Proyek

```text
├── index.html          # Pondasi utama halaman publik (Beranda, Dashboard, Merch, dll)
├── admin.html          # Antarmuka Panel Kontrol Admin
├── style.css           # Desain visual utama, variabel tokens, dan kerangka responsif
├── admin.css           # Desain visual terpadu untuk penyelarasan gaya panel admin
├── index.js            # Logika inti halaman publik, navigasi SPA, & pemuat data default
├── admin.js            # Otak operasional admin, manajemen CRUD, dan sinkronisasi enkripsi
├── dashboard.js        # Mesin kalkulasi statistik keaktifan dan visualisasi data
├── merch.js            # Modul pengelolaan data katalog dan rendering merchandise
└── metadata.json       # File konfigurasi manifest lingkungan Google AI Studio