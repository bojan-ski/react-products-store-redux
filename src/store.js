import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './features/cart/cartSlice';
import compareProductsSlice from './features/products/productsSlice';

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        compareProducts: compareProductsSlice
    }
})