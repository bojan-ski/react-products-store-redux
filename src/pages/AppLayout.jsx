import React, { useEffect } from "react"
import { Outlet, useNavigation } from "react-router-dom"
// redux
import { useDispatch } from "react-redux"
import { fetchUserDetails } from "../features/user/userSlice"
// pages
import Loading from "./Loading"
// components
import Header from "../components/appLayout/header/Header"
import Footer from "../components/appLayout/footer/Footer"
// toastify
import { ToastContainer } from 'react-toastify';


const AppLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('useEffect - fetchUserDetails()');

        dispatch(fetchUserDetails())
    }, [])

    return (
        <>
            <Header />

            <main className="my-5">
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