import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../features/cart/cartSlice'
// toastify
import { toast } from 'react-toastify'


const CartCostDetails = () => {
    const navigate = useNavigate()

    const { isLoading, cartItemsList, totalQuantity, shipping, orderCost, gradTotal } = useSelector(store => store.cart)
    const { userName } = useSelector(store => store.user)
    const dispatch = useDispatch()

    const handleClearCart = () => {
        if (window.confirm('Are you sure You want to clear the cart')) {
            dispatch(clearCart())   
            
            // success message
            toast.success('Cart has been emptied.');

            // redirect user
            navigate('/')
        }
    }    

    return (
        <div className='cart-cost-details px-4 py-3 rounded rounded-4'>
            <h4 className='text-center fw-bold mb-3'>
                Order cost
            </h4>

            <div className="row border-bottom pb-2 mb-3">

                {/* row item 1 */}
                <div className="col-12 col-md-6">
                    <p className='mb-1 fw-bold'>
                        Num of products:
                    </p>
                    <p className='fw-bold'>
                        {cartItemsList.length}
                    </p>
                </div>

                {/* row item 2 */}
                <div className="col-12 col-md-6">
                    <p className='mb-1 fw-bold'>
                        Total Quantity:
                    </p>
                    <p className='fw-bold'>
                        {totalQuantity}
                    </p>
                </div>
                {/* row item 3 */}
                <div className="col-12 col-md-6">
                    <p className='mb-1 fw-bold'>
                        Order Cost:
                    </p>
                    <p className='fw-bold'>
                        $ {orderCost}
                    </p>
                </div>
                {/* row item 4 */}
                <div className="col-12 col-md-6">
                    <p className='mb-1 fw-bold'>
                        Shipping Cost:
                    </p>
                    <p className='fw-bold'>
                        + {shipping}%
                    </p>
                </div>
            </div>

            <div className="grand-total text-center mb-4">
                <h5 className='fw-bold'>
                    Grand Total:
                </h5>
                <h5 className='fw-bold'>
                    $ {gradTotal}
                </h5>
            </div>

            <div className="cart-cost-btn-container d-flex justify-content-between">
                {userName ? (
                    <Link to='/checkout' className='btn btn-success px-3 py-2 fw-bold'>
                        Checkout
                    </Link>
                ) : (
                    <Link to='/login' className='btn-success onboarding-btn btn me-3 fw-bold'>
                        Sign In
                    </Link>
                )}
                <button className='btn btn-danger px-3 py-2 fw-bold' onClick={handleClearCart} disabled={isLoading}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default CartCostDetails