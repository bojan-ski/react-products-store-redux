import React from "react";
import { Link } from "react-router-dom";
// icons
import { BiDetail } from "react-icons/bi";


const OrderHistoryListCard = ({ order }) => {
    const { data } = order

    return (
        <tr>
            <td>
                {data?.orderDetails?.cartItemsList?.length}
            </td>
            <td>
                {data?.orderDetails?.totalQuantity}
            </td>
            <td>
                {data?.grandTotal}
            </td>
            <td>
                {data?.orderCreated}
            </td>
            <td className="capitalize">
                {data?.orderStatus}
            </td>
            <td className="text-center">
                <Link to={`${order?.id}`} className="btn btn-warning">
                    <BiDetail />
                </Link>
            </td>
        </tr>
    )
}

export default OrderHistoryListCard