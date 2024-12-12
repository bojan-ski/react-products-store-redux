// redux
import { useSelector } from "react-redux";
// component
import GridViewListCard from "../GridViewListCard";
import Pagination from "../Pagination";


const ProductsList = ({ currentPageNumber, setCurrentPageNumber }) => {
    const { productsList, availableProducts } = useSelector(state => state.products)

    return (
        <>
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

            {availableProducts > 12 && <Pagination currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />}
        </>
    )
}

export default ProductsList