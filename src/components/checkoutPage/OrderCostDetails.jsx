// context
import { useGlobalContext } from "../../context"


const OrderCostDetails = () => {
    const { cartItems, setCartItems, userProfileDetails, setUserProfileDetails } = useGlobalContext()
    // console.log(cartItems);
    // console.log(userProfileDetails);    

    const { cartItemsList, totalQuantity, shipping, orderCost, gradTotal } = cartItems

    const handleApplyStoreCredit = () => {
        if (!window.confirm('Are you sure you want to apply your Store credits?')) return;
    
        const result = (cartItems.gradTotal - userProfileDetails.userStoreCredit).toFixed(2);
        const newUserStoreCredit = result < 0 ? Math.abs(result) : 0;
        const newGradTotal = result < 0 ? 0 : result;
    
        setUserProfileDetails(prevState => ({
            ...prevState,
            userStoreCredit: newUserStoreCredit,
        }));
    
        setCartItems(prevState => ({
            ...prevState,
            gradTotal: newGradTotal,
        }));
    };

    // const handleApplyStoreCredit = () => {
    //     if (window.confirm('Are you sure you want to apply your Store credits?')) {
    //         const result = (cartItems.gradTotal - userProfileDetails.userStoreCredit).toFixed(2)

    //         if (result < 0) {
    //             setUserProfileDetails(prevState => {
    //                 return {
    //                     ...prevState,
    //                     userStoreCredit: Math.abs(result)
    //                 }
    //             })

    //             setCartItems((prevState) => {
    //                 return {
    //                     ...prevState,
    //                     gradTotal: 0
    //                 };
    //             })
    //         } else {
    //             setUserProfileDetails(prevState => {
    //                 return {
    //                     ...prevState,
    //                     userStoreCredit: 0
    //                 }
    //             })

    //             setCartItems((prevState) => {
    //                 return {
    //                     ...prevState,
    //                     gradTotal: result
    //                 };
    //             })
    //         }
    //     }
    // }

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

                        <button className="btn btn-success mt-3" onClick={handleApplyStoreCredit} disabled={userProfileDetails.userStoreCredit <= 0 || gradTotal <= 0}>
                            Use credits
                        </button>
                    </div>
                </div>


                {/* row item 1 */}
                {/* <div className="col-6">
                    <p className='mb-0'>
                        Number of products:
                    </p>
                    <p className='fw-bold'>
                        {cartItemsList.length}
                    </p>
                    <p className='mb-0'>
                        Total Quantity:
                    </p>
                    <p className='fw-bold mb-0'>
                        {totalQuantity}
                    </p>
                </div> */}

                {/* row item 2 */}
                {/* <div className="col-6">
                    <p className='mb-0'>
                        Shipping Cost:
                    </p>
                    <p className='fw-bold'>
                        + {shipping} %
                    </p>
                    <h5 className='mb-0'>
                        Grand Total:
                    </h5>
                    <p className='fw-bold mb-0'>
                        $ {gradTotal}
                    </p>
                </div> */}
            </div>
        </section>
    )
}

export default OrderCostDetails