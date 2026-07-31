Paradise Nursery – Plant Shopping Cart Application

Paradise Nursery is a dynamic e-commerce web application built for an online plant shop. It allows users to browse a curated selection of plants, view detailed product information, add items to a shopping cart, and manage their cart in real time.

Project Overview

The goal of this project was to build a functional, user-friendly shopping experience where customers can:

Browse plants organized by category
View plant details including images, names, descriptions, and prices
Add plants to a shopping cart
Increase, decrease, or remove items from the cart
See the cart quantity update dynamically in the navigation bar
View the total cost of items in the cart, updated automatically as items are added or removed
Features
Landing Page – Introduces Paradise Nursery with a welcome message and a call-to-action to start shopping.
Product Listing Page – Displays available plants grouped by category, each with an image, name, price, and an "Add to Cart" button.
Shopping Cart Page – Lists all items added to the cart, showing quantity, individual cost, and subtotal for each item.
Dynamic Cart Icon – The navigation bar updates in real time to reflect the total number of items in the cart.
Quantity Management – Users can increment or decrement the quantity of each item directly from the cart.
Total Cost Calculation – The total cost of all items in the cart is calculated and displayed dynamically.
Responsive Navigation Bar – Provides easy access to the product listing, cart, and other sections of the app.
Tech Stack
React – Component-based UI library used to build the application interface
JavaScript (ES6+) – Application logic and interactivity
HTML5 & CSS3 – Structure and styling
React State Management – Used to manage cart data and update the UI dynamically
Project Structure
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── Landing.js
│   │   ├── ProductList.js
│   │   ├── Cart.js
│   │   ├── Header.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
Getting Started
Prerequisites
Node.js and npm installed on your machine
Installation
Clone the repository:
   git clone <repository-url>
Navigate to the project directory:
   cd paradise-nursery
Install dependencies:
   npm install
Start the development server:
   npm start
Open your browser and go to http://localhost:3000
Future Enhancements
User authentication and order history
Checkout and payment integration
Search and filter functionality for products
Persistent cart storage using local storage or a backend database
Author

Developed as part of a hands-on practice project applying front-end development and state management skills to build a complete e-commerce shopping cart experience.
