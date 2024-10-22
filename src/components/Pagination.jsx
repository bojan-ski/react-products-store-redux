// api func
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// context 
import { useGlobalContext } from "../context"
// utils func
import scrollToTop from "../utils/scrollToTop"


let productsListSkipNumber = 0

const Pagination = () => {
    const {availableProducts, updatedURL, setProductsList, currentPageNumber, setCurrentPageNumber} = useGlobalContext()    

    const updatedProductsList = async (productsListSkipNumber) => {
        const { products } = await fetchDataFromDummyJSON(updatedURL, `?limit=12&skip=${productsListSkipNumber}`)
        // console.log(products);

        setProductsList(products)
        return products
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
            updatedProductsList(productsListSkipNumber)
        } else if (productsListSkipNumber > availableProducts) {
            productsListSkipNumber = 0
            setCurrentPageNumber(1)

            // call func
            updatedProductsList(productsListSkipNumber)
        } else {
            updatedProductsList(productsListSkipNumber)
        }

        scrollToTop()
    }   
    
    // console.log(currentPageNumber);
    if(currentPageNumber == 1) productsListSkipNumber = 0       

    return (
        // <div className="pagination mb-4 d-flex align-items-center justify-content-between">
        <div className="pagination d-flex justify-content-center">
            <div className="number-of-pages">
                <button className="btn-info btn px-3 me-2" onClick={() => {
                    productsListSkipNumber = 0
                    setCurrentPageNumber(1)
                    updatedProductsList(productsListSkipNumber)
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
                    updatedProductsList(productsListSkipNumber)
                }}>
                    {Math.ceil(availableProducts / 12)}
                </button>
            </div>

            {/* <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Page number:
                    <span className="mx-1 text-dark">
                        {currentPageNumber}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(total / 12)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
                <button className="btn-primary btn px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    Prev
                </button>
                <button className="btn-primary btn px-3 btn-next" onClick={() => paginationOption('plus')}>
                    Next
                </button>
            </div> */}
        </div>
    )
}

export default Pagination