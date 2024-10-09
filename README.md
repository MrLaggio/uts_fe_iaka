# Sistem Manajemen Restoran

## Gambaran Umum
Proyek ini adalah Sistem Manajemen Restoran yang komprehensif, mencakup API backend yang dibangun dengan Node.js dan Express, serta aplikasi frontend yang dikembangkan dengan React. Sistem ini memungkinkan pengelolaan operasi restoran yang efisien, termasuk penanganan pesanan, pengelolaan menu, dan pelacakan informasi pelanggan.

## Backend (tugas-sequalize)

### Teknologi yang Digunakan
- Node.js
- Express.js
- Sequelize ORM
- Database MySQL

### Fitur Utama
1. **Endpoint API**: Menyediakan endpoint API RESTful untuk berbagai operasi.
2. **Model Database**: Mencakup model untuk Pembeli, Pembayaran, Menu, Pemesanan, dan Karyawan.
3. **Operasi CRUD**: Mendukung operasi Create, Read, Update, dan Delete untuk semua model.
4. **Seeding Data**: Menyertakan skrip seeder untuk mengisi database dengan data awal.

### Struktur Proyek
- `controllers/`: Berisi logika controller untuk setiap model.
- `models/`: Mendefinisikan model Sequelize.
- `routes/`: Mendefinisikan rute API.
- `seeders/`: Berisi skrip seeding database.

## Frontend (front-end_restaurant)

### Teknologi yang Digunakan
- React.js
- Axios untuk panggilan API
- Tailwind CSS untuk styling

### Fitur Utama
1. **Manajemen Pesanan**: Memungkinkan melihat, membuat, memperbarui, dan menghapus pesanan.
2. **Desain Responsif**: Menggunakan Tailwind CSS untuk UI yang responsif dan modern.
3. **Manajemen State**: Menggunakan React hooks untuk manajemen state.

### Struktur Proyek
- `src/components/`: Berisi komponen React.
- `src/App.js`: Komponen utama aplikasi.

## Pengaturan dan Instalasi

### Pengaturan Backend
1. Navigasi ke direktori `tugas-sequalize`.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Konfigurasikan pengaturan database Anda di file konfigurasi Sequelize.
4. Jalankan migrasi database dan seeder.
5. Mulai server dengan `npm start`.

### Pengaturan Frontend
1. Navigasi ke direktori `front-end_restaurant`.
2. Jalankan `npm install` untuk menginstal dependensi.
3. Mulai server pengembangan React dengan `npm start`.

## Endpoint API

- GET `/pembeli/find`: Mendapatkan semua pelanggan
- POST `/createPembeli`: Membuat pelanggan baru
- GET `/menu`: Mendapatkan semua item menu
- POST `/createMenu`: Menambahkan item menu baru
- GET `/pemesanan`: Mendapatkan semua pesanan
- POST `/createPemesanan`: Membuat pesanan baru
- (Endpoint tambahan untuk operasi update dan delete)