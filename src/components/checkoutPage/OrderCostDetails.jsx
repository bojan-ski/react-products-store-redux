// redux
import { useDispatch, useSelector } from "react-redux"
import { updateGrandTotal } from "../../features/cart/cartSlice"
import { updateUserStoreCredit } from "../../features/user/userSlice"
// toast
import { toast } from "react-toastify"


const OrderCostDetails = () => {
    const { cartItemsList, totalQuantity, shipping, orderCost, gradTotal } = useSelector(state => state.cart)
    const { userStoreCredit } = useSelector(state => state.user)
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
        <section className="bg-warning p-3 mb-5 rounded-4">
            <div className="row text-center">

                <div className="col-6">
                    <div className="row bg-info">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 text-center">
                            <p className='mb-0'>
                                Number of products:
                            </p>
                            <p className='fw-bold'>
                                {cartItemsList.length}
                            </p>
                        </div>
                        {/* row item 2 */}
                        <div className="col-12 col-md-6 text-center">
                            <p className='mb-0'>
                                Total Quantity:
                            </p>
                            <p className='fw-bold'>
                                {totalQuantity}
                            </p>
                        </div>
                        {/* row item 3 */}
                        <div className="col-12 col-md-6 text-center">
                            <p className='mb-0'>
                                Order Cost:
                            </p>
                            <p className='fw-bold'>
                                $ {orderCost}
                            </p>
                        </div>
                        {/* row item 4 */}
                        <div className="col-12 col-md-6 text-center">
                            <p className='mb-0'>
                                Shipping Cost:
                            </p>
                            <p className='fw-bold'>
                                + {shipping}%
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="bg-info">
                        <h5>
                            Grand Total:
                        </h5>
                        <p className='fw-bold'>
                            $ {gradTotal}
                        </p>

                        <button className="btn btn-success mt-3" onClick={handleApplyStoreCredit} disabled={userStoreCredit <= 0 || gradTotal <= 0}>
                            Use credits
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderCostDetails