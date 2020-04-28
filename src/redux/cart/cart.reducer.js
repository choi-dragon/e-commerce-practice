import CartActionTypes from "./cart.types";
import {addItemToCart} from './cart.utils'

const INITIAL_STATE = {
	hidden: true,
	cartItems:[]// this state will be used to count the number of added items in cart
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden, // unlike userReducer we do not need a value here but a boolean value.
			};
		case CartActionTypes.ADD_ITEM:
			return{
				...state,
				cartItems:addItemToCart(state.cartItems, action.payload)
			}
		default:
			return state;
	}
};

export default cartReducer