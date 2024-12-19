import React from "react";
// components
import BackButton from "../components/BackButton";
import BookmarkedProductsList from "../components/bookmarkedProductsPage/BookmarkedProductsList";


const BookmarkedProducts = () => {
  return (
    <div className="bookmarked-products-page">
      <div className="container">

        <BackButton backPath='/profile' />

        <BookmarkedProductsList />
      </div>
    </div>
  )
}

export default BookmarkedProducts