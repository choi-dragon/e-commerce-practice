import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import {selectCartItems} from '../../redux/cart/cart.selectors'
const CartDropdown = ({cartItems}) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{
				cartItems.map((cartItem,index)=>{
					return(<CartItem key={index} 
					item={cartItem}
					/>)
				})
			}</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};
// ---------------------without using selector------------------//
// const mapStateToProps = ({ cart: { cartItems } }) => {
// 	return { cartItems };
// };
//---------------------using selector--------------------------//
const mapStateToProps = (state) => {
	return { cartItems:selectCartItems(state) };
};

export default connect(mapStateToProps)(CartDropdown);
