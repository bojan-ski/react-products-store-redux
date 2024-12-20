import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux"
import { getListOfProducts } from "../features/products/productsSlice"
// utils func
import scrollToTop from "../utils/scrollToTop"
// icons
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";


let productsListSkipNumber = 0
let skipAmount = +import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP

const Pagination = ({ currentPageNumber, setCurrentPageNumber }) => {   
    const { availableProducts, updatedURL } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const filterProductsList = async (productsListSkipNumber) => {
        const filterProductsListParameters = {
            updatedUrlOne: updatedURL,
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=${productsListSkipNumber}`
        }

        dispatch(getListOfProducts(filterProductsListParameters));
    }

    const paginationOption = (term) => {
        if (term === 'plus') {
            productsListSkipNumber += skipAmount
            setCurrentPageNumber(curState => curState + 1)
        }

        if (term === 'minus') {
            productsListSkipNumber -= skipAmount
            setCurrentPageNumber(curState => curState - 1)
        }

        if (productsListSkipNumber <= 0) {
            productsListSkipNumber = 0
            setCurrentPageNumber(1)

            // call func
            filterProductsList(productsListSkipNumber)
        } else if (productsListSkipNumber > availableProducts) {
            productsListSkipNumber = 0
            setCurrentPageNumber(1)

            // call func
            filterProductsList(productsListSkipNumber)
        } else {
            filterProductsList(productsListSkipNumber)
        }

        scrollToTop()
    }

    if (currentPageNumber == 1) productsListSkipNumber = 0

    return (
        <section className="pagination d-flex justify-content-center">
            <div className="number-of-pages">
                <button className="btn btn-orange-hover fw-bold px-3 me-2" onClick={() => {
                    productsListSkipNumber = 0
                    setCurrentPageNumber(1)
                    filterProductsList(productsListSkipNumber)
                    scrollToTop()
                }}>
                    1
                </button>
                <button className="btn btn-orange-hover px-3 me-2" onClick={() => paginationOption('minus')}>
                    <GrCaretPrevious />
                </button>
                <button className="btn border px-3">
                    {currentPageNumber}
                </button>
                <button className="btn btn-orange-hover px-3 ms-2" onClick={() => paginationOption('plus')}>
                    <GrCaretNext />
                </button>
                <button className="btn btn-orange-hover fw-bold px-3 ms-2" onClick={() => {
                    productsListSkipNumber = Math.floor(availableProducts / skipAmount) * skipAmount
                    setCurrentPageNumber(Math.ceil(availableProducts / skipAmount))
                    filterProductsList(productsListSkipNumber)
                    scrollToTop()
                }}>
                    {Math.ceil(availableProducts / skipAmount)}
                </button>
            </div>
        </section>
    )
}

export default Pagination