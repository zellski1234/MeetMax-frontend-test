import React, { useContext, useState } from 'react';
import { AppContext } from '../Components/AppContext';
import { BiTrash, BiTrashAlt } from 'react-icons/bi';

function Cart() {
  // Use the useContext hook to access the app context and retrieve cartItems, removeFromCart, and clearCart functions
  const { cartItems, removeFromCart, clearCart } = useContext(AppContext);

  // State variables to manage button text and order placement state
  const [buttonText, setButtonText] = useState('Place Order'); // Initial button text
  const [isPlacingOrder, setIsPlacingOrder] = useState(false); // State to track whether an order is being placed

  // State variable to track whether the trash can icon is hovered for each item
  const [isTrashIconHovered, setIsTrashIconHovered] = useState(Array(cartItems.length).fill(false));

  // Function to calculate the total cost of items in the cart
  const calculateTotalCost = () => {
	const itemPrice = 5.99; // Price per item
	return (cartItems.length * itemPrice).toFixed(2); // Calculate the total cost and format it to two decimal places
  };

  // Function to handle the place order button click
  const placeOrder = () => {
	// Change button text and set isPlacingOrder to true to indicate order placement
	setButtonText('Ordering...');
	setIsPlacingOrder(true);

	// Calculate the total cost
	const totalCost = calculateTotalCost();

	// Simulate placing an order with a delay
	setTimeout(() => {
	  // Reset button text and set isPlacingOrder to false to indicate order completion
	  setButtonText('Place Order');
	  setIsPlacingOrder(false);

	  // Log "Order Placed" along with the total cost to the console
	  console.log(`Order Placed. Total Cost: $${totalCost}`);

	  // Display an alert in the browser with the total cost
	  alert(`Order Placed. Total Cost: $${totalCost}`);

	  // Clear the cart by invoking the clearCart function from the context
	  clearCart();
	}, 3000); // 3 seconds delay for simulation
  };

  return (
	<div className='container'>
	  <h2>Cart</h2>
	  {cartItems.length === 0 ? (
		// Display a message if the cart is empty
		<p>Your cart is empty.</p>
	  ) : (
		<div>
		  {cartItems.map((item, index) => (
			// Map through the items in the cart and display each item
			<div key={item.id} className='cart-item'>
			  <img src={item.url} alt={`item-${item.id}`} className='cart-item-image' />
			  <div className='cart-item-details'>
				<span className='cart-item-title'>Image No.{item.id}</span>
				<span className='cart-item-price'>$5.99</span>
				<div
				  className='cart-item-remove'
				  onMouseEnter={() => {
					const updatedHoveredStates = [...isTrashIconHovered];
					updatedHoveredStates[index] = true;
					setIsTrashIconHovered(updatedHoveredStates);
				  }}
				  onMouseLeave={() => {
					const updatedHoveredStates = [...isTrashIconHovered];
					updatedHoveredStates[index] = false;
					setIsTrashIconHovered(updatedHoveredStates);
				  }}
				  onClick={() => removeFromCart(item.id)} // Add an onClick handler to remove the item from the cart
				>
				  {isTrashIconHovered[index] ? <BiTrash /> : <BiTrashAlt />}
				</div>
			  </div>
			</div>
		  ))}
		  <div className='cart-total'>
			<span>Total: ${calculateTotalCost()}</span>
			<button
			  className='place-order-button'
			  onClick={placeOrder} // Attach the placeOrder function to the button click event
			  disabled={isPlacingOrder} // Disable the button while placing an order
			>
			  {/* Conditionally display button text based on order placement state */}
			  {isPlacingOrder ? 'Ordering...' : buttonText}
			</button>
		  </div>
		</div>
	  )}
	</div>
  );
}

export default Cart;
