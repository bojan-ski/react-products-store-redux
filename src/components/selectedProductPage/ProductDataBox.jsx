import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart } from "../../features/cart/cartSlice"
// toastify
import { toast } from "react-toastify"


const ProductDataBox = () => {
    const { id, availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = useLoaderData()

    const {cartItemsList, isLoading} = useSelector(store => store.cart)
    const dispatch = useDispatch()   

    const [cartItem, setCartItem] = useState({
        id,
        thumbnail,
        title,
        category,
        price,
        quantity: 1,
        totalPrice: price * 1
    })

    const handleAmount = e => {
        e.preventDefault()

        setCartItem(prevItemState => ({
            ...prevItemState,
            quantity: +e.target.value,
            totalPrice: prevItemState.price * e.target.value
        }));
    }

    const addProduct = () => {    
        if(cartItemsList.some(product => product.id === cartItem.id)){
            return toast.warning('Product is already in the cart')
        }

        dispatch(addProductToCart(cartItem))

        // success message
        toast.success('product added to cart')
    }  
       
    return (
        <>
            <div className="product-data">
                <p className="mb-2">
                    <span className="fw-bold">Brand: </span> {brand}
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Category:</span> {category}
                </p>
                <p className="mb-1">
                    <span className="fw-bold">Dimensions:</span>
                </p>
                <ul >
                    {Object.entries(dimensions).map(([key, value]) => (
                        <li key={key}>
                            <span className="fw-bold">{key}</span>: {value}
                        </li>
                    ))}
                </ul>
                <p className="mb-2">
                    <span className="fw-bold">Weight:</span> {weight}
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Price:</span> {price}
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Rating:</span> {rating} ⭐
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Shipping information:</span> {shippingInformation}
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Return policy:</span> {returnPolicy}
                </p>
                <p className="mb-2">
                    <span className="fw-bold">Warranty information:</span> {warrantyInformation}
                </p>
            </div>

            <div className="add-to-cart my-4">
                <div className="input-group">
                    <label className="input-group-text fw-bold">
                        Quantity
                    </label>

                    <select className="form-select" onChange={handleAmount}>
                        {Array.from({ length: 10 }, (_, idx) => {
                            const amount = idx + 1

                            return (
                                <option key={amount} value={amount}>
                                    {amount}
                                </option>
                            )
                        })}
                    </select>

                    <button className="btn btn-success" onClick={addProduct} disabled={isLoading}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductDataBox