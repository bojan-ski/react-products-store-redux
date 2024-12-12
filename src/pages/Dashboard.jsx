import { useEffect, useState } from "react"
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// redux
import { useSelector, useDispatch } from "react-redux"
import { getListOfProducts } from "../features/products/productsSlice"
// components
import PageHeader from "../components/PageHeader"


// LOADER
export const loader = async () => {
  // dummyjson func
  const categories = await fetchDataFromDummyJSON('', '/category-list')

  // firebase func
  const bookmarkedProducts = await fetchBookmarkedProductsToFirebase()

  return { categories, bookmarkedProducts }
}

const Dashboard = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    const productsListParameters = {
      updatedUrlOne: '',
      updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
    }
    dispatch(getListOfProducts(productsListParameters));
  }, [])
  console.log(products); // 194 products

  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader page='Dashboard' />

      </div>
    </div>
  )
}

export default Dashboard