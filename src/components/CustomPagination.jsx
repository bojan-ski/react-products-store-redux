import { useEffect } from "react"
// context
import { useGlobalContext } from "../context"
// utils func
import scrollToTop from "../utils/scrollToTop"

// let curPageNum = 1
let pointA = 0
let pointB = 9

const CustomPagination = ({ dataFromDB, setDisplayedContent }) => {
    // console.log(dataFromDB);    

    // const {currentPageNumberCustom, setCurrentPageNumberCustom} = useGlobalContext()
    const {currentPageNumber, setCurrentPageNumber} = useGlobalContext()

    useEffect(() => {
        // console.log('radi');

        pointA = 0
        pointB = 9
        setCurrentPageNumber(1)
    }, [])

    // console.log(curPageNum);
    // console.log(pointA);
    // console.log(pointB);

    // console.log(currentPageNumber);    


    const paginationOption = (term) => {
        if (term === 'plus') {
            pointA += 9
            pointB += 9
            setCurrentPageNumber(curPageNum => curPageNum + 1)
            // curPageNum += 1
        }

        if (term === 'minus') {
            pointA -= 9
            pointB -= 9
            setCurrentPageNumber(curPageNum => curPageNum - 1)
            // curPageNum -= 1
        }

        if (pointB == 0) {
            // setDisplayedContent(currData => ({
            //     ...currData,
            //     displayedDataList: currData.totalDataList.slice(0, 9)
            // }))
            setDisplayedContent(dataFromDB.slice(0, 9))
            pointA = 0
            pointB = 9
            // curPageNum = 1
            setCurrentPageNumber(1)
        } else if (pointB > dataFromDB.length && pointA >= dataFromDB.length) {
            // setDisplayedContent(currData => ({
            //     ...currData,
            //     displayedDataList: currData.totalDataList.slice(0, 9)
            // }))
            setDisplayedContent(dataFromDB.slice(0, 9))
            pointA = 0
            pointB = 9
            // curPageNum = 1
            setCurrentPageNumber(1)
        } else if (pointB > dataFromDB.length) {
            const lastPostedListings = dataFromDB.length - pointA
            // setDisplayedContent(currData => ({
            //     ...currData,
            //     displayedDataList: currData.totalDataList.slice(-lastPostedListings)
            // }))
            setDisplayedContent(dataFromDB.slice(-lastPostedListings))
            // curPageNum = Math.ceil(dataFromDB.length / 9)
            setCurrentPageNumber(Math.ceil(dataFromDB.length / 9))
        } else {
            setDisplayedContent(dataFromDB.slice(pointA, pointB))
            // setDisplayedContent(currData => ({
            //     ...currData,
            //     displayedDataList: currData.totalDataList.slice(pointA, pointB)
            // }))
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
                        {/* {curPageNum} */}
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