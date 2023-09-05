import React, { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import { FaHeart, FaPlus } from 'react-icons/fa';

export const Photos = () => {
  const { photos, hovered, setHovered, toggleFavorite } = useContext(AppContext);

  const handleMouseHover = (isHovered) => {
    setHovered(isHovered);
    // console.log(`hovered: ${isHovered}`);
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
                  onClick={() => toggleFavorite(photo.id)} // Call toggleFavorite on click
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
