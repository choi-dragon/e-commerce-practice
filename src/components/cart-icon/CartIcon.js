import React from 'react'
import './CartIcon.scss'
import {ReactComponent as ShoppingIcon} from '../cart-icon/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
const CartIcon =({toggleCartHidden})=>{
    return(
        <div className='cart-icon'>
            <ShoppingIcon 
            onClick={toggleCartHidden}
            className='shopping-icon'/>
            <span
            className='item-count'
            >0</span>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{toggleCartHidden:()=>dispatch(toggleCartHidden())}
}

export default connect(null,mapDispatchToProps)(CartIcon)