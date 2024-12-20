import React from "react"
// redux
import { useDispatch, useSelector } from "react-redux"
import { updateGrandTotal } from "../../features/cart/cartSlice"
import { updateUserStoreCredit } from "../../features/user/userSlice"
// toast
import { toast } from "react-toastify"


const OrderCostDetails = () => {
    const { cartItemsList, totalQuantity, shipping, orderCost, gradTotal } = useSelector(state => state.cart)
    const { userStoreCredit, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const handleApplyStoreCredit = () => {
        if (!window.confirm('Are you sure you want to apply your Store credits?')) return;

        const result = (gradTotal - userStoreCredit).toFixed(2);
        const newUserStoreCredit = result < 0 ? Math.abs(result) : 0;
        const newGradTotal = result < 0 ? 0 : result;

        dispatch(updateUserStoreCredit(newUserStoreCredit))
        dispatch(updateGrandTotal({ newGradTotal }))

        // success message
        toast.success('Store credit used')
    };

    return (
        <section className="checkout-cost-details mb-3 rounded-4">
            <div className="row">

                <div className="col-12 col-md-6 mb-3">
                    <div className="row box-shadow-custom py-3">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 text-center mb-2 mb-md-1">
                            <p className='fw-bold mb-1'>
                                Number of products:
                            </p>
                            <p className='fw-bold mb-0 pb-2 pb-md-0 border-bottom'>
                                {cartItemsList.length}
                            </p>
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 text-center mb-2 mb-md-1">
                            <p className='fw-bold mb-1'>
                                Total Quantity:
                            </p>
                            <p className='fw-bold mb-0 pb-2 pb-md-0 border-bottom'>
                                {totalQuantity}
                            </p>
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-md-6 text-center mb-2 mb-md-0">
                            <p className='fw-bold mb-1'>
                                Order Cost:
                            </p>
                            <p className='fw-bold mb-0 pb-2 pb-md-0'>
                                $ {orderCost}
                            </p>
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 col-md-6 text-center">
                            <p className='fw-bold mb-1'>
                                Shipping Cost:
                            </p>
                            <p className='fw-bold mb-0'>
                                + {shipping}%
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-3">
                    <div className="box-shadow-custom d-flex flex-column align-items-center justify-content-center text-center h-100 py-md-0 py-3">

                        <div className="mb-3">
                            <h4 className="fw-bold">
                                Grand Total:
                            </h4>
                            <p className='fw-bold mb-0 fs-5'>
                                $ {gradTotal}
                            </p>
                        </div>

                        <button className="btn btn-orange-hover fw-bold" onClick={handleApplyStoreCredit} disabled={userStoreCredit <= 0 || gradTotal <= 0 || isLoading}>
                            Use credits
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderCostDetails