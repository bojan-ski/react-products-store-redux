import { Link } from "react-router-dom";


const OrderHistoryListCard = ({ order }) => {
    // console.log(order);
    const { data } = order

    return (
        <tr className="table-warning">
            <td>
                {data.orderDetails.cartItemsList.length}
            </td>
            <td>
                {data.orderDetails.totalQuantity}
            </td>
            <td>
                {data.grandTotal}
            </td>
            <td>
                {data.orderCreated}
            </td>
            <td className="capitalize">
                {data.orderStatus}
            </td>
            <td className="text-center">
                <Link to={`${order.id}`} className="btn btn-success">
                    Order details
                </Link>
            </td>
        </tr>
    )
}

export default OrderHistoryListCard