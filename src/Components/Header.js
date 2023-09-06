import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoCart } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa'; // Import the heart icon
import { AppContext } from '../Components/AppContext';

// Define a functional component called Header
export const Header = () => {
  const { cartItems, photos } = useContext(AppContext);
  const cartItemCount = cartItems.length;

  // Check if there are any favorited photos
  const hasFavoritedPhotos = photos.some((photo) => photo.isFavorited);

  return (
    <div id='header-container'>
      <h1>GalleryGoods</h1>
      <nav>
        <div id='pic-some-container'>
          <Link to="/">Pic Some</Link>
        </div>
        <div id='cart-container'>
          <Link to="/cart">
            {/* Render a shopping cart icon */}
            {cartItemCount > 0 ? (
            	<div className='cart-icon-container'>
                	<IoCart className='main-cart-icon' /> {/* Display filled cart icon when items are in the cart */}
              	</div>
            ) : (
				<div className='cart-icon-container'>
            		<IoCartOutline className='main-cart-icon' /> {/* Display outlined cart icon when cart is empty */}
				</div>
            )}
            Cart
          </Link>
        </div>
		<div id="favorites-container">
          {hasFavoritedPhotos && ( // Only render the "Favorites" link if there are favorited photos
            <Link to="/favorites">Favorites</Link>
			)}
		</div>
      </nav>
    </div>
  );
};
