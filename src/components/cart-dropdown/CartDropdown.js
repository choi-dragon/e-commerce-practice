import React from "react";
import CustomButton from "../custom-button/CustomButton";
import { createStructuredSelector } from "reselect";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import CartItem from "../cart-item/CartItem";
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { selectCartItems } from "../../redux/cart/cart.selectors";
const CartDropdown = ({ cartItems ,history, dispatch}) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? ( // if the cartItems is false or 0 it will return the CartItem. If not it will return the span.
					cartItems.map((cartItem, index) => {
						return <CartItem key={index} item={cartItem} />;
					})
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
			onClick={()=>{
				history.push('/checkout')
				dispatch(toggleCartHidden()) // when mapDispatchToProps is not provided the connect(), locate at the buttom, passes the dispatch as a prop. So the dispatch can be passed in as a prop and used as a function.
			}}
			>GO TO CHECKOUT</CustomButton>
		</div>
	);
};
// ---------------------without using selector------------------//
// const mapStateToProps = ({ cart: { cartItems } }) => {
// 	return { cartItems };
// };
//---------------------using selector--------------------------//
//ver 1
// const mapStateToProps = (state) => {
// 	return { cartItems:selectCartItems(state) };
// };
//---------------------using selector--------------------------//
//ver 2
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); // this is again wrapped inside withRouter because you want access to the history properties. 
