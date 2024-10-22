const OrderShippingDetails = ({ shippingDetails }) => {
    return (
        <>
            <h2 className="text-center mb-4">Shipping details</h2>

            <section>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold text-muted">
                            Street address
                        </p>
                        <p className="fw-bold capitalize">
                            {shippingDetails.streetAddress}
                        </p>
                        <p className="fw-bold text-muted">
                            City
                        </p>
                        <p className="fw-bold capitalize">
                            {shippingDetails.city}
                        </p>
                    </div>

                    {/* row item 2 */}
                    <div className="col-6 text-center">
                        <p className="fw-bold text-muted">
                            ZIP
                        </p>
                        <p className="fw-bold">
                            {shippingDetails.zip.toUpperCase()}
                        </p>
                        <p className="fw-bold text-muted">
                            State
                        </p>
                        <p className="fw-bold capitalize">
                            {shippingDetails.state}
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderShippingDetails