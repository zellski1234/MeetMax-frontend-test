import React, { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import { FaHeart, FaPlus, FaShoppingCart } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes

// Define a functional component called Photos
export const Photos = () => {
  const { photos, hovered, setHovered, toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(AppContext);

  const handleMouseHover = (isHovered) => {
    setHovered(isHovered);
  };

  if (!photos) {
    return <div> No photos found </div>;
  }

  return (
    <div className='container'>
      <h2>Photos</h2>
      <div
        className='photo-div'
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
      >
        {photos.map((photo) => (
          <div key={photo.id} className='image-container'>
            {hovered && (
              <div className='icon-container'>
                <FaHeart
                  className={`heart-icon ${photo.isFavorited ? 'favorited' : ''}`}
                  onClick={() => toggleFavorite(photo.id)}
                />
                {cartItems.some((item) => item.id === photo.id) ? ( // Check if image is in cart
                  <FaShoppingCart
                    className='cart-icon'
                    onClick={() => removeFromCart(photo.id)} // Remove from cart when clicked
                  />
                ) : (
                  <FaPlus
                    className='plus-icon'
                    onClick={() => addToCart(photo)} // Add to cart when clicked
                  />
                )}
              </div>
            )}
            <Image img={photo} className='scrimba-images' />
          </div>
        ))}
      </div>
    </div>
  );
};

// Define PropTypes for the Image component
const Image = ({ img, className }) => {
  return (
    <img
      className={className}
      src={img.url}
      alt="scrimba-react-bootcamp-images"
    />
  );
};

// Define PropTypes for the img prop in the Image component
Image.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  className: PropTypes.string.isRequired,
};
