import React from "react";
import { useLoaderData } from "react-router-dom";
// components
import BackButton from "../components/BackButton";
import BookmarkedProductsContainer from "../components/bookmarkedProductsPage/BookmarkedProductsContainer";
import PageMsg from "../components/PageMsg";


const BookmarkedProducts = () => {
  const { bookmarkedProducts } = useLoaderData()

  return (
    <div className="bookmarked-products-page">
      <div className="container">

        <BackButton backPath='/profile' />

        {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
          <BookmarkedProductsContainer bookmarkedProducts={bookmarkedProducts} />
        ) : (
          <PageMsg text="You have no Bookmarked Products" />
        )}
      </div>
    </div>
  )
}

export default BookmarkedProducts