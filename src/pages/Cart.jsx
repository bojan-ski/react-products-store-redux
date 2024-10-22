// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"
import CartItemsList from "../components/cartPage/CartItemsList"
import CartCostDetails from "../components/cartPage/CartCostDetails"


const Cart = () => {
    const { cartItems } = useGlobalContext()
    // console.log(cartItems);

    return (
        <div className="cart-page">
            <PageHeader page='Cart' />

            <div className="container">

                {cartItems.cartItemsList && cartItems.cartItemsList.length > 0 ? (
                    <div className="row">
                        {/* row item 1 */}
                        <section className="cart-items-details col-12 col-lg-8 ">
                            <CartItemsList />
                        </section>

                        {/* row item 2 */}
                        <section className="cart-cost-details col-12 col-lg-4">
                            <CartCostDetails />
                        </section>
                    </div>
                ) : (
                    <h1 className="text-center">Your cart is empty</h1>
                )}
            </div>
        </div>
    )
}

export default Cart