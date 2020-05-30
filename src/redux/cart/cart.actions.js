import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => {
	return { type: CartActionTypes.TOGGLE_CART_HIDDEN };
	//payload:""  this is not needed as all we need its a boolean value
};

export const addItem = (item) => {
	return {
		type: CartActionTypes.ADD_ITEM,
		payload: item,
	};
};

export const removeItem = (item) => {
	return {
		type: CartActionTypes.REMOVE_ITEM,
		payload: item,
	};
};

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});
