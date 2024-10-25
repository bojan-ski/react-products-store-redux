import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './features/products/productsSlice'
import cartSlice from './features/cart/cartSlice';
import compareProductsSlice from './features/products/compareProductsSlice'

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        compareProducts: compareProductsSlice
    }
})