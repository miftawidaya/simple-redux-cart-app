import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

// Tipe untuk RootState dan AppDispatch:

// store.getState() adalah fungsi yang mengembalikan seluruh state Redux dalam aplikasi.
// ReturnType<typeof store.getState> berarti kita mendapatkan tipe dari apa yang dikembalikan oleh store.getState().
// RootState menjadi tipe dari keseluruhan state dalam Redux.

export type RootState = ReturnType<typeof store.getState>; // Tipe untuk seluruh state Redux

// store.dispatch adalah fungsi yang digunakan untuk mengirim aksi ke Redux.
// typeof store.dispatch mengambil tipe dari fungsi ini.
// AppDispatch menjadi tipe dari fungsi dispatch Redux.

export type AppDispatch = typeof store.dispatch; // Tipe untuk fungsi dispatch Redux

export default store;
