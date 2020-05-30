import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe=price*100
    const publishableKey='pk_test_dvigPvZTi3h8Xf5bXTaBZk5C00EQVqtP7b'
    const onToken = (token)=>{
        console.log(token)
        alert('Payment Successful')
    }
    return (
    <StripeCheckout 
    label='Check Out'
    name='Lupo'
    billingAddress
    shippingAddress
    description={`Your total is $${price}`}
    amount={priceForStripe}
    image='https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?cs=srgb&dl=panda-printed-paper-coffee-cup-on-table-885021.jpg&fm=jpg'
    panelLabel='Check Out'
    token={onToken}
    stripeKey={publishableKey}
    />
    
    )}

export default StripeCheckoutButton