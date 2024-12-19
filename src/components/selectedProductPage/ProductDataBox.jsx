import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
// redux
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart } from "../../features/cart/cartSlice"
// toastify
import { toast } from "react-toastify"


const ProductDataBox = () => {
    const { id, availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = useLoaderData()

    const { cartItemsList, isLoading } = useSelector(store => store.cart)
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
        if (cartItemsList.some(product => product.id === cartItem.id)) {
            return toast.warning('Product is already in the cart')
        }

        dispatch(addProductToCart(cartItem))

        // success message
        toast.success('product added to cart')
    }

    return (
        <div className="product-data h-100 rounded-4 p-3">

            <div className="product-info mb-4">
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Brand:</span>
                    <span className="fw-bold">
                        {brand}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Category:</span>
                    <span className="fw-bold">
                        {category}
                    </span>
                </p>
                <p className="mb-1">
                    <span className="fw-bold text-muted">Dimensions:</span>
                </p>
                <ul >
                    {Object.entries(dimensions).map(([key, value]) => (
                        <li key={key}>
                            <span className="fw-bold">{key}</span>: {value}
                        </li>
                    ))}
                </ul>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Weight:</span>
                    <span className="fw-bold">
                        {weight}
                    </span>
                </p>
                <p className="mb-2  me-2">
                    <span className="fw-bold text-muted me-2">Price:</span>
                    <span className="fw-bold">
                        {price}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Rating:</span>
                    <span className="fw-bold">
                        {rating}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Shipping information:</span>
                    <span className="fw-bold">
                        {shippingInformation}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Return policy:</span>
                    <span className="fw-bold">
                        {returnPolicy}
                    </span>
                </p>
                <p className="mb-2">
                    <span className="fw-bold text-muted me-2">Warranty information:</span>
                    <span className="fw-bold">
                    {warrantyInformation}
                    </span>
                </p>
            </div>

            <div className="add-to-cart">
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

                    <button className="btn btn-orange-hover" onClick={addProduct} disabled={isLoading}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDataBox