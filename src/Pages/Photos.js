import React, { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import { FaHeart, FaPlus } from 'react-icons/fa';

// Define a functional component called Photos
export const Photos = () => {
  // Get data from the AppContext using useContext
  const { photos, hovered, setHovered, toggleFavorite } = useContext(AppContext);

  // Function to handle mouse hover events
  const handleMouseHover = (isHovered) => {
    setHovered(isHovered);
    console.log(`hovered: ${isHovered}`);
  };

  // Check if photos data is available
  if (!photos) {
    return <div> No photos found </div>; // Display a message if no photos are found
  }

  // Render the component
  return (
    <div className='container'>
      <h2>Photos</h2> {/* Display a title */}
      <div
        className='photo-div'
        onMouseEnter={() => handleMouseHover(true)} // Handle mouse enter event
        onMouseLeave={() => handleMouseHover(false)} // Handle mouse leave event
      >
        {photos.map((photo) => (
          <div key={photo.id} className='image-container'>
            {hovered && (
              <div className='icon-container'>
                <FaHeart
                  className={`heart-icon ${photo.isFavorited ? 'favorited' : ''}`} // Conditionally add the 'favorited' class
                  onClick={() => toggleFavorite(photo.id)} // Handle click event and call toggleFavorite
                />
                <FaPlus className='plus-icon' />
              </div>
            )}
            <img
              className='scrimba-images'
              src={photo.url}
              alt="scrimba-react-bootcamp-images"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
