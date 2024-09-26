import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    console.log(cart);
    return (
        <div>
            {
                cart.map(el => (
                    <div>
                        {el.id}-
                        {el.title}-
                        {el.price}
                        <button onClick={()=>dispatch(removeFromCart(el))}>remove</button>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Cart
