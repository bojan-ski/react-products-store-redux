import React from "react";
import { Link } from "react-router-dom";
// components
import CompareProductsOption from "./productCard/CompareProductsOption";
import BookmarkProductOption from "./productCard/BookmarkProductOption";
// react-icons
import { TiStarFullOutline } from "react-icons/ti";


const GridViewListCard = ({ product }) => {
    const { id, brand, category, price, rating, thumbnail, title } = product

    return (
        <div className="col-12 col-lg-6 col-xl-4 mb-4">
            <div className="card-details rounded rounded-4 p-3 h-100">

                <div className="card-details-btn-container mb-3 pb-2 border-bottom d-flex align-items-center justify-content-between">
                    <CompareProductsOption product={product} />

                    <BookmarkProductOption product={product} />
                </div>

                <div className="card-details-header text-center mb-4">
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
                </div>

                <div className="card-details-footer d-flex justify-content-between align-items-center">
                    <Link to={`${id}`} className="btn btn-orange-hover fw-bold">
                        See details
                    </Link>

                    <div className="d-flex justify-content-between align-items-center">
                        <TiStarFullOutline size={25} fill="orangered" />
                        <p className="mb-0 fw-bold ms-1">
                            {rating}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridViewListCard