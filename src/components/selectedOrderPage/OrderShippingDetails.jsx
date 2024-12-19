import React from "react"


const OrderShippingDetails = ({ shippingDetails }) => {
    return (
        <>
            <h4 className="text-center fw-bold mb-4">
                Shipping details
            </h4>

            <div className="shipping-details py-3 px-4 rounded rounded-4">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-6">
                        <p className="fw-bold text-muted mb-1">
                            Street address:
                        </p>
                        <p className="fw-bold mb-2 pb-2 border-bottom">
                            {shippingDetails.streetAddress}
                        </p>
                        <p className="fw-bold text-muted mb-1">
                            City:
                        </p>
                        <p className="fw-bold mb-1">
                            {shippingDetails.city}
                        </p>
                    </div>

                    {/* row item 1 */}
                    <div className="col-6">
                        <p className="fw-bold text-muted mb-1">
                            ZIP:
                        </p>
                        <p className="fw-bold mb-2 pb-2 border-bottom">
                            {shippingDetails.zip.toUpperCase()}
                        </p>
                        <p className="fw-bold text-muted mb-1">
                            State:
                        </p>
                        <p className="fw-bold mb-1">
                            {shippingDetails.state}
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderShippingDetails