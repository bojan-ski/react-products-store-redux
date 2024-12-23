import React from "react"
// redux
import { useSelector } from "react-redux"
// components
import PageMsg from "../components/PageMsg"
import PageHeader from "../components/PageHeader"
import CompareProductCard from "../components/compareProductsPage/CompareProductCard"


const CompareProducts = () => {
    const { compareProductsList } = useSelector(store => store.compareProducts)

    return (
        <div className="compare-products-page my-5">
            <div className="container">
                <div className="row">

                    {!compareProductsList || compareProductsList.length == 0 ? (
                        <PageMsg text='No products were selected for comparison' />
                    ) : (
                        <>
                            <PageHeader page='Compare Products' />

                            {compareProductsList?.map(product => <CompareProductCard key={product.id} product={product} />)}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CompareProducts