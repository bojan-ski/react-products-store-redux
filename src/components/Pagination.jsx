import React from "react";
// redux
import { useDispatch } from "react-redux"
import { getListOfProducts, updateProductsCurrentPage } from "../features/products/productsSlice"
// utils func
import scrollToTop from "../utils/scrollToTop"
// icons
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";


const Pagination = ({ isLoading, availableProducts, updatedURL, productsLimit, productsSkipNumber, currentPageNumber }) => {
    const dispatch = useDispatch()

    const filterProductsList = async (skipAmount) => {
        const filterProductsListParameters = {
            updatedUrlOne: updatedURL,
            updatedUrlTwo: `?limit=${productsLimit}&skip=${skipAmount}`
        }

        dispatch(getListOfProducts(filterProductsListParameters));
    }

    const paginationOption = (term) => {
        scrollToTop()

        if (term === 'plus') {
            productsSkipNumber += productsLimit;
            currentPageNumber += 1;

            // update state
            dispatch(updateProductsCurrentPage({ productsSkipNumber, currentPageNumber }))
        }

        if (term === 'minus') {
            productsSkipNumber -= productsLimit;
            currentPageNumber -= 1;

            // update state
            dispatch(updateProductsCurrentPage({ productsSkipNumber, currentPageNumber }))
        }

        if (productsSkipNumber < 0) {
            // update state
            dispatch(updateProductsCurrentPage({ productsSkipNumber: 0, currentPageNumber: 1 }))

            // call func
            filterProductsList(0)
        } else if (productsSkipNumber > availableProducts) {
            // update state
            dispatch(updateProductsCurrentPage({ productsSkipNumber: 0, currentPageNumber: 1 }))

            // call func
            filterProductsList(0)
        } else {
            //cal func
            filterProductsList(productsSkipNumber)
        }
    }

    const goToFirstPage = async () => {
        scrollToTop()

        // update state
        dispatch(updateProductsCurrentPage({ productsSkipNumber: 0, currentPageNumber: 1 }))

        // call func
        filterProductsList(0)
    }

    const goToLastPage = () => {
        scrollToTop()

        let productsListSkipNumber = Math.floor(availableProducts / productsLimit) * productsLimit
        let lastPage = (Math.ceil(availableProducts / productsLimit))

        // update state
        dispatch(updateProductsCurrentPage({ productsSkipNumber: productsListSkipNumber, currentPageNumber: lastPage }))

        // call func
        filterProductsList(productsListSkipNumber)
    }

    return (
        <section className="pagination d-flex justify-content-center">
            <div className="number-of-pages">
                <button className="btn btn-orange-hover fw-bold px-3 me-2" onClick={() => goToFirstPage()} disabled={isLoading}>
                    1
                </button>
                <button className="btn btn-orange-hover px-3 me-2" onClick={() => paginationOption('minus')} disabled={isLoading}>
                    <GrCaretPrevious />
                </button>
                <button className="btn border px-3">
                    {currentPageNumber}
                </button>
                <button className="btn btn-orange-hover px-3 ms-2" onClick={() => paginationOption('plus')} disabled={isLoading}>
                    <GrCaretNext />
                </button>
                <button className="btn btn-orange-hover fw-bold px-3 ms-2" onClick={() => goToLastPage()} disabled={isLoading}>
                    {Math.ceil(availableProducts / productsLimit)}
                </button>
            </div>
        </section>
    )
}

export default Pagination