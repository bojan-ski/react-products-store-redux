import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
// context
import { useGlobalContext } from "../../context";
// component
import Pagination from "../Pagination";
import SearchAndFilter from "./SearchAndFilter";
import GridViewListCard from "../GridViewListCard";

// redux
import { useSelector } from "react-redux";


const ProductsList = () => {
    // const { listOfProductsFromDB } = useLoaderData()
    // const { products, total } = listOfProductsFromDB

    // const { availableProducts, setAvailableProducts, productsList, setProductsList, setUpdatedURL, setCurrentPageNumber } = useGlobalContext()

    // useEffect(() => {
    //     setAvailableProducts(total)
    //     setProductsList(products)
    //     setUpdatedURL('')
    //     setCurrentPageNumber(1)
    // }, [])

    const { productsList, availableProducts } = useSelector(state => state.products)    

    return (
        <>
            <SearchAndFilter />

            <section className="products-list mb-3">
                <h2 className="text-center mb-4">
                    {availableProducts} products available
                </h2>

                <div className="row">
                    {!productsList || productsList.length == 0 ? (
                        <h1>No products available</h1>
                    ) : (
                        productsList?.map(product => <GridViewListCard key={product.id} product={product} />)
                    )}
                </div>
            </section>

            {availableProducts > 12 && <Pagination />}
        </>
    )
}

export default ProductsList