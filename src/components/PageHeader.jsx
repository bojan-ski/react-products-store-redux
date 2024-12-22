import React from "react"


const PageHeader = ({ page }) => {
    return (
        <div className="page-header mb-5">
            <h2 className="fw-bold text-center">
                {page}
            </h2>
        </div>
    )
}

export default PageHeader