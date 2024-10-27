import { useState } from "react"
// redux
import { useDispatch, useSelector } from "react-redux"
import { getListOfProducts } from "../features/products/productsSlice"
// utils func
import scrollToTop from "../utils/scrollToTop"


let productsListSkipNumber = 0

const Pagination = () => {
    const { availableProducts, updatedURL } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    const filterProductsList = async (productsListSkipNumber) => {
        const filterProductsListParameters = {
            updatedUrlOne: updatedURL,
            updatedUrlTwo: `?limit=12&skip=${productsListSkipNumber}`
        }

        dispatch(getListOfProducts(filterProductsListParameters));
    }

    const paginationOption = (term) => {
        if (term === 'plus') {
            productsListSkipNumber += 12
            setCurrentPageNumber(curState => curState + 1)
        }

        if (term === 'minus') {
            productsListSkipNumber -= 12
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
        // <section className="pagination mb-4 d-flex align-items-center justify-content-between">
        <section className="pagination d-flex justify-content-center">
            <div className="number-of-pages">
                <button className="btn-info btn px-3 me-2" onClick={() => {
                    productsListSkipNumber = 0
                    setCurrentPageNumber(1)
                    filterProductsList(productsListSkipNumber)
                    scrollToTop()
                }}>
                    1
                </button>
                <button className="btn-primary btn px-3 me-2" onClick={() => paginationOption('minus')}>
                    Prev
                </button>
                <button className="btn border px-3 ">
                    {currentPageNumber}
                </button>
                <button className="btn-primary btn px-3 ms-2" onClick={() => paginationOption('plus')}>
                    Next
                </button>
                <button className="btn-info btn px-3 ms-2" onClick={() => {
                    productsListSkipNumber = Math.floor(availableProducts / 12) * 12
                    setCurrentPageNumber(Math.ceil(availableProducts / 12))
                    filterProductsList(productsListSkipNumber)
                    scrollToTop()
                }}>
                    {Math.ceil(availableProducts / 12)}
                </button>
            </div>
        </section>
    )
}

export default Pagination