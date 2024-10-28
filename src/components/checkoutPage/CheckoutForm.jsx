import { useState } from "react"
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

    const [cardDetails, setCardDetails] = useState({
        nameOnCard: '',
        cardNumber: '',
        secureCode: '',
        cardExpires: ''
    })

    const [shippingDetails, setShippingDetails] = useState({
        streetAddress: '',
        city: '',
        zip: '',
        state: ''
    })

    const handleSetShippingDetails = () => {
        setShippingDetails({
            streetAddress: userShippingDetails ? userShippingDetails.ShippingDetailsData.streetAddress : '',
            city: userShippingDetails ? userShippingDetails.ShippingDetailsData.city : '',
            zip: userShippingDetails ? userShippingDetails.ShippingDetailsData.zip : '',
            state: userShippingDetails ? userShippingDetails.ShippingDetailsData.state : '',
        })
    }

    const handleClearFormsData = () => {
        if (window.confirm('Are you sure you want to clear form data?')) {
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
        }
    }

    const handleSubmitOrderDetails = async e => {
        e.preventDefault()

        if (window.confirm('Place Order?')) {
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
            }
        }
    }

    const handleCancelOrder = () => {
        if (window.confirm('Are you sure You want to cancel the order')) {
            dispatch(clearCart())  
            
            // success message
            toast.success('Your order has been canceled');

            // redirect user
            navigate('/')
        }
    }

    return (
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
                <div className="d-flex justify-content-between mb-3">
                    <button type="button" className="btn btn-primary" onClick={handleSetShippingDetails}>
                        Use Set Shipping Details
                    </button>

                    <button type="button" className='btn btn-warning px-3 py-2' onClick={handleClearFormsData}>
                        Clear Form
                    </button>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-success">
                        Proceed
                    </button>

                    <button type="button" className='btn btn-danger px-3 py-2' onClick={handleCancelOrder}>
                        Cancel Order
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm