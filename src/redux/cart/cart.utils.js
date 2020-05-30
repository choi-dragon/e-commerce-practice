// ------------- Grouping the cart items by there id --------------//

export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	); // this will go through eact item in the cartItems and find items with matching id.
	if (existingCartItem) {
		// if match is find below lines of code will run
		return cartItems.map((
			cartItem // if match is found, this function will iterate over all items in match convert into one item and store a quantity property which increases based on each number of the same item found.
		) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	); // this will go through eact item in the cartItems and find items with matching id.
	if (existingCartItem.quantity === 1) {
		// if match is find below lines of code will run
		return cartItems.filter((cartItem) => {
			// this returns cartItem that does not match the cartItemToRemove
			return cartItem.id !== cartItemToRemove.id;
		});
	}
	return cartItems.map((
		cartItem // if match is found, this function will iterate over all items in match converting into one item and store a quantity property which decreases as this function is called.
	) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
