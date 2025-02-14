import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    { id: 1, name: 'Laptop', price: 10000000 },
    { id: 2, name: 'Handphone', price: 5000000 },
    { id: 3, name: 'Headset', price: 750000 },
    { id: 4, name: 'Mouse', price: 250000 },
  ],
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

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Payload adalah `data yang dikirim` dalam sebuah action untuk mengubah state,
    // PayloadAction<T> adalah tipe bawaan dari Redux Toolkit,
    // yang digunakan untuk menentukan tipe data payload dalam action.

    // PayloadAction<Product> berarti action.payload harus memiliki tipe Product
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload); // Menambahkan produk baru
    },

    // PayloadAction<number> berarti action.payload harus memiliki tipe number
    // state.products.filter(...) membuat array baru tanpa produk yang memiliki id sesuai dengan action.payload.
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
        // Produk dengan id yang `tidak sama` dengan action.payload tetap ada di daftar.
        // Produk dengan id yang `sama` dengan action.payload akan dihapus.
      );
    },
  },
});

// Ekspor actions yang dibuat otomatis oleh createSlice
export const { addProduct, removeProduct } = productSlice.actions;

// Ekspor reducer untuk digunakan dalam store Redux
export default productSlice.reducer;
