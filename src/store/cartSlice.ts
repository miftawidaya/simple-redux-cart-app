import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemCart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: ItemCart[]; // cartItems harus berupa array karena akan menyimpan banyak item
}

// Membuat state awal (keranjang kosong)
const initialState: CartState = {
  cartItems: [],
};

/**
 * createSlice adalah fungsi utama dalam Redux Toolkit untuk membuat slice.
 * Setiap slice terdiri dari:
 * - Nama slice (name)
 * - State awal (initialState)
 * - Reducer functions (reducers) untuk mengubah state
 * - Actions yang otomatis dibuat berdasarkan reducer,
 * -- Tanpa Redux Toolkit, kita biasanya harus membuat action types dan action creators secara manual
 */

const cartSlice = createSlice({
  name: 'cart',
  initialState, // Pakai initialState yang sudah kita buat
  reducers: {
    // Menambahkan item ke keranjang
    addToCart: (state, action: PayloadAction<Omit<ItemCart, 'quantity'>>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1; // Jika item sudah ada, tambah quantity
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Jika belum ada, tambahkan item baru dengan quantity 1
      }
    },

    // Menghapus item dari keranjang
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // Kurangi quantity jika masih ada lebih dari 1
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          ); // Jika quantity = 1, hapus item
        }
      }
    },
  },
});

// Ekspor actions yang dibuat otomatis oleh createSlice
export const { addToCart, removeFromCart } = cartSlice.actions;

// Ekspor reducer untuk digunakan dalam store Redux
export default cartSlice.reducer;
