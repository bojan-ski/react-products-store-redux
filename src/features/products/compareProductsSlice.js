import { createSlice } from "@reduxjs/toolkit"


const initialCompareProductsState = {
    compareProductsList: [],
    isLoading: false
}

// used in: AppLayout, GridViewListCard -> CompareProductsOption
const compareProductsSlice = createSlice({
    name: 'compareProducts',
    initialState: initialCompareProductsState,
    reducers: {
        addProductToCompareProductsList: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.compareProductsList = [...state.compareProductsList, payload];

            // loading false
            state.isLoading = false
        },
        removeProductFromCompareProductsList: (state, { payload: { productID } }) => {
            // loading true
            state.isLoading = true

            // update state
            state.compareProductsList = state.compareProductsList.filter(product => product.id !== productID);

            // loading false
            state.isLoading = false
        }
    }
})

export const {
    addProductToCompareProductsList, // GridViewListCard -> CompareProductsOption
    removeProductFromCompareProductsList // GridViewListCard -> CompareProductsOption
} = compareProductsSlice.actions
export default compareProductsSlice.reducer