import React, { useEffect } from "react"
// redux
import { useDispatch, useSelector } from "react-redux"
import { getUserOrderHistory, lastItemsOnOrderHistoryPage, resetOrderHistoryPage, turnOrderHistoryPage, updateOrderHistoryPageState, } from "../features/user/orderHistorySlice"
// components
import PageErrorMsg from "../components/PageErrorMsg"
import BackButton from "../components/BackButton"
import PageHeader from "../components/PageHeader"
import OrderHistoryList from "../components/orderHistoryPage/OrderHistoryList"
import CustomPagination from "../components/CustomPagination"
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
                        <>
                            <PageHeader page="Order History" />

                            <OrderHistoryList orderHistory={userOrderHistory.displayedOrderHistory} />

                            {userOrderHistory.orderHistoryList.length > userOrderHistory.skipOrderHistoryPageAmount && (
                                <CustomPagination
                                    dataFromDB={userOrderHistory.orderHistoryList}
                                    updatePageState={updateOrderHistoryPageState}
                                    resetPage={resetOrderHistoryPage}
                                    lastItemsOnPage={lastItemsOnOrderHistoryPage}
                                    turnPage={turnOrderHistoryPage}
                                    pointA={userOrderHistory.pointA}
                                    pointB={userOrderHistory.pointB}
                                    currentPage={userOrderHistory.currentPage}
                                    skipAmount={userOrderHistory.skipOrderHistoryPageAmount}
                                />
                            )}
                        </>
                    ) : (
                        <PageMsg text="You have no orders submitted" />
                    )}
                </section>
            </div>
        </div>
    )
}

export default OrderHistory