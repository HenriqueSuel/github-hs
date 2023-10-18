import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers';
import { CartProvider } from './contexts/cartContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartProvider>
      <Routers />
    </CartProvider>
  </React.StrictMode>
);

