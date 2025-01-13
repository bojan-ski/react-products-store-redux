import React, { useEffect } from "react"
import { Outlet, useNavigation } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { fetchUserDetails } from "../features/user/userSlice"
// pages - loading
import Loading from "./Loading"
// components
import Header from "../components/appLayout/header/Header"
import ComparePageLink from "../components/ComparePageLink"
import Footer from "../components/appLayout/footer/Footer"
// toastify
import { ToastContainer } from 'react-toastify';


const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    const compareProducts = useSelector(store => store.compareProducts)
    const dispatch = useDispatch()    

    useEffect(() => {
        dispatch(fetchUserDetails())
    }, [])

    return (
        <>
            <Header />

            <main>
                {compareProducts.compareProductsList.length > 0 && <ComparePageLink />}                

                {isPageLoading ? <Loading /> : <Outlet />}
            </main>

            <Footer />
            
            <ToastContainer
                position="top-center"
                autoClose={2500}
                pauseOnFocusLoss={false}
            />
        </>
    )
}

export default AppLayout