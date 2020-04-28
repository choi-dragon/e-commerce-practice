import CartActionTypes from './cart.types'

export const toggleCartHidden=()=>{
    return {type:CartActionTypes.TOGGLE_CART_HIDDEN}
    //payload:""  this is not needed as all we need its a boolean value
}
