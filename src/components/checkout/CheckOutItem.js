import React from "react";
import "./CheckOutItem.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";

function CheckOutItem({ cartItem, clearItem, addItem, removeItem }) {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img alt="item" src={imageUrl} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span
					onClick={() => {
						return removeItem(cartItem);
					}}
				>
					&#10094;{" "}
				</span>
				{quantity}
				<span
					onClick={() => {
						return addItem(cartItem);
					}}
				>
					{" "}
					&#10095;
				</span>
			</span>
			<span className="price">${price}</span>
			<div
				className="remove-button"
				onClick={() => {
					return clearItem(cartItem);
				}}
			>
				&#10005;
			</div>
		</div>
	);
}
const mapDispatchToProps = (dispatch) => {
	return {
		clearItem: (item) => dispatch(clearItemFromCart(item)),
		addItem: (item) => dispatch(addItem(item)),
		removeItem: (item) => dispatch(removeItem(item)),
	};
};
export default connect(null, mapDispatchToProps)(CheckOutItem);
