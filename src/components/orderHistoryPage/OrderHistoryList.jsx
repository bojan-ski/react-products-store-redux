// components
import OrderHistoryListCard from "./OrderHistoryListCard"


const OrderHistoryList = ({ orderHistory }) => {
    // console.log(orderHistory);
    
    return (
        // <div className="row">
        //     {orderHistory?.map(order => <SelectedOrder key={order.id} order={order} />)}
        // </div>

        <table className="table table-dark table-bordered">
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
                {/* {orderHistory?.map(order => <SelectedOrder key={order.id} order={order} />)} */}
                {orderHistory?.map(order => <OrderHistoryListCard key={order.id} order={order} />)}
            </tbody>
        </table>
    )
}

export default OrderHistoryList