import React from 'react';
import './Cart.css'
const Cart = (props) => {
    console.log(props)
    const { cart } = props

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping * product.quantity
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    let grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h2>Order Summary </h2>
            <p>Sellected Items : {quantity}</p>
            <p>Total Price : $ {total} </p>
            <p>Total SHipping : $ {shipping} </p>
            <p>Tax : $ {tax} </p>
            <h4>Grand Total : {grandTotal} </h4>
            {props.children}
        </div>
    );
};

export default Cart;