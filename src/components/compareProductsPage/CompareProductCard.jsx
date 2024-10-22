import { Link } from "react-router-dom"

const CompareProductCard = ({ product }) => {
    const { id, availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = product

    return (
        <div className="col-12 col-lg-6 mb-4">
            <div className="card-details rounded rounded-4 p-3">

                <div className="card-details-header text-center mb-2">
                    <img src={thumbnail} alt={title} className="img-fluid" />
                </div>

                <div className="card-details-body mb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-0">
                            {category}
                        </p>
                        {brand && (
                            <p className="mb-0">
                                {brand}
                            </p>
                        )}
                    </div>
                    <h5 className="fw-bold">
                        {title}
                    </h5>
                    <h5>
                        ${price}
                    </h5>
                    <h6 className="text-muted">
                        {description}
                    </h6>
                </div>

                <div className="card-details-footer d-flex justify-content-between align-items-center">
                    <Link to={`${id}`} className="btn btn-success fs-5">
                        See details
                    </Link>
                    <h5 className={`fw-bold mb-0 ${availabilityStatus == "In Stock" ? 'text-success' : 'text-danger'}`}>
                        {availabilityStatus}
                    </h5>
                    <h5 className="mb-0">
                        <span className="me-1">⭐</span>
                        {rating}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default CompareProductCard