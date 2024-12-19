import React from "react"
import { useLoaderData } from "react-router-dom"


const DescriptionBox = () => {
    const { description } = useLoaderData()
    return (
        <div className="product-desc rounded-4 p-3 h-100">
            <h5 className="text-center fw-bold mb-3 border-bottom pb-2">
                Description:
            </h5>
            <p>
                {description}
            </p>
        </div>
    )
}

export default DescriptionBox