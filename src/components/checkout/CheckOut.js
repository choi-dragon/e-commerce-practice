import React from 'react'
import './CheckOut.scss'
import {connect} from 'react-redux'// this required when using redux states
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckOutItem from './CheckOutItem'
import StripeCheckoutButton from '../stripe-button/StripeCheckout'
function CheckOut({cartItems, total}){ 
    console.log(cartItems)
    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem, index)=>{
                    return <CheckOutItem key={index} cartItem={cartItem}/>
                })
            }
            <div className='total'>
        <span>Total: ${total}</span>
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckOut)