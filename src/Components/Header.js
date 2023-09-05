import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";


export const Header = () => {
  return (
	<div id='header-container'>
		<h1>Page Header</h1>
		<nav>
			<div id='pic-some-container'>
				<Link to="/">Pic Some</Link>
			</div>
			<div id='cart-container'>
				<Link to="/cart"> <AiOutlineShoppingCart className='cart-icon'/> Cart</Link>
			</div>
		</nav>
	</div>
  )
}
