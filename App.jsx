import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import Header from './components/Header';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  return (
    <div className="App">
      {showLanding ? (
        <div className="landing-page">
          <div className="landing-overlay"></div>
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>
              Welcome to Paradise Nursery, where we bring the beauty of
              nature straight to your doorstep. Explore our handpicked
              collection of houseplants, succulents, and air-purifying
              greenery to create your own little paradise at home.
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      ) : (
        <>
          <Header cartItems={cartItems} />
          <ProductList cartItems={cartItems} setCartItems={setCartItems} />
        </>
      )}
    </div>
  );
}

export default App;
