import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';



const Demo = () => (
  <div>
    <h1>Demo Page</h1>
  </div>
)


function Expenses() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Expenses</h2>
    </main>
  );
}

function Invoices() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <Outlet />
    </main>
  );
}


function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
        <Link to="/invoices/demo">Demo</Link>
      </nav>
      <Outlet />
      <HomePage />
    </div>
    
  );
}

export {App, Demo, Expenses, Invoices};
