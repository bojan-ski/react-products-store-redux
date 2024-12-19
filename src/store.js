import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/user/userSlice';
import productsSlice from './features/products/productsSlice';
import compareProductsSlice from './features/products/compareProductsSlice';
import cartSlice from './features/cart/cartSlice';
import orderHistorySlice from './features/user/orderHistorySlice';
import bookmarkedProductsSlice from './features/user/bookmarkedProductsSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        products: productsSlice,
        compareProducts: compareProductsSlice,
        cart: cartSlice,
        orderHistory: orderHistorySlice,
        bookmarkedProducts: bookmarkedProductsSlice
    }
})