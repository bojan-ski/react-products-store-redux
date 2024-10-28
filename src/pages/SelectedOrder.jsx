import { redirect, useLoaderData } from "react-router-dom";
// firebase api func
import fetchSelectedOrderDetailsFromFirebase from "../api/fetchSelectedOrderDetailsFromFirebase";
// redux
import { useSelector } from "react-redux";
// components
import BackButtons from "../components/BackButtons";
import PageHeader from "../components/PageHeader";
import OrderedProducts from "../components/selectedOrderPage/OrderedProducts";
import OrderTotal from "../components/selectedOrderPage/OrderTotal";
import OrderCardDetails from "../components/selectedOrderPage/OrderCardDetails";
import OrderShippingDetails from "../components/selectedOrderPage/OrderShippingDetails";


// LOADER
export const loader = async ({ params }) => {
    const selectedOrderDetails = await fetchSelectedOrderDetailsFromFirebase(params.id)

    return selectedOrderDetails
}

const SelectedOrder = () => {
    const selectedOrderDetails = useLoaderData()

    const { userID } = useSelector(state => state.user)

    if (selectedOrderDetails.userID !== userID) {
        redirect('/')
    }

    const { cardDetails, orderDetails, shippingDetails, orderStatus } = selectedOrderDetails

    return (
        <div className="selected-order-page">
            <div className="container">

                <section className="d-flex align-items-center justify-content-between mb-5">
                    <BackButtons backPath='/profile/order-history' />

                    <h5 className={`capitalize fw-bold mb-0 ${orderStatus == 'send' ? 'text-success' : orderStatus == 'cancel' ? 'text-danger' : 'text-warning'}`}>
                        {orderStatus}
                    </h5>
                </section>

                <PageHeader page="Selected Order" />

                <section className="selected-order-details">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-7 mb-4">
                            <OrderedProducts orderDetails={orderDetails} />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-5 mb-4">
                            <OrderTotal selectedOrderDetails={selectedOrderDetails} orderDetails={orderDetails} />
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-md-6 mb-4">
                            <OrderCardDetails cardDetails={cardDetails} />
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 col-md-6 mb-4">
                            <OrderShippingDetails shippingDetails={shippingDetails} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SelectedOrder