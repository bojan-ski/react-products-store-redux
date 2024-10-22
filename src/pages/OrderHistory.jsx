import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromFirebase'
// context
import { useGlobalContext } from "../context"
// components
import BackButtons from "../components/BackButtons"
import PageHeader from "../components/PageHeader"
import OrderHistoryList from "../components/orderHistoryPage/OrderHistoryList"
import CustomPagination from "../components/CustomPagination"


// LOADER
export const loader = async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()
    // console.log(userOrderHistory);
    return userOrderHistory
}

const OrderHistory = () => {
    const userOrderHistory = useLoaderData()
    // console.log(userOrderHistory);

    // const { displayedDataFromDB, setDisplayedDataFromDB } = useGlobalContext()

    const [displayedOrderHistory, setDisplayedBookmarkedProducts] = useState(userOrderHistory?.length >= 10 ? userOrderHistory.slice(0, 9) : userOrderHistory)

    // useEffect(() => {
    //     console.log('radi');
        
    //     setDisplayedDataFromDB({
    //         totalDataList: userOrderHistory,
    //         displayedDataList: userOrderHistory?.length >= 10 ? userOrderHistory.slice(0, 9) : userOrderHistory
    //     })
    // }, [])

    // console.log(displayedDataFromDB.displayedDataList);

    return (
        <div className="order-history-page">
            <div className="container">

                <BackButtons backPath='/profile' />

                <PageHeader page="Order History" />

                <section>
                    {userOrderHistory && userOrderHistory.length > 0 ? (
                        <>
                            <OrderHistoryList orderHistory={displayedOrderHistory} />
                            
                            {userOrderHistory.length >= 10 && (
                                <CustomPagination dataFromDB={userOrderHistory} setDisplayedContent={setDisplayedBookmarkedProducts} />
                            )}
                        </>
                    ) : (
                        <h1 className="text-center fw-bold">
                            You have no orders submitted
                        </h1>
                    )}
                </section>
            </div>
        </div>
    )
}

export default OrderHistory