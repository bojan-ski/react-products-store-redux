import React from "react"


const OrderCardDetails = ({ cardDetails }) => {
    return (
        <>
            <h4 className="text-center fw-bold mb-4">
                Card details
            </h4>

            <div className="payment-card-details py-3 px-4 rounded rounded-4">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-6">
                        <p className="fw-bold text-muted mb-1">
                            Name on card:
                        </p>
                        <p className="fw-bold mb-2 pb-2 border-bottom">
                            {cardDetails.nameOnCard}
                        </p>
                        <p className="fw-bold text-muted mb-1">
                            Card number:
                        </p>
                        <p className="fw-bold mb-1">
                            {cardDetails.cardNumber}
                        </p>
                    </div>

                    {/* row item 2 */}
                    <div className="col-6">
                        <p className="fw-bold text-muted mb-1">
                            Secure code:
                        </p>
                        <p className="fw-bold mb-2 pb-2 border-bottom">
                            {cardDetails.secureCode}
                        </p>
                        <p className="fw-bold text-muted mb-1">
                            Card expires:
                        </p>
                        <p className="fw-bold mb-1">
                            {cardDetails.cardExpires}
                        </p>
                    </div>

                </div >
            </div>
        </>
    )
}

export default OrderCardDetails