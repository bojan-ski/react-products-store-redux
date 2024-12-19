import { createSlice } from "@reduxjs/toolkit"


const skipBookmarkedProductsPageAmount = 6;

const initialBookmarkedProductsState = {
    isLoading: false,
    bookmarkedProductsError: false,
    skipBookmarkedProductsPageAmount,
    bookmarkedProductsList: [],
    displayedBookmarkedProducts: [],
    pointA: 0,
    pointB: skipBookmarkedProductsPageAmount,
    currentPage: 1
}

const bookmarkedProductsSlice = createSlice({
    name: 'bookmarkedProducts',
    initialState: initialBookmarkedProductsState,
    reducers: {
        getBookmarkedProductsPageState: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            if(payload){
                state.bookmarkedProductsList = payload
                state.displayedBookmarkedProducts = payload?.length > skipBookmarkedProductsPageAmount ? payload.slice(0, skipBookmarkedProductsPageAmount) : payload
            }else{
                state.bookmarkedProductsError = true 
            }            

            // loading false
            state.isLoading = false
        },
        updateBookmarkedProductsPageState: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.pointA = payload.pointA
            state.pointB = payload.pointB
            state.currentPage = payload.currentPage

            // loading false
            state.isLoading = false
        },
        resetBookmarkedProductsPage: (state) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedBookmarkedProducts = state.bookmarkedProductsList.slice(0, skipBookmarkedProductsPageAmount);
            state.pointA = 0
            state.pointB = skipBookmarkedProductsPageAmount
            state.currentPage = 1

            // loading false
            state.isLoading = false
        },
        lastItemsOnBookmarkedProductsPage: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedBookmarkedProducts = state.bookmarkedProductsList.slice(-payload.lastItems);
            state.currentPage = payload.lastPage

            // loading false
            state.isLoading = false
        },
        turnBookmarkedProductsPage: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.displayedBookmarkedProducts = state.bookmarkedProductsList.slice(payload.pointA, payload.pointB);

            // loading false
            state.isLoading = false
        },
    }
})

export const {
    getBookmarkedProductsPageState, // BookmarkedProductsContainer
    updateBookmarkedProductsPageState, // BookmarkedProductsContainer
    resetBookmarkedProductsPage, // BookmarkedProductsContainer
    lastItemsOnBookmarkedProductsPage, // BookmarkedProductsContainer
    turnBookmarkedProductsPage // BookmarkedProductsContainer
} = bookmarkedProductsSlice.actions
export default bookmarkedProductsSlice.reducer