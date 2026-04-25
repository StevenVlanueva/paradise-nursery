import React from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProductList, setShowProductList] = React.useState(false);

  return (
    <div className="landing-page">
      {!showProductList ? (
        <div className="content">
          <h1>Paradise Nursery</h1>
          <p>Donde tus sueños verdes se hacen realidad</p>
          <button className="start-button" onClick={() => setShowProductList(true)}>
            Comenzar
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;