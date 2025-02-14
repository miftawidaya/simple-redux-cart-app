import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';

/**
🎯 Kenapa Perlu Custom Hooks ini?

🔹 Menghindari repetisi tipe – Tanpa ini, kita harus menulis <RootState> setiap kali memanggil useSelector.
🔹 TypeScript lebih ketat – Redux akan memberikan peringatan jika kita mencoba mengambil data yang salah.
🔹 Kode lebih bersih & mudah dibaca – Menggunakan useAppDispatch dan useAppSelector lebih rapi 
	 dibandingkan menggunakan useDispatch dan useSelector langsung.
 */

// useDispatch adalah hook dari Redux yang digunakan untuk mengirim aksi ke Redux.
// AppDispatch adalah tipe dari fungsi dispatch, yang sudah kita definisikan sebelumnya pada store.ts
// Dengan membuat useAppDispatch, kita memastikan bahwa setiap kali dispatch dipanggil,
// TypeScript akan mengenali tipe aksinya dengan benar.

export const useAppDispatch: () => AppDispatch = useDispatch;

//useSelector adalah hook Redux untuk mengambil data dari store.
// RootState adalah tipe untuk seluruh state Redux, yang sebelumnya didefinisikan pada store.ts
// TypedUseSelectorHook<RootState> memberi tahu TypeScript bahwa useSelector akan menggunakan RootState sebagai tipe state-nya.

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
