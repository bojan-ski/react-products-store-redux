import React, { useEffect } from 'react'
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

    useEffect(() => {
        const productsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${products.productsLimit}&skip=0`
        }

        dispatch(getListOfProducts(productsListParameters));
    }, [])  

    return (
        <div className="products-page">
            <div className="container">

                {products && products?.productsList.length > 0 ? (
                    <>
                    <PageHeader page='Products List' />

                        <div className="row">
                            <div className="col-3 col-md-2">
                                <Categories />
                            </div>

                            <div className="col-9 col-md-10">
                                {/* <SearchAndFilter setCurrentPageNumber={setCurrentPageNumber} /> */}

                                <ProductsList />
                            </div>
                        </div>
                    </>
                ) : (
                    <NoProductsAvailable />
                )}
            </div>
        </div>
    )
}

export default Products