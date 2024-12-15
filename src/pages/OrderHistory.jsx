import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromFirebase'
// components
import BackButton from "../components/BackButton"
import PageHeader from "../components/PageHeader"
import OrderHistoryList from "../components/orderHistoryPage/OrderHistoryList"
import CustomPagination from "../components/CustomPagination"


// LOADER
export const loader = async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()

    return userOrderHistory
}

const OrderHistory = () => {
    const userOrderHistory = useLoaderData()

    const [displayedOrderHistory, setDisplayedBookmarkedProducts] = useState(userOrderHistory?.length >= 10 ? userOrderHistory.slice(0, 9) : userOrderHistory)

    return (
        <div className="order-history-page">
            <div className="container">

                <BackButton backPath='/profile' />


                <section className="order-history-list">
                    {userOrderHistory && userOrderHistory.length > 0 ? (
                        <>
                            <PageHeader page="Order History" />

                            <OrderHistoryList orderHistory={displayedOrderHistory} />

                            {userOrderHistory.length >= 10 && (
                                <CustomPagination dataFromDB={userOrderHistory} setDisplayedContent={setDisplayedBookmarkedProducts} />
                            )}
                        </>
                    ) : (
                        <h1 className="text-center fw-bold mt-5">
                            You have no orders submitted
                        </h1>
                    )}
                </section>
            </div>
        </div>
    )
}

export default OrderHistory