const OrderCardDetails = ({ cardDetails }) => {
    return (
        <>
            <h2 className="text-center mb-4">Card details</h2>

            <section>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold text-muted">
                            Name on card
                        </p>
                        <p className="fw-bold capitalize">
                            {cardDetails.nameOnCard}
                        </p>
                        <p className="fw-bold text-muted">
                            Card number
                        </p>
                        <p className="fw-bold">
                            {cardDetails.cardNumber}
                        </p>
                    </div>

                    {/* row item 2 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold text-muted">
                            Secure code
                        </p>
                        <p className="fw-bold">
                            {cardDetails.secureCode}
                        </p>
                        <p className="fw-bold text-muted">
                            Card expires
                        </p>
                        <p className="fw-bold">
                            {cardDetails.cardExpires}
                        </p>
                    </div>
                </div>


            </section>
        </>
    )
}

export default OrderCardDetails