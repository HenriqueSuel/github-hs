import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routers } from './routers';
import { CartProvider } from './contexts/cartContext';
import { LoadingProvider } from './contexts/loadingContext';
import { Loading } from './components/loading';
import { GithubProvider } from './contexts/githubContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoadingProvider>
    <GithubProvider>
      <CartProvider>
        <Loading />
        <Routers />
      </CartProvider>
    </GithubProvider>
  </LoadingProvider>
);

