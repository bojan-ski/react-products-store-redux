import { useEffect } from "react"
// import { useLoaderData } from "react-router-dom"
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// components
import PageHeader from "../components/PageHeader"
import ProductsList from "../components/dashboardPage/ProductsList"
import NoProductsAvailable from "../components/dashboardPage/NoProductsAvailable"

// redux
import { useSelector, useDispatch } from "react-redux"
import { getListOfProducts } from "../features/products/productsSlice"


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
  // dummyjson func
  const categories = await fetchDataFromDummyJSON('', '/category-list')

  // firebase func
  const bookmarkedProducts = await fetchBookmarkedProductsToFirebase()

  return { categories, bookmarkedProducts }
}

const Dashboard = () => {
  // const { listOfProductsFromDB } = useLoaderData()

  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  // dummyjson funcs - products
  const productsListParameters = {
    updatedUrlOne: '',
    updatedUrlTwo: '?limit=12&skip=0'
  }

  useEffect(() => {
    dispatch(getListOfProducts(productsListParameters));
  },[])
  console.log(products);

  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader page='Dashboard' />

        {products && products?.productsList.length > 0 ? (
          <ProductsList />
        ) : (
          <NoProductsAvailable />
        )}

        {/* {listOfProductsFromDB && listOfProductsFromDB.products.length > 0 ? (
          <ProductsList />
        ) : (
          <NoProductsAvailable />
        )} */}
      </div>
    </div>
  )
}

export default Dashboard