import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// api
import fetchUserOrderHistoryFromFirebase from "../../api/fetchUserOrderHistoryFromFirebase"


const skipOrderHistoryPageAmount = 10;

const initialOrderHistoryState = {
    isLoading: false,
    orderHistoryError: false,
    skipOrderHistoryPageAmount,
    orderHistoryList: [],
    displayedOrderHistory: [],
    pointA: 0,
    pointB: skipOrderHistoryPageAmount,
    currentPage: 1
}

// used in: OrderHistory
export const getUserOrderHistory = createAsyncThunk('orderHistory/getUserOrderHistory', async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()

    return userOrderHistory
})

// used in: OrderHistory, OrderHistoryContainer
const orderHistorySlice = createSlice({
    name: 'orderHistory',
    initialState: initialOrderHistoryState,
    reducers: {
        updateOrderHistoryPageState: (state, { payload }) => {       
            // loading true
            state.isLoading = true

            // update state
            state.pointA = payload.pointA
            state.pointB = payload.pointB
            state.currentPage = payload.currentPage

            // loading false
            state.isLoading = false
        },
        resetOrderHistoryPage: (state) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedOrderHistory = state.orderHistoryList.slice(0, skipOrderHistoryPageAmount);
            state.pointA = 0
            state.pointB = skipOrderHistoryPageAmount
            state.currentPage = 1

            // loading false
            state.isLoading = false
        },
        lastItemsOnOrderHistoryPage: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedOrderHistory = state.orderHistoryList.slice(-payload.lastItems);
            state.currentPage = payload.lastPage

            // loading false
            state.isLoading = false
        },
        turnOrderHistoryPage: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedOrderHistory = state.orderHistoryList.slice(payload.pointA, payload.pointB);

            // loading false
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder
            // getUserOrderHistory
            .addCase(getUserOrderHistory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getUserOrderHistory.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.orderHistoryList = payload
                state.displayedOrderHistory = payload?.length > skipOrderHistoryPageAmount ? payload.slice(0, skipOrderHistoryPageAmount) : payload
            })
            .addCase(getUserOrderHistory.rejected, (state) => {
                state.isLoading = false;
                state.orderHistoryError = true                
            })
    }
})

export const {
    updateOrderHistoryPageState, // OrderHistoryContainer
    resetOrderHistoryPage, // OrderHistoryContainer
    lastItemsOnOrderHistoryPage, // OrderHistoryContainer
    turnOrderHistoryPage, // OrderHistoryContainer
} = orderHistorySlice.actions
export default orderHistorySlice.reducer