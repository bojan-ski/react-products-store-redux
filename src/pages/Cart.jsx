import React from "react";
// redux
import { useSelector } from "react-redux";
// components
import PageHeader from "../components/PageHeader";
import CartItemsList from "../components/cartPage/CartItemsList";
import CartCostDetails from "../components/cartPage/CartCostDetails";
import PageMsg from "../components/PageMsg";


const Cart = () => {
    const { cartItemsList } = useSelector(state => state.cart)

    return (
        <div className="cart-page">

            <PageHeader page='Cart' />

            <div className="container">

                {cartItemsList && cartItemsList.length > 0 ? (
                    <div className="row">

                        {/* row item 1 */}
                        <section className="col-12 col-lg-8 ">
                            <CartItemsList />
                        </section>

                        {/* row item 2 */}
                        <section className="col-12 col-lg-4">
                            <CartCostDetails />
                        </section>

                    </div>
                ) : (
                    <PageMsg text='Your cart is empty'/>
                )}
            </div>
        </div>
    )
}

export default Cart