import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from './CartSlice';
import './ProductList.css';

// Plant data grouped into categories, at least six unique plants per category
const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image: '/images/snake-plant.jpg',
        description: 'Known for its air-purifying qualities.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image: '/images/spider-plant.jpg',
        description: 'Great for improving indoor air quality.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image: '/images/peace-lily.jpg',
        description: 'Removes toxins and adds elegance.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image: '/images/boston-fern.jpg',
        description: 'Adds humidity and purifies the air.',
        cost: '$14',
      },
      {
        name: 'Rubber Plant',
        image: '/images/rubber-plant.jpg',
        description: 'Easy to care for and great at cleaning the air.',
        cost: '$17',
      },
      {
        name: 'Aloe Vera',
        image: '/images/aloe-vera.jpg',
        description: 'A succulent known for its healing properties.',
        cost: '$10',
      },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      {
        name: 'Echeveria',
        image: '/images/echeveria.jpg',
        description: 'A rosette-forming succulent, easy to maintain.',
        cost: '$8',
      },
      {
        name: 'Jade Plant',
        image: '/images/jade-plant.jpg',
        description: 'A symbol of good luck, very low maintenance.',
        cost: '$9',
      },
      {
        name: 'Haworthia',
        image: '/images/haworthia.jpg',
        description: 'Small succulent with striking striped leaves.',
        cost: '$7',
      },
      {
        name: 'Zebra Plant',
        image: '/images/zebra-plant.jpg',
        description: 'Distinctive white striped succulent.',
        cost: '$11',
      },
      {
        name: 'Sedum',
        image: '/images/sedum.jpg',
        description: 'A hardy, drought-tolerant succulent.',
        cost: '$6',
      },
      {
        name: 'Barrel Cactus',
        image: '/images/barrel-cactus.jpg',
        description: 'A round, spiky cactus that needs little water.',
        cost: '$13',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image: '/images/lavender.jpg',
        description: 'Calming fragrance, great for relaxation.',
        cost: '$16',
      },
      {
        name: 'Jasmine',
        image: '/images/jasmine.jpg',
        description: 'Sweet-smelling flowers that bloom at night.',
        cost: '$19',
      },
      {
        name: 'Rosemary',
        image: '/images/rosemary.jpg',
        description: 'An aromatic herb, useful in cooking too.',
        cost: '$9',
      },
      {
        name: 'Mint',
        image: '/images/mint.jpg',
        description: 'Refreshing scent and flavor, easy to grow.',
        cost: '$7',
      },
      {
        name: 'Eucalyptus',
        image: '/images/eucalyptus.jpg',
        description: 'A fresh, invigorating fragrance.',
        cost: '$14',
      },
      {
        name: 'Geranium',
        image: '/images/geranium.jpg',
        description: 'Fragrant flowering plant, blooms year-round.',
        cost: '$12',
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const [addedItems, setAddedItems] = useState({});

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePlantsClick = () => {
    navigate('/products');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <div className="product-list-page">
      {/* Navbar - appears on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="navbar-title" onClick={handleHomeClick}>
          Paradise Nursery
        </div>
        <div className="navbar-links">
          <a href="#" onClick={handleHomeClick}>
            Home
          </a>
          <a href="#" onClick={handlePlantsClick}>
            Plants
          </a>
          <a href="#" className="cart-link" onClick={handleCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{totalCartItems}</span>
          </a>
        </div>
      </nav>

      <div className="product-list-container">
        {plantsArray.map((categoryGroup) => (
          <div key={categoryGroup.category} className="category-section">
            <h2 className="category-title">{categoryGroup.category}</h2>
            <div className="plants-grid">
              {categoryGroup.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-thumbnail"
                  />
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-description">{plant.description}</p>
                  <p className="plant-cost">{plant.cost}</p>
                  <button
                    className="add-to-cart-button"
                    disabled={addedItems[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedItems[plant.name] ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
