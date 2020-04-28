// ------------- Grouping the cart items by there id --------------//

export const addItemToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id) // this will go through eact item in the cartItems and find items with matching id.
    if(existingCartItem){ // if match is find below lines of code will run
        return cartItems.map(cartItem=> // if match is found, this function will iterate over all items in match convert into one item and store a quantity property which increases based on each number of the same item found.
            cartItem.id===cartItemToAdd.id
            ?{...cartItem, quantity:cartItem.quantity+1}: cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}