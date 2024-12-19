import React, { useEffect } from "react"
// redux
import { useDispatch, useSelector } from "react-redux"
import { getUserOrderHistory } from "../features/user/orderHistorySlice"
// components
import PageErrorMsg from "../components/PageErrorMsg"
import BackButton from "../components/BackButton"
import OrderHistoryContainer from "../components/orderHistoryPage/OrderHistoryContainer"
import PageMsg from "../components/PageMsg"


const OrderHistory = () => {
    const userOrderHistory = useSelector(state => state.orderHistory)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userOrderHistory.orderHistoryList.length == 0) dispatch(getUserOrderHistory())
    }, [])

    if (userOrderHistory.orderHistoryError) {
        return <PageErrorMsg />
    }

    return (
        <div className="order-history-page">
            <div className="container">

                <BackButton backPath='/profile' />

                <section className="order-history-list">
                    {userOrderHistory.orderHistoryList && userOrderHistory.orderHistoryList.length > 0 ? (
                        <OrderHistoryContainer />
                    ) : (
                        <PageMsg text="You have no orders submitted" />
                    )}
                </section>
            </div>
        </div>
    )
}

export default OrderHistory