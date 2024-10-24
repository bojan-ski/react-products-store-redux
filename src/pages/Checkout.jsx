import { useState } from "react"
// components
import BackButtons from "../components/BackButtons"
import PageHeader from "../components/PageHeader"
import OrderCostDetails from "../components/checkoutPage/OrderCostDetails"
import CheckoutForm from "../components/checkoutPage/CheckoutForm"
// modal
import PaymentModalAnimation from "../modal/PaymentModalAnimation"


const Checkout = () => {
  const [togglePaymentModalAnimation, setTogglePaymentModalAnimation] = useState('none')

  return (
    <div className="checkout-page">
      <div className="container">

        <BackButtons backPath='/cart' />

        <PageHeader page='Checkout' />

        <OrderCostDetails />

        <CheckoutForm setTogglePaymentModalAnimation={setTogglePaymentModalAnimation} />

        {togglePaymentModalAnimation == 'block' && <PaymentModalAnimation />}
      </div>
    </div>
  )
}

export default Checkout