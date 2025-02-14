# Belajar Redux dalam React dengan Aplikasi Keranjang Belanja Sederhana

🚀**Demo:** [https://simple-redux-cart-app.vercel.app](https://simple-redux-cart-app.vercel.app/)

Redux adalah pustaka manajemen state untuk aplikasi JavaScript, terutama digunakan dengan React. Redux berfungsi sebagai **gudang data pusat** yang menyimpan semua informasi penting aplikasi, sehingga setiap komponen dapat membaca dan memperbarui state dengan cara yang terstruktur dan terkendali.

## 🚨 Mengapa Menggunakan Redux?

Di React, kita biasanya menggunakan `useState` untuk menyimpan data dalam komponen. Namun, ketika aplikasi semakin kompleks, pengelolaan state menjadi sulit karena data harus dibagikan antar banyak komponen yang saling terkait (Prop Drilling).

Masalah tanpa redux :

❌ **Prop Drilling** → Harus mengoper state melalui.

❌ **State Berantakan** → Banyak useState terpisah.

❌ **Sulit Dikelola** → Struktur state yang komplek dapat membingungkan.

Redux membantu mengatasi masalah ini dengan:

✅ **State tersentralisasi** → Semua data tersimpan dalam satu tempat, yaitu **Store**.

✅ **Akses mudah** → Setiap komponen dapat membaca dan memperbarui state dengan aturan yang jelas.

✅ **Alur data yang lebih terstruktur** → Perubahan state dilakukan melalui mekanisme yang konsisten.

## 💡 Konsep Dasar Redux

Redux memiliki tiga komponen utama:

1️⃣ **Store** → Tempat menyimpan state aplikasi secara global.

2️⃣ **Action** → Objek yang menggambarkan perubahan yang ingin dilakukan pada state.

3️⃣ **Reducer** → Fungsi yang menangani perubahan state berdasarkan action. Semua perubahan state harus dilakukan melalui reducer dengan action.

## 🔍 Ilustrasi Redux dengan Contoh Sederhana

Bayangkan Redux seperti celengan:

- **Store** → Celengan yang menyimpan uang (state/data aplikasi).
- **Action** → Kertas catatan berisi instruksi "Tambah uang 10 ribu" atau "Ambil uang 5 ribu"
- **Reducer** → Orang yang membaca catatan dan melakukan perubahan di celengan.

## 🔑 Konsep Penting dalam Redux

Selain tiga komponen utama (Store, Action, Reducer), Redux memiliki beberapa konsep tambahan yang penting untuk dipahami:

4️⃣ Dispatch → Cara mengirim action ke store.

5️⃣ Selector → Fungsi untuk mengambil data dari store.

6️⃣ Middleware → Perantara untuk menangani aksi asinkron (misalnya dengan `redux-thunk`).

7️⃣ Slice → Cara membagi state menjadi bagian kecil menggunakan `createSlice()`.

8️⃣ Provider → Komponen pembungkus agar Redux dapat digunakan di seluruh aplikasi.

9️⃣ useSelector → Hook untuk mengambil data dari store dalam komponen React.

🔟 useDispatch → Hook untuk mengirim action ke store dari dalam komponen.

## ⚙️ Instalasi Redux TypeScript

Perintah untuk menginstal Redux Toolkit dan React-Redux dengan dukungan TypeScript:

```
npm install @reduxjs/toolkit react-redux
npm install --save-dev @types/react-redux
```

Jika proyek memerlukan Redux Thunk untuk menangani aksi asinkron, tambahkan:

```
npm install @reduxjs/toolkit react-redux redux-thunk
```

### Contoh Implementasi Redux dalam Aplikasi Keranjang Belanja

Berikut adalah struktur proyek sederhana untuk aplikasi keranjang belanja dengan Redux:

```
simple-redux-cart-app/
┣ src/
┃ ┣ store/
┃ ┃ ┣ cartSlice.ts   	# Slice Redux untuk mengelola keranjang
┃ ┃ ┣ productSlice.ts	# Slice Redux untuk daftar produk
┃ ┃ ┗ store.ts       	# Konfigurasi Redux Store
┃ ┣ hooks.ts         	# Hook custom untuk Redux
┃ ┣ components/
┃ ┃ ┣ Cart.tsx       	# Komponen untuk menampilkan keranjang
┃ ┃ ┗ ProductList.tsx	# Komponen untuk daftar produk
┃ ┣ main.tsx         	# Entry point aplikasi
┃ ┗ App.tsx          	# Root component
```

Dengan Redux, komponen **Cart.tsx** dan **ProductList.tsx** dapat berkomunikasi dengan mudah melalui **Store**, tanpa perlu mengirim data secara manual melalui props.

## 🚀 Kesimpulan

Redux adalah alat yang sangat berguna untuk mengelola state dalam aplikasi React yang kompleks. Dengan pendekatan **terstruktur dan prediktif**, Redux membuat kode lebih mudah dipahami, dipelihara, dan dikembangkan.

📌 **Ingat:** Tidak semua aplikasi memerlukan Redux. Jika state bisa dikelola dengan `useState` atau `useContext`, mungkin Redux tidak diperlukan. Gunakan Redux jika aplikasi memiliki banyak data yang harus dikelola secara global dan sering diperbarui.

🎯 Selamat belajar Redux! 🚀
