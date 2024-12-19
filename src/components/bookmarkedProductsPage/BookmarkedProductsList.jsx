import React from "react"
// components
import GridViewListCard from "../GridViewListCard"


const BookmarkedProductsList = ({ bookmarkedProduct }) => {
    return (
        <div className="row">
            {bookmarkedProduct?.map(bookmarkedProduct => <GridViewListCard key={bookmarkedProduct.productData.id} product={bookmarkedProduct.productData} />
            )}
        </div>
    )
}

export default BookmarkedProductsList