import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/component';


export function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="shop" element={<ShopPage />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
            />
      </Routes>
    </div>
  );
}
