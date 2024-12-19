import React, { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
// redux
import { useSelector } from 'react-redux'
// api
import saveBookmarkProductToFirebase from '../../api/saveBookmarkProductToFirebase'
import fetchBookmarkedProductsToFirebase from '../../api/fetchBookmarkedProductsToFirebase'
import removeBookmarkProductFromFirebase from '../../api/removeBookmarkProductFromFirebase'
// react-icons
import { FaBookmark } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
// toastify
import { toast } from 'react-toastify'


const BookmarkProductOption = ({ product }) => {
    const navigate = useNavigate()
    const { bookmarkedProducts } = useLoaderData()

    const { userID } = useSelector(store => store.user)

    const [bookmarkedProductsList, setBookmarkedProductsList] = useState(bookmarkedProducts)

    const handleSaveBookmarkProduct = async (userID, product) => {
        if (!userID) return navigate('/login')

        const response = await saveBookmarkProductToFirebase(userID, product)

        if (response) {
            const updatedBookmarkedProductsList = await fetchBookmarkedProductsToFirebase()
            setBookmarkedProductsList(updatedBookmarkedProductsList)

            // success message
            toast.success('Product has been bookmarked')
        } else {
            // success message
            toast.error('There was a problem with the bookmark feature')
        }
    }

    const handleRemoveBookmarkProduct = async (id) => {
        const bookmarkedProduct = bookmarkedProductsList.filter(selectedProduct => selectedProduct.productData.id == id)

        const response = await removeBookmarkProductFromFirebase(userID, bookmarkedProduct[0].docID)

        if (response) {
            const updatedBookmarkedProductsList = await fetchBookmarkedProductsToFirebase()
            setBookmarkedProductsList(updatedBookmarkedProductsList)

            // success message
            toast.success('Bookmark has been removed')
        } else {
            // success message
            toast.error('There was a problem with removing the bookmark')
        }
    }

    const isBookmarked = bookmarkedProductsList !== null && bookmarkedProductsList.some(selectedProduct => selectedProduct.productData.id == product.id)

    return (
        <>
            {isBookmarked ? (
                <button className="btn" onClick={() => handleRemoveBookmarkProduct(product.id)}>
                    <FaBookmark size={30} fill="orangered" />
                </button>
            ) : (
                <button className="btn" onClick={() => handleSaveBookmarkProduct(userID, product)}>
                    <FaRegBookmark size={30} fill="orangered" />
                </button>
            )}
        </>
    )
}

export default BookmarkProductOption