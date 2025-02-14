import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react'; // manual input
import importPlugin from 'eslint-plugin-import';  // manual input

export default tseslint.config(
  { ignores: ['dist'] },  // dist akan diabaikan tidak dicek
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'], // hanya cek dan rule file itu
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,  // API browser
    },
    plugins: {
      react, // manual inpu
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // tambahan plugin untuk rule
    },
    settings: { // manual input
      'import/resolver': { // dan resolve masalah relative path diganti dengan '@/assests/home.svg'
        alias: {
          map: [['@', './src']],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.svg',
            '.png',
            '.jpg',
          ],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...react.configs.recommended.rules, // manual input
      'react/react-in-jsx-scope': 'off', // agar tidak error , react versi terbaru tidak butuh import rafc lagi
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/no-unresolved': 'error', //jika import gagal/tidak ada akan menampilkan error
      'react/prop-types': 'off',
    },
  }
);