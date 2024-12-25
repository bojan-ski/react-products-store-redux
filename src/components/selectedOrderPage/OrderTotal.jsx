import React from "react"


const OrderTotal = ({ selectedOrderDetails }) => {
    const shippingFee = (selectedOrderDetails?.grandTotal - selectedOrderDetails?.orderDetails?.orderCost) > 0 ? (selectedOrderDetails?.grandTotal - selectedOrderDetails?.orderDetails?.orderCost).toFixed(2) : 0

    return (
        <>
            <h4 className="text-center fw-bold mb-4">
                Cost details
            </h4>

            <div className="order-cost-details py-3 px-4 rounded rounded-4 text-start">

                <div className="border-bottom pb-3 mb-3">
                    <p className="fw-bold text-muted mb-1">
                        Order created:
                    </p>
                    <p className="fw-bold mb-0">
                        {selectedOrderDetails?.orderCreated}
                    </p>
                </div>

                <div className="border-bottom pb-3 mb-3">
                    <p className="fw-bold text-muted mb-1">
                        Order cost:
                    </p>
                    <p className="fw-bold mb-0">
                        $ {selectedOrderDetails?.orderDetails?.orderCost}
                    </p>
                </div>

                <div className="border-bottom pb-3 mb-3">
                    <p className="fw-bold text-muted mb-1">
                        Shipping fee:
                    </p>
                    <p className="fw-bold mb-0">
                        $ {shippingFee}
                    </p>
                </div>

                <div>
                    <p className="fw-bold mb-1">
                        Grand Total:
                    </p>
                    <p className="fw-bold mb-0">
                        $ {selectedOrderDetails?.grandTotal}
                    </p>
                </div>

            </div>
        </>
    )
}

export default OrderTotal