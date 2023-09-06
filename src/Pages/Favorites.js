// Favorites.js
import React, { useContext } from 'react';
import { AppContext } from '../Components/AppContext';
import { FaHeart } from 'react-icons/fa';

const Favorites = () => {
  const { photos, toggleFavorite } = useContext(AppContext);

  // Filter the photos to display only favorited images
  const favoritePhotos = photos.filter((photo) => photo.isFavorited);

  return (
    <div className='container'>
      <h2>Favorites</h2>
      {favoritePhotos.length === 0 ? (
        <p>You haven't favorited any photos yet.</p>
      ) : (
        <div className='photo-div'>
          {favoritePhotos.map((photo) => (
            <div key={photo.id} className='image-container'>
              <div className='icon-container'>
                <FaHeart
                  className='heart-icon favorited'
                  onClick={() => toggleFavorite(photo.id)} // Remove from favorites when clicked
                />
              </div>
              <Image img={photo} className='scrimba-images' />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Image = ({ img, className }) => {
  return (
    <img
      className={className}
      src={img.url}
      alt="scrimba-react-bootcamp-images"
    />
  );
};

export default Favorites;
