import React, { useState } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../features/cart/cartSlice"
// api func
import submitOrder from "../../api/submitOrder"
// components
import CreditCardDetails from "./CreditCardDetails"
import ShippingDetails from "./ShippingDetails"
// toastify
import { toast } from "react-toastify"


const CheckoutForm = ({ setTogglePaymentModalAnimation }) => {
    const navigate = useNavigate()
    const userShippingDetails = useLoaderData()

    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        nameOnCard: '',
        cardNumber: '',
        secureCode: '',
        cardExpires: ''
    });
    const [shippingDetails, setShippingDetails] = useState({
        streetAddress: '',
        city: '',
        zip: '',
        state: ''
    });

    const handleSetShippingDetails = () => {
        setShippingDetails({
            streetAddress: userShippingDetails ? userShippingDetails.ShippingDetailsData.streetAddress : '',
            city: userShippingDetails ? userShippingDetails.ShippingDetailsData.city : '',
            zip: userShippingDetails ? userShippingDetails.ShippingDetailsData.zip : '',
            state: userShippingDetails ? userShippingDetails.ShippingDetailsData.state : '',
        })
    }

    const handleClearFormsData = () => {
        if (window.confirm('Are you sure you want to clear the form?')) {
            setIsLoading(true)

            setCardDetails({
                nameOnCard: '',
                cardNumber: '',
                secureCode: '',
                cardExpires: ''
            })

            setShippingDetails({
                streetAddress: '',
                city: '',
                zip: '',
                state: ''
            })

            setIsLoading(false)
        }
    }

    const handleSubmitOrderDetails = async e => {
        e.preventDefault()

        if (window.confirm('Place Order?')) {
            setIsLoading(true)

            const orderFormsData = {
                orderDetails: cart,
                grandTotal: cart.gradTotal,
                orderStatus: 'pending',
                cardDetails,
                shippingDetails
            }

            const response = await submitOrder(user, orderFormsData)

            if (response) {
                setTogglePaymentModalAnimation('block')

                setTimeout(() => {
                    dispatch(clearCart())
                    setTogglePaymentModalAnimation('none')

                    //success message
                    toast.success('Your order has been submitted');

                    // redirect user 
                    navigate('/profile')
                }, 5000)
            } else {
                //error message
                toast.error('There was an error, please try again')
            }

            setIsLoading(false)
        }
    }

    const handleCancelOrder = () => {
        if (window.confirm('Are you sure You want to cancel the order')) {
            setIsLoading(true)

            dispatch(clearCart())

            setIsLoading(false)

            // success message
            toast.success('Your order has been canceled');

            // redirect user
            navigate('/products')
        }
    }

    return (
        <section className="checkout-form box-shadow-custom p-3">
            <form onSubmit={handleSubmitOrderDetails}>

                <div className="row">
                    {/* row item 1 */}
                    <section className="col-12 col-md-6 mb-3">
                        <CreditCardDetails cardDetails={cardDetails} setCardDetails={setCardDetails} />
                    </section>

                    {/* row item 2 */}
                    <section className="col-12 col-md-6 mb-3">
                        <ShippingDetails shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} />
                    </section>
                </div>

                <div className="checkout-btn-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                            <button type="button" className="btn btn-warning text-white fw-bold me-2" onClick={handleSetShippingDetails} disabled={isLoading}>
                                Use Shipping Details
                            </button>

                            <button type="button" className='btn btn-danger fw-bold' onClick={handleClearFormsData} disabled={isLoading}>
                                Clear Form
                            </button>
                        </div>

                        <div className="col-12 col-lg-6 text-start text-lg-end">
                            <button type="submit" className="btn btn-success fw-bold me-2" disabled={isLoading}>
                                Place Order
                            </button>

                            <button type="button" className='btn btn-danger fw-bold' onClick={handleCancelOrder} disabled={isLoading}>
                                Cancel Order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CheckoutForm