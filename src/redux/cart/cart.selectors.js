// this uses the npm module called 'reselect' which works similarly as useMemo.
// this module creates selectors which contains reusable state.

import {createSelector} from 'reselect'

const selectCart=state=>{// this is called input selector which form an original array for below selectors to work with. 
    return state.cart
}
//------------this grabs the cartItems state-----------//
export const selectCartItems=createSelector( // this createSelector take two parameters. First is an original array and second is a function that returns value we want out of the original array. So below line takes the cart reducer or state as a orignal array and returns cartItems state only.
    [selectCart],
    (cart)=>{
        return cart.cartItems}
)
//--------------this only grabs the "hidden" state----------//
export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden
)
//------------------Getting only the quantiy-------------//
export const selectCartItemsCount=createSelector(
    // this selector takes in cartItems as an original array and returns only the quantity.
    [selectCartItems],
    cartItems=>{
        return cartItems.reduce((totalQuantity, cartItem) => {
			return totalQuantity + cartItem.quantity;
		}, 0)
    }
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems=>{
        return cartItems.reduce((totalPrice, cartItem)=>{
            return totalPrice + cartItem.quantity*cartItem.price 
        },0)
    }
)