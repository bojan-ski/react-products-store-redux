import React from "react"
import { useLoaderData } from "react-router-dom"
// api func 
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// components
import BackButton from "../components/BackButton"
import PageHeader from "../components/PageHeader"
import ImagesGalleryBox from "../components/selectedProductPage/ImagesGalleryBox"
import ProductDataBox from "../components/selectedProductPage/ProductDataBox"
import DescriptionBox from "../components/selectedProductPage/DescriptionBox"
import ReviewsBox from "../components/selectedProductPage/ReviewsBox"


// LOADER
export const loader = async ({ params }) => {
    const selectedProductDetails = await fetchDataFromDummyJSON('', `/${params.id}`)

    return selectedProductDetails
}

const SelectedProduct = () => {
    const { availabilityStatus, title } = useLoaderData()

    let urlBackPath = window.location.pathname.split('/')[3] ?
        `${window.location.pathname.split('/')[1]}/${window.location.pathname.split('/')[2]}` :
        window.location.pathname.split('/')[1]

    return (
        <div className="selected-product-page">
            <div className="container">

                <section className="d-flex align-items-center justify-content-between mb-5">
                    <BackButton backPath={`/${urlBackPath}`} />

                    <h4 className={`fw-bold mb-0 ${availabilityStatus == "In Stock" ? 'text-success' : 'text-danger'}`}>
                        {availabilityStatus}
                    </h4>
                </section>

                <PageHeader page={title} />

                <section className="product-details">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 text-center">
                            <ImagesGalleryBox />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <ProductDataBox />
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-md-6 mb-4">
                            <DescriptionBox />
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 col-md-6 mb-4">
                            <ReviewsBox />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SelectedProduct