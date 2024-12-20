import React from "react";
// redux
import { useSelector } from "react-redux";
// components
import CartItem from "./CartItem";


const CartItemsList = () => {
    const { cartItemsList } = useSelector(store => store.cart)   

    return (
        <div className="row">
            {cartItemsList?.map(cartItem => {              
                return <CartItem key={cartItem.id} cartItem={cartItem} />
            })}
        </div>
    )
}

export default CartItemsList