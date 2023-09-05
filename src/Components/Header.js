import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";

// Define a functional component called Header
export const Header = () => {
  return (
    <div id='header-container'>
      <h1>Page Header</h1>
      <nav>
        <div id='pic-some-container'>
          <Link to="/">Pic Some</Link> {/* Create a link to the home page */}
        </div>
        <div id='cart-container'>
          <Link to="/cart"> {/* Create a link to the cart page */}
            <AiOutlineShoppingCart className='cart-icon' /> {/* Render a shopping cart icon */}
            Cart
          </Link>
        </div>
      </nav>
    </div>
  );
};
