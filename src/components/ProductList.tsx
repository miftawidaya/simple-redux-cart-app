import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addToCart } from '../store/cartSlice';

const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.products.products); // Mengambil data dari Redux Store
  const dispatch = useAppDispatch(); // Mengirimkan aksi (dispatch) agar state bisa diperbarui

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp {product.price.toLocaleString()}
            <button onClick={() => dispatch(addToCart(product))}>
              Tambah ke Keranjang
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
