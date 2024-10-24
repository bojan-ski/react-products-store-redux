import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    cartItemsList: [],
    totalQuantity: 0,
    shipping: 10,
    orderCost: 0,
    gradTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addProductToCart: (state, { payload }) => {
            // console.log(state);
            // console.log(payload);
            // state.cartItemsList.push(payload)

            // const updatedCartItems = [...state.cartItemsList, payload];
            // const updatedTotalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
            // const updatedOrderCost = updatedCartItems.reduce((acc, item) => acc + item.totalPrice, 0);
            // const updatedGradTotal = updatedOrderCost + (updatedOrderCost / state.shipping)

            // state.cartItemsList = updatedCartItems
            // state.totalQuantity = updatedTotalQuantity
            // state.orderCost = +updatedOrderCost.toFixed(2)
            // state.gradTotal = +updatedGradTotal.toFixed(2)  

            state.cartItemsList = [...state.cartItemsList, payload];
            state.totalQuantity = state.cartItemsList.reduce((acc, item) => acc + item.quantity, 0);
            state.orderCost = +(state.cartItemsList.reduce((acc, item) => acc + item.totalPrice, 0)).toFixed(2);
            state.gradTotal = +(state.orderCost + (state.orderCost / state.shipping)).toFixed(2);
        },
        updateCart: (state, { payload: { productID, updatedQuantity } }) => {
            const newCartItemsList = state.cartItemsList.map(cartItem => {
                if (cartItem.id === productID) {
                    return { ...cartItem, quantity: updatedQuantity, totalPrice: cartItem.price * updatedQuantity };
                }
                return cartItem;
            });

            state.cartItemsList = newCartItemsList;
            state.totalQuantity = newCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
            state.orderCost = +(newCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0)).toFixed(2);
            state.gradTotal = +(state.orderCost + (state.orderCost / state.shipping)).toFixed(2);            
        },
        clearCart: (state) => {
            state.initialCartState = initialCartState
        }
    }

})


export const {
    addProductToCart,
    updateCart,
    clearCart,
} = cartSlice.actions
export default cartSlice.reducer