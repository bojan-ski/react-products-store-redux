import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCompareProductsList, removeProductFromCompareProductsList } from '../features/products/productsSlice'
// context
import { useGlobalContext } from "../context";
// api func
import saveBookmarkProductToFirebase from "../api/saveBookmarkProductToFirebase";
import removeBookmarkProductFromFirebase from "../api/removeBookmarkProductFromFirebase";
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase";
// toastify
import { toast } from "react-toastify";


const GridViewListCard = ({ product }) => {
    const { id, brand, category, price, rating, thumbnail, title } = product

    const { isLoading, compareProductsList } = useSelector(store => store.compareProducts)
    const dispatch = useDispatch()

    const { userProfileDetails } = useGlobalContext()

    const handleAddProductToCompareProductsList = () => {
        if (compareProductsList.length > 1) {
            return toast.warning('Only two products can be compared')
        } else {
            dispatch(addProductToCompareProductsList(product))

            // success message
            toast.success('Product added to compare list')
        }
    }

    const handleRemoveProductFromCompareProductsList = (id) => {
        dispatch(removeProductFromCompareProductsList({ productID: id }))

        // success message
        toast.success('Product removed from compare list')
    }

    const isProductInCompareList = compareProductsList && compareProductsList.some(product => product.id === id);


    const navigate = useNavigate()
    const { bookmarkedProducts } = useLoaderData()
    // console.log(bookmarkedProducts);    

    const [bookmarkedProductsList, setBookmarkedProductsList] = useState(bookmarkedProducts)

    const handleSaveBookmarkProduct = async () => {
        // console.log('handleSaveBookmarkProduct');

        if (!userProfileDetails.userID) return navigate('/login')

        await saveBookmarkProductToFirebase(userProfileDetails.userID, product)

        const updatedBookmarkedProductsList = await fetchBookmarkedProductsToFirebase()
        setBookmarkedProductsList(updatedBookmarkedProductsList)
    }

    const handleRemoveBookmarkProduct = async (id) => {
        // console.log('handleRemoveBookmarkProduct');

        const bookmarkedProduct = bookmarkedProductsList.filter(product => product.productData.id == id)

        await removeBookmarkProductFromFirebase(userProfileDetails.userID, bookmarkedProduct[0].docID)

        const updatedBookmarkedProductsList = await fetchBookmarkedProductsToFirebase()
        setBookmarkedProductsList(updatedBookmarkedProductsList)
    }

    const isBookmarked = bookmarkedProductsList !== null && bookmarkedProductsList.some(product => product.productData.id == id)

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card-details rounded rounded-4 p-3">

                <div className="card-details-btn-container mb-3 pb-2 border-bottom d-flex align-items-center justify-content-between">
                    {isProductInCompareList ? (
                        <button className="btn btn-danger" onClick={() => handleRemoveProductFromCompareProductsList(id)} disabled={isLoading}>
                            Remove
                        </button>
                    ) : (
                        <button className="btn btn-warning" onClick={handleAddProductToCompareProductsList} disabled={isLoading}>
                            Compare
                        </button>
                    )}

                    {isBookmarked ? (
                        <button className="btn btn-info" onClick={() => handleRemoveBookmarkProduct(id)}>
                            remove
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleSaveBookmarkProduct}>
                            save
                        </button>
                    )}
                </div>

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
                </div>

                <div className="card-details-footer d-flex justify-content-between align-items-center">
                    <Link to={`${id}`} className="btn btn-success fs-5">
                        See details
                    </Link>
                    <h5 className="mb-0">
                        <span className="me-1">⭐</span>
                        {rating}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default GridViewListCard