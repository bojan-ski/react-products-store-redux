import React from 'react'
// redux
import { useSelector } from 'react-redux'
import { lastItemsOnOrderHistoryPage, resetOrderHistoryPage, turnOrderHistoryPage, updateOrderHistoryPageState } from '../../features/user/orderHistorySlice'
// components
import PageHeader from '../PageHeader'
import OrderHistoryList from './OrderHistoryList'
import PaginationCustom from '../PaginationCustom'


const OrderHistoryContainer = () => {
    const userOrderHistory = useSelector(state => state.orderHistory)

    return (
        <>
            <PageHeader page="Order History" />

            <OrderHistoryList orderHistory={userOrderHistory.displayedOrderHistory} />

            {userOrderHistory.orderHistoryList.length > userOrderHistory.skipOrderHistoryPageAmount && (
                <PaginationCustom
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
    )
}

export default OrderHistoryContainer