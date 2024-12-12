import React, { useEffect, useState } from 'react'
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getListOfProducts } from '../features/products/productsSlice'
// components
import PageHeader from "../components/PageHeader"
import SearchAndFilter from "../components/productsPage/SearchAndFilter"
import ProductsList from "../components/productsPage/ProductsList"
import NoProductsAvailable from "../components/productsPage/NoProductsAvailable"


// LOADER
// export const loader = async () => {
//   // dummyjson func
//   const listOfProductsFromDB = await fetchDataFromDummyJSON('', '?limit=12&skip=0')
//   const categories = await fetchDataFromDummyJSON('', '/category-list')

//   // firebase func
//   const bookmarkedProducts = await fetchBookmarkedProductsToFirebase()

//   return { listOfProductsFromDB, categories, bookmarkedProducts }
// }

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
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    useEffect(() => {
        const productsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
        }
        dispatch(getListOfProducts(productsListParameters));
    }, [])

    return (
        <div className="dashboard-page">
            <div className="container">
                <PageHeader page='Products' />

                <SearchAndFilter setCurrentPageNumber={setCurrentPageNumber} />

                {products && products?.productsList.length > 0 ? (
                    <ProductsList currentPageNumber={currentPageNumber} setCurrentPageNumber={setCurrentPageNumber} />
                ) : (
                    <NoProductsAvailable />
                )}
            </div>
        </div>
    )
}

export default Products