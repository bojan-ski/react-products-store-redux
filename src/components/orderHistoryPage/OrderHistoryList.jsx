import React from "react"
// components
import OrderHistoryListCard from "./OrderHistoryListCard"


const OrderHistoryList = ({ orderHistory }) => {    
    return (
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th scope="col">Num. of products</th>
                    <th scope="col">Total Quantity</th>
                    <th scope="col">Grand Total</th>
                    <th scope="col">Order submitted</th>
                    <th scope="col">Order status</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {orderHistory?.map(order => <OrderHistoryListCard key={order.id} order={order} />)}
            </tbody>
        </table>
    )
}

export default OrderHistoryList