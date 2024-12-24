import React from 'react'
import { Link } from 'react-router-dom'
// redux
import { useSelector } from 'react-redux';
// react-icons
import { IoCartOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";


const CartPageLink = () => {
    const cart = useSelector(store => store.cart) 

    return (
        <Link to='/cart' className='cart-page-link btn text-white fw-bold mx-5 px-4'>
            {cart.cartItemsList.length > 0 ? <IoCart size={40}/> : <IoCartOutline size={40}/>}           
        </Link>
    )
}

export default CartPageLink