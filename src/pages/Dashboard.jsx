import { useLoaderData } from "react-router-dom"
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
import fetchDataFromDummyJSON from "../api/fetchDataFromDummyJSON"
// components
import PageHeader from "../components/PageHeader"
import ProductsList from "../components/dashboardPage/ProductsList"
import NoProductsAvailable from "../components/dashboardPage/NoProductsAvailable"


// LOADER
export const loader = async () => {
  // dummyjson func
  const listOfProductsFromDB = await fetchDataFromDummyJSON('', '?limit=12&skip=0')
  const categories = await fetchDataFromDummyJSON('', '/category-list')

  // firebase func
  const bookmarkedProducts = await fetchBookmarkedProductsToFirebase() 

  return { listOfProductsFromDB, categories, bookmarkedProducts }
}

const Dashboard = () => {
  const { listOfProductsFromDB } = useLoaderData()
  // console.log(listOfProductsFromDB);  

  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader page='Dashboard' />

        {listOfProductsFromDB && listOfProductsFromDB.products.length > 0 ? (
          <ProductsList />
        ) : (
          <NoProductsAvailable />
        )}
      </div>
    </div>
  )
}

export default Dashboard