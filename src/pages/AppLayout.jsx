import { Outlet, useNavigation } from "react-router-dom"
//context
import { AppProvider } from "../context"
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

    return (
        <AppProvider>
            <>
                <Header />

                <main className="my-5">
                    {isPageLoading ? <Loading /> : <Outlet />}
                </main>

                <Footer />
            </>
            <ToastContainer
                position="top-center"
                autoClose={2500}
                pauseOnFocusLoss={false}
            />
        </AppProvider>
    )
}

export default AppLayout