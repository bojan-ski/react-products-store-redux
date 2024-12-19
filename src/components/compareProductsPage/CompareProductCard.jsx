import React from "react"
import { Link } from "react-router-dom"
// react-icons
import { TiStarFullOutline } from "react-icons/ti";


const CompareProductCard = ({ product }) => {
    const { id, availabilityStatus, brand, category, description, price, rating, thumbnail, title } = product

    return (
        <div className="col-12 col-lg-6 mb-4">
            <div className="card-details rounded rounded-4 p-4">

                <div className="card-details-header text-center mb-2">
                    <img src={thumbnail} alt={title} className="img-fluid" />
                </div>

                <div className="card-details-body mb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-0">
                            {category}
                        </p>
                        {brand && (
                            <p className="mb-0 fst-italic">
                                {brand}
                            </p>
                        )}
                    </div>
                    <p className="fw-bold mb-1 fs-5">
                        {title}
                    </p>
                    <p className="fw-bold">
                        ${price}
                    </p>
                    <p>
                        {description}
                    </p>
                </div>

                <div className="card-details-footer d-flex justify-content-between align-items-center">
                    <Link to={`${id}`} className="btn btn-orange-hover fw-bold">
                        See details
                    </Link>

                    <h5 className={`fw-bold mb-0 ${availabilityStatus == "In Stock" ? 'text-success' : 'text-danger'}`}>
                        {availabilityStatus}
                    </h5>

                    <div className="d-flex justify-content-between align-items-center">
                        <TiStarFullOutline size={25} fill="orangered" />
                        <p className="mb-0 fw-bold fs-5 ms-1">
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareProductCard