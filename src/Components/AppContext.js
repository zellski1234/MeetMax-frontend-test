import React, { createContext, useState, useEffect } from 'react';

// Create a context for the app
const AppContext = createContext('');

// Define a component called AppProvider which wraps its children with the context
function AppProvider({ children }) {
	// Define state variables using useState
	const [photos, setPhotos] = useState([]); // Store photo data
	const [hovered, setHovered] = useState(false); // Track hover state
	const [favorites, setFavorites] = useState([]); // Store favorite photos
	const [cartItems, setCartItems] = useState([]); // Add cartItems state

	// Use useEffect to fetch photo data from an external source when the component mounts
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
			.then((response) => response.json())
			.then((data) => {
				console.log(data); // Log fetched data to the console
				setPhotos(data); // Update the photos state with the fetched data
			})
			.catch((error) => {
				console.error('Error fetching data:', error); // Log any fetch errors
			});
	}, []); // Empty dependency array means this effect runs once when the component mounts

	 // Function to add an image to the cart
	 const addToCart = (image) => {
		setCartItems([...cartItems, image]);
	};

		// Function to remove an image from the cart
		const removeFromCart = (id) => {
			const updatedCart = cartItems.filter((item) => item.id !== id);
			setCartItems(updatedCart);
		};

		// Function to clear the cart
		const clearCart = () => {
			setCartItems([]);
		};
	

	// Define a function to toggle the "isFavorited" property of a photo
	const toggleFavorite = (id) => {
		const updatedPhotos = photos.map((photo) => {
			if (photo.id === id) {
				return { ...photo, isFavorited: !photo.isFavorited }; // Toggle "isFavorited"
			}
			return photo; // Return other photos unchanged
		});

		setPhotos(updatedPhotos); // Update the photos state with the modified data
		console.log(`Toggled favorite for photo with id ${id}`); // Log the toggle action
	};

	// Provide the context values to its children
	return (
		<AppContext.Provider value={{ photos, hovered, setHovered, favorites, toggleFavorite, cartItems, addToCart, removeFromCart, clearCart }}>
			{children}
		</AppContext.Provider>
	);
}

// Export the context and AppProvider component
export { AppContext, AppProvider };
