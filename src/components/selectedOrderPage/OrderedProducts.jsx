const OrderedProducts = ({ orderDetails }) => {
    return (
        <>
            <h2 className="text-center mb-4">Ordered Products</h2>

            <section>
                {orderDetails.cartItemsList.map(product => {
                    const { id, title, thumbnail, quantity, price, totalPrice } = product

                    return <div key={id} className="ordered-product-details bg-info rounded rounded-4 p-2 mb-2">
                        <div className="row align-items-center">

                            {/* row item 1 */}
                            <div className="col-2">
                                <img src={thumbnail} alt={title} className="img-fluid" />
                            </div>

                            {/* row item 2 */}
                            <div className="col-5 col-sm-6">
                                <h6 className="fw-bold">
                                    {title}
                                </h6>
                                <h6 className="mb-0">
                                    ${price}
                                </h6>
                            </div>

                            {/* row item 3 */}
                            <div className="col-5 col-sm-4">
                                <h6 className="fw-bold">
                                    Quantity: {quantity}
                                </h6>
                                <h6 className="mb-0">
                                    ${totalPrice}
                                </h6>
                            </div>
                        </div>
                    </div>
                })}
            </section>
        </>
    )
}

export default OrderedProducts