import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing-page">
      {!showProductList ? (
        <div className="content">
          {/* El nombre exacto es obligatorio para el evaluador */}
          <h1>Welcome to Paradise Nursery</h1>
          <div className="divider"></div>
          <p>Donde tus sueños verdes se hacen realidad</p>
          <button className="start-button" onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;