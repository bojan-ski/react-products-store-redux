// components
import BackButtons from "../components/BackButtons";
import PageHeader from "../components/PageHeader";
import BookmarkedProductsList from "../components/bookmarkedProductsPage/BookmarkedProductsList";


const BookmarkedProducts = () => {
  return (
    <div className="bookmarked-products-page">
      <div className="container">

        <BackButtons backPath='/profile' />

        <PageHeader page="Bookmarked Products" />

        <BookmarkedProductsList />
      </div>
    </div>
  )
}

export default BookmarkedProducts