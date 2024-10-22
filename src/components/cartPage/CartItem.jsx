// context
import { useGlobalContext } from "../../context";
// toastify
import { toast } from "react-toastify";


const CartItem = ({ cartItem }) => {
    // console.log(cartItem);
    const { setCartItems } = useGlobalContext()

    const { id, thumbnail, title, category, price, quantity, totalPrice } = cartItem

    const handleUpdatedCart = (e) => {
        e.preventDefault()

        setCartItems(prevState => {
            const newCartItemsList = prevState.cartItemsList.map(cartItem => {
                if (cartItem.id === id) {
                    return { ...cartItem, quantity: +e.target.value, totalPrice: cartItem.price * +e.target.value };
                }
                return cartItem;
            });

            const newTotalQuantity = newCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
            const newOrderCost = newCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0);
            const newGradTotal = newOrderCost + (newOrderCost / prevState.shipping)

            return {
                ...prevState,
                cartItemsList: newCartItemsList,
                totalQuantity: newTotalQuantity,
                orderCost: +newOrderCost.toFixed(2),
                gradTotal: +newGradTotal.toFixed(2)
            };
        });

        toast.success('Cart updated')
    }

    const handleRemoveProduct = () => {
        if (window.confirm('Are you sure you want to remove product?')) {
            setCartItems(prevState => {
                const newCartItemsList = prevState.cartItemsList.filter(cartItem => cartItem.id !== id);

                const newTotalQuantity = newCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
                const newOrderCost = newCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0);
                const newGradTotal = newOrderCost + (newOrderCost / prevState.shipping)

                return {
                    ...prevState,
                    cartItemsList: newCartItemsList,
                    totalQuantity: newTotalQuantity,
                    orderCost: +newOrderCost.toFixed(2),
                    gradTotal: +newGradTotal.toFixed(2)
                };
            });

            toast.success('Product removed form cart')
        }
    }

    return (
        <div className="col-12 mb-3">
            <div className="bg-info cart-item-details rounded rounded-4 p-3">
                <div className="row align-items-center">

                    {/* row item 1 */}
                    <div className="col-2 d-none d-md-block">
                        <img src={thumbnail} alt={title} className="img-fluid" />
                    </div>

                    {/* row item 2 */}
                    <div className="col-5 col-md-4">
                        <p className="d-none d-md-block">
                            {category}
                        </p>
                        <h6 className="fw-bold">
                            {title}
                        </h6>
                        <h6 className="mb-0">
                            ${price}
                        </h6>
                    </div>

                    {/* row item 3 */}
                    <div className="col-2">
                        <select className="form-select" value={quantity} onChange={handleUpdatedCart}>
                            {Array.from({ length: 10 }, (_, idx) => {
                                const amount = idx + 1

                                return (
                                    <option key={amount} value={amount}>
                                        {amount}
                                    </option>
                                )
                            })}
                        </select>
                    </div>

                    {/* row item 4 */}
                    <div className="col-2">
                        <p className='fw-bold text-center mb-0'>
                            $ {totalPrice.toFixed(2)}
                        </p>
                    </div>

                    {/* row item 5 */}
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={handleRemoveProduct}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem