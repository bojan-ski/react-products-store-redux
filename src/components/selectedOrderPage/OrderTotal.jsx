const OrderTotal = ({ selectedOrderDetails, orderDetails }) => {
    return (
        <>
            <h2 className="text-center fw-bold mb-4">TOTAL cost</h2>

            <section>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold text-muted">
                            Order created
                        </p>
                        <p className="fw-bold capitalize">
                            {selectedOrderDetails.orderCreated}
                        </p>
                        <p className="fw-bold text-muted">
                            Total Quantity
                        </p>
                    </div>

                    {/* row item 2 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold capitalize">
                            {orderDetails.totalQuantity}
                        </p>
                        <p className="fw-bold text-muted">
                            Grand Total
                        </p>
                        <p className="fw-bold capitalize">
                            $ {selectedOrderDetails.grandTotal}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderTotal