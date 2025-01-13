import React, { useEffect, useState } from 'react'
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getListOfProducts, resetProductsPage } from '../features/products/productsSlice'
// components
import PageHeader from "../components/PageHeader"
import PageMsg from '../components/PageMsg'
import SearchFeature from '../components/productsPage/SearchFeature'
import ProductsList from "../components/productsPage/ProductsList"
import Categories from '../components/productsPage/Categories'


// LOADER
export const loader = async () => {
    // dummy-json func
    const categories = await fetchDataFromDummyJSON('', '/category-list')

    // firebase func
    const bookmarkedProducts = await fetchBookmarkedProductsToFirebase()

    return { categories, bookmarkedProducts }
}

const Products = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    // Fetch the first page on mount
    useEffect(() => {
        if (!products.productsList.length) {
            const productsListParameters = {
                updatedUrlOne: '',
                updatedUrlTwo: `?limit=${products.productsLimit}&skip=0`
            }

            dispatch(getListOfProducts(productsListParameters));
        }
    }, [])

    // search & filter (select category) feature
    const [searchTerm, setSearchTerm] = useState('')

    const handleResetFilterOption = () => {
        const resetProductsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${products.productsLimit}&skip=0`
        }

        setSearchTerm('')
        dispatch(getListOfProducts(resetProductsListParameters))
        dispatch(resetProductsPage())
    }

    return (
        <div className="products-page my-5">
            <div className="container">

                <PageHeader page='All Products' />

                <div className="row">
                    <div className="col-3 col-lg-2">
                        <Categories setSearchTerm={setSearchTerm} handleResetFilterOption={handleResetFilterOption} />
                    </div>

                    <div className="col-9 col-lg-10">
                        <SearchFeature searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleResetFilterOption={handleResetFilterOption} />

                        {products && products.productsList.length > 0 ? (
                            <ProductsList />
                        ) : (
                            <PageMsg text="No products available" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products