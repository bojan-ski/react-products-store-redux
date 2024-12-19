import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
// components
import PageHeader from "../PageHeader"
import GridViewListCard from "../GridViewListCard"
import CustomPagination from "../CustomPagination"


const BookmarkedProductsList = () => {
    const { bookmarkedProducts } = useLoaderData()

    const [displayedBookmarkedProducts, setDisplayedBookmarkedProducts] = useState(bookmarkedProducts?.length >= 10 ? bookmarkedProducts.slice(0, 9) : bookmarkedProducts)

    return (
        <section className="bookmarked-products-list">
            {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
                <>
                    <PageHeader page="Bookmarked Products" />
                    
                    <div className="row">
                        {displayedBookmarkedProducts.map(bookmarkedProduct => <GridViewListCard key={bookmarkedProduct.productData.id} product={bookmarkedProduct.productData} />
                        )}
                    </div>

                    {(bookmarkedProducts.length >= 10) && (
                        <CustomPagination dataFromDB={bookmarkedProducts} setDisplayedContent={setDisplayedBookmarkedProducts} />
                    )}
                </>
            ) : (
                <h1 className="text-center fw-bold mt-5">
                    You have no Bookmarked Products
                </h1>
            )}
        </section>
    )
}

export default BookmarkedProductsList