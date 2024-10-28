import { useEffect, useState } from "react"
// utils func
import scrollToTop from "../utils/scrollToTop"


let pointA = 0
let pointB = 9

const CustomPagination = ({ dataFromDB, setDisplayedContent }) => {   
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    useEffect(() => {
        console.log('useEffect - CustomPagination');
        pointA = 0
        pointB = 9
        setCurrentPageNumber(1)
    }, [])

    const paginationOption = (term) => {
        if (term === 'plus') {
            pointA += 9
            pointB += 9
            setCurrentPageNumber(curPageNum => curPageNum + 1)
        }

        if (term === 'minus') {
            pointA -= 9
            pointB -= 9
            setCurrentPageNumber(curPageNum => curPageNum - 1)
        }

        if (pointB == 0) {
            setDisplayedContent(dataFromDB.slice(0, 9))
            pointA = 0
            pointB = 9
            setCurrentPageNumber(1)
        } else if (pointB > dataFromDB.length && pointA >= dataFromDB.length) {
            setDisplayedContent(dataFromDB.slice(0, 9))
            pointA = 0
            pointB = 9
            setCurrentPageNumber(1)
        } else if (pointB > dataFromDB.length) {
            const lastPostedListings = dataFromDB.length - pointA

            setDisplayedContent(dataFromDB.slice(-lastPostedListings))
            setCurrentPageNumber(Math.ceil(dataFromDB.length / 9))
        } else {
            setDisplayedContent(dataFromDB.slice(pointA, pointB))
        }

        scrollToTop()
    }

    return (
        <div className="pagination mt-4 d-flex align-items-center justify-content-between">
            <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Page:
                    <span className="mx-1 text-dark">
                        {currentPageNumber}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(dataFromDB.length / 9)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
                <button className="btn btn-primary px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    Previous
                </button>
                <button className="btn btn-primary px-3 btn-next" onClick={() => paginationOption('plus')}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default CustomPagination