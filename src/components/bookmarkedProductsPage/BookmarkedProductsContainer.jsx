import React, { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getBookmarkedProductsPageState, lastItemsOnBookmarkedProductsPage, resetBookmarkedProductsPage, turnBookmarkedProductsPage, updateBookmarkedProductsPageState } from '../../features/user/bookmarkedProductsSlice'
// components
import PageHeader from '../PageHeader'
import BookmarkedProductsList from './BookmarkedProductsList'
import PaginationCustom from '../PaginationCustom'


const BookmarkedProductsContainer = ({ bookmarkedProducts }) => {
    const userBookmarkedProducts = useSelector(state => state.bookmarkedProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userBookmarkedProducts.bookmarkedProductsList.length == 0) dispatch(getBookmarkedProductsPageState(bookmarkedProducts))
    }, [])

    return (
        <section className="bookmarked-products-list">
            <PageHeader page="Bookmarked Products" />

            <BookmarkedProductsList bookmarkedProduct={userBookmarkedProducts.displayedBookmarkedProducts}/>

            {userBookmarkedProducts.bookmarkedProductsList.length > userBookmarkedProducts.skipBookmarkedProductsPageAmount && (
                <PaginationCustom
                    dataFromDB={userBookmarkedProducts.bookmarkedProductsList}
                    updatePageState={updateBookmarkedProductsPageState}
                    resetPage={resetBookmarkedProductsPage}
                    lastItemsOnPage={lastItemsOnBookmarkedProductsPage}
                    turnPage={turnBookmarkedProductsPage}
                    pointA={userBookmarkedProducts.pointA}
                    pointB={userBookmarkedProducts.pointB}
                    currentPage={userBookmarkedProducts.currentPage}
                    skipAmount={userBookmarkedProducts.skipBookmarkedProductsPageAmount}
                />
            )}
        </section>
    )
}

export default BookmarkedProductsContainer