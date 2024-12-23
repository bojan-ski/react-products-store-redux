import React from "react"
import { useLoaderData } from "react-router-dom";
// axios
import axios from "axios"
// components
import PageHeader from "../components/PageHeader"
import Contact from "../components/dashboardPage/Contact";
import SpecialOfferMotorcycle from "../components/dashboardPage/SpecialOfferMotorcycle";
import SpecialOfferVehicle from "../components/dashboardPage/SpecialOfferVehicle";
import Testimonials from "../components/dashboardPage/Testimonials";


// LOADER
export const loader = async () => {
  const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`;
  const apiCallVehicle = await axios.get(`${url}/category/vehicle?limit=12&skip=0`)
  const apiCallMotorcycle = await axios.get(`${url}/category/motorcycle?limit=12&skip=0`)

  const vehicle = await apiCallVehicle.data
  const motorcycle = await apiCallMotorcycle.data

  return { vehicle, motorcycle }
}

const Dashboard = () => {
  return (
    <div className="dashboard-page mt-5">

      <PageHeader page='Dashboard' />

      <SpecialOfferVehicle />

      <SpecialOfferMotorcycle />

      <Testimonials />

      <Contact />
    </div>
  )
}

export default Dashboard