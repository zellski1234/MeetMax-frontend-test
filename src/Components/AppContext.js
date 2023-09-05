import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext('');

function AppProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [hovered, setHovered] = useState(false);
  const [favorites, setFavorites] = useState([]); 

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhotos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleFavorite = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorited: !photo.isFavorited };
      }
      return photo;
    });

    setPhotos(updatedPhotos);
    console.log(`Toggled favorite for photo with id ${id}`);
  };

  return (
    <AppContext.Provider value={{ photos, hovered, setHovered, favorites, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
