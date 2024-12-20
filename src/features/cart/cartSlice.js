import { createSlice } from "@reduxjs/toolkit"


const initialCartState = {
    cartItemsList: [],
    totalQuantity: 0,
    shipping: 10,
    orderCost: 0,
    gradTotal: 0,
    isLoading: false
}

// used in: Cart, CartItemsList, CartItem, OrderCostDetails, CheckoutForm
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.cartItemsList = [...state.cartItemsList, payload];
            state.totalQuantity = state.cartItemsList.reduce((acc, item) => acc + item.quantity, 0);
            state.orderCost = +(state.cartItemsList.reduce((acc, item) => acc + item.totalPrice, 0)).toFixed(2);
            state.gradTotal = +(state.orderCost + (state.orderCost / state.shipping)).toFixed(2);

            // loading false
            state.isLoading = false
        },
        updateCart: (state, { payload: { productID, updatedQuantity } }) => {
            // loading true
            state.isLoading = true

            // update state
            const newCartItemsList = state.cartItemsList.map(cartItem => {
                if (cartItem.id === productID) {
                    return { ...cartItem, quantity: updatedQuantity, totalPrice: cartItem.price * updatedQuantity };
                }
                return cartItem;
            });
            state = updateState(state, newCartItemsList)

            // loading false
            state.isLoading = false
        },
        removeProductFromCart: (state, { payload: { productID } }) => {
            // loading true
            state.isLoading = true

            // update state
            const newCartItemsList = state.cartItemsList.filter(cartItem => cartItem.id !== productID);
            state = updateState(state, newCartItemsList)

            // loading false
            state.isLoading = false
        },
        updateGrandTotal: (state, { payload: { newGradTotal } }) => {
            // loading true
            state.isLoading = true

            // update state
            state.gradTotal = newGradTotal

            // loading false
            state.isLoading = false
        },
        clearCart: () => {
            return initialCartState
        }
    }
})

const updateState = (state, updatedCartItemsList) => {
    state.cartItemsList = updatedCartItemsList;
    state.totalQuantity = updatedCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
    state.orderCost = +(updatedCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0)).toFixed(2);
    state.gradTotal = +(state.orderCost + (state.orderCost / state.shipping)).toFixed(2);

    return state
}

export const {
    addProductToCart, // ProductDataBox
    updateCart, // CartItem
    removeProductFromCart, // CartItem
    updateGrandTotal, // OrderCostDetails
    clearCart // CartCostDetails, CheckoutForm
} = cartSlice.actions
export default cartSlice.reducer