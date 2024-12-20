import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import { updateCart, removeProductFromCart } from "../../features/cart/cartSlice";
// react-icons
import { MdDeleteForever } from "react-icons/md";
// toastify
import { toast } from "react-toastify";


const CartItem = ({ cartItem }) => {
    const { id, thumbnail, title, category, price, quantity, totalPrice } = cartItem;

    const { isLoading } = useSelector(store => store.cart)
    const dispatch = useDispatch()

    const handleUpdatedCart = e => {
        e.preventDefault()

        const updatedQuantity = +e.target.value
        dispatch(updateCart({ productID: id, updatedQuantity }))

        // success message
        toast.success('Cart updated')
    }

    const handleRemoveProduct = () => {
        if (window.confirm('Are you sure you want to remove product?')) {

            dispatch(removeProductFromCart({ productID: id }))

            // success message
            toast.success('Product removed from cart')
        }
    }

    return (
        <div className="col-12 mb-3">
            <div className="cart-item-details rounded rounded-4 p-3">
                <div className="row align-items-center">

                    {/* row item 1 */}
                    <div className="col-2 d-none d-md-block">
                        <img src={thumbnail} alt={title} className="img-fluid" />
                    </div>

                    {/* row item 2 */}
                    <div className="col-5 col-md-4">
                        <p className="d-none d-md-block">
                            {category}
                        </p>
                        <h6 className="fw-bold mb-3">
                            {title}
                        </h6>
                        <p className="fw-bold mb-0">
                            ${price}
                        </p>
                    </div>

                    {/* row item 3 */}
                    <div className="col-2">
                        <select className="form-select" value={quantity} onChange={handleUpdatedCart} disabled={isLoading}>
                            {Array.from({ length: 10 }, (_, idx) => {
                                const amount = idx + 1

                                return (
                                    <option key={amount} value={amount}>
                                        {amount}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    {/* row item 4 */}
                    <div className="col-2">
                        <p className='fw-bold text-center mb-0'>
                            $ {totalPrice.toFixed(2)}
                        </p>
                    </div>

                    {/* row item 5 */}
                    <div className="col-2 text-center">
                        <button className="btn btn-danger" onClick={handleRemoveProduct} disabled={isLoading}>
                            <MdDeleteForever size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem