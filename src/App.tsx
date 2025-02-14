import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <div
      style={{ padding: '64px 20px 32px', maxWidth: '420px', margin: '0 auto' }}
    >
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
