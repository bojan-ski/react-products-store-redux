import React from "react";
// redux
import { useDispatch } from "react-redux";
// utils func
import scrollToTop from "../utils/scrollToTop"
// icons
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";


const PaginationCustom = ({ dataFromDB, updatePageState, resetPage, lastItemsOnPage, turnPage, pointA, pointB, currentPage, skipAmount }) => {
    const dispatch = useDispatch()

    const paginationOption = (term) => {
        if (term === 'plus') {
            pointA += skipAmount
            pointB += skipAmount
            currentPage += 1

            dispatch(updatePageState({ pointA, pointB, currentPage }))
        }

        if (term === 'minus') {
            pointA -= skipAmount
            pointB -= skipAmount
            currentPage -= 1

            dispatch(updatePageState({ pointA, pointB, currentPage }))
        }

        if (pointB == 0) {
            dispatch(resetPage())
        } else if (pointB > dataFromDB.length && pointA >= dataFromDB.length) {
            dispatch(resetPage())
        } else if (pointB > dataFromDB.length) {
            const lastItems = dataFromDB.length - pointA
            const lastPage = Math.ceil(dataFromDB.length / skipAmount)

            dispatch(lastItemsOnPage({ lastItems, lastPage }))
        } else {
            dispatch(turnPage({ pointA, pointB }))
        }

        scrollToTop()
    }

    return (
        <div className="pagination mt-4 d-flex align-items-center justify-content-between">
            <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Page:
                    <span className="mx-1 text-dark">
                        {currentPage}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(dataFromDB.length / skipAmount)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
                <button className="btn btn-orange-hover px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    <GrCaretPrevious />
                </button>
                <button className="btn btn-orange-hover px-3 btn-next" onClick={() => paginationOption('plus')}>
                    <GrCaretNext />
                </button>
            </div>
        </div>
    )
}

export default PaginationCustom