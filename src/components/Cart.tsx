import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { removeFromCart } from '../store/cartSlice';

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems); //Mengambil data dari Redux store.
  const dispatch = useAppDispatch(); // Mengirimkan aksi (dispatch) agar state bisa diperbarui

  // Hitung total harga
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Keranjang Belanja</h1>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong bro. Tambah dulu!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Rp {item.price.toLocaleString()} (x{item.quantity}
                )
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Hapus
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: Rp {totalPrice.toLocaleString()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
