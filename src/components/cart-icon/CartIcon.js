import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../cart-icon/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon">
			<ShoppingIcon
				onClick={toggleCartHidden}
				className="shopping-icon"
			/>
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

//--------------Without using selector-----------------------------//
// const mapStateToProps = ({ cart: { cartItems } }) => {
// 	return {
// 		itemCount: cartItems.reduce((totalQuantity, cartItem) => {
// 			return totalQuantity + cartItem.quantity;
// 		}, 0),
// 	};
// };
//------------------------using selector--------------------------//
const mapStateToProps = (state)=>({ itemCount:selectCartItemsCount(state)})


const mapDispatchToProps = (dispatch) => {
	return { toggleCartHidden: () => dispatch(toggleCartHidden()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
