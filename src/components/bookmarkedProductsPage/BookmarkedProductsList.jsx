import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// components
import GridViewListCard from "../GridViewListCard"
import CustomPagination from "../CustomPagination"


const BookmarkedProductsList = () => {
    const { bookmarkedProducts } = useLoaderData()
    // console.log(bookmarkedProducts);
    
    // const { displayedDataFromDB, setDisplayedDataFromDB } = useGlobalContext()

    const [displayedBookmarkedProducts, setDisplayedBookmarkedProducts] = useState(bookmarkedProducts?.length >= 10 ? bookmarkedProducts.slice(0, 9) : bookmarkedProducts)

    // useEffect(() => {
    //     setDisplayedDataFromDB({
    //         totalDataList: bookmarkedProducts,
    //         displayedDataList: bookmarkedProducts?.length >= 10 ? bookmarkedProducts.slice(0, 9) : bookmarkedProducts
    //     })
    // }, [])

    // console.log(displayedDataFromDB);

    return (
        <section className="bookmarked-products-list">
            {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
                <>
                    <div className="row">
                        {displayedBookmarkedProducts.map(bookmarkedProduct => <GridViewListCard key={bookmarkedProduct.productData.id} product={bookmarkedProduct.productData} />
                        )}
                    </div>

                    {(bookmarkedProducts.length >= 10) && (
                        <CustomPagination dataFromDB={bookmarkedProducts} setDisplayedContent={setDisplayedBookmarkedProducts} />
                    )}

                    {/* <div className="row">
                        {displayedDataFromDB?.displayedDataList?.map(bookmarkedProduct => <GridViewListCard key={bookmarkedProduct.productData.id} product={bookmarkedProduct.productData} />
                        )}
                    </div> */}

                    {/* Custom Pagination */}
                    {/* {(bookmarkedProducts.length >= 10) && (
                        <CustomPagination dataFromDB={bookmarkedProducts} setDisplayedContent={setDisplayedDataFromDB} />
                    )} */}
                </>
            ) : (
                <h1 className="text-center fw-bold">
                    You have no Bookmarked Products
                </h1>
            )}
        </section>
    )
}

export default BookmarkedProductsList