// context
import { useGlobalContext } from "../../context";
// components
import CartItem from "./CartItem";

const CartItemsList = () => {
    const { cartItems } = useGlobalContext()

    return (
        <div className="row">
            {cartItems.cartItemsList?.map(cartItem => {
                // console.log(cartItem);               
                return <CartItem key={cartItem.id} cartItem={cartItem} />
            })}
        </div>
    )
}

export default CartItemsList