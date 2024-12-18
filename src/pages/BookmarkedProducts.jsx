// components
import BackButton from "../components/BackButton";
import PageHeader from "../components/PageHeader";
import BookmarkedProductsList from "../components/bookmarkedProductsPage/BookmarkedProductsList";


const BookmarkedProducts = () => {
  return (
    <div className="bookmarked-products-page">
      <div className="container">

        <BackButton backPath='/profile' />

        <PageHeader page="Bookmarked Products" />

        <BookmarkedProductsList />
      </div>
    </div>
  )
}

export default BookmarkedProducts