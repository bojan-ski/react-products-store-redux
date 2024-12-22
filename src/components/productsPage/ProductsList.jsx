import React from "react";
// redux
import { useSelector } from "react-redux";
// component
import GridViewListCard from "../GridViewListCard";
import Pagination from "../Pagination";


const ProductsList = () => {
    const { isLoading, productsList, availableProducts, updatedURL, productsLimit, productsSkipNumber, currentPageNumber } = useSelector(state => state.products)

    return (
        <>
            <section className="products-list mb-3">
                <h4 className="text-center fw-bold mb-4">
                    {availableProducts} products available
                </h4>

                <div className="row">
                    {!productsList || productsList.length == 0 ? (
                        <h1>No products available</h1>
                    ) : (
                        productsList?.map(product => <GridViewListCard key={product.id} product={product} />)
                    )}
                </div>
            </section>

            {availableProducts > productsLimit && <Pagination
                isLoading={isLoading}
                availableProducts={availableProducts}
                updatedURL={updatedURL}
                productsLimit={productsLimit}
                productsSkipNumber={productsSkipNumber}
                currentPageNumber={currentPageNumber}
            />}
        </>
    )
}

export default ProductsList