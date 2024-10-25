import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// axios
import axios from "axios"


const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`

const initialProductsState = {
    isLoading: false,
    productsList: {},
    availableProducts: 0,
    skip: 0,
    limit: 0,
    currentPageNumber: 1,
    searchTerm: '', // ?????
    updatedURL: '' // ?????
}

// used in : Dashboard, ProductsList
export const getListOfProducts = createAsyncThunk('products/getListOfProducts', async (parameters) => {
    console.log(parameters);

    try {
        let response

        if (parameters.updatedUrlOne == '') {
            response = await axios.get(`${url}${parameters.updatedUrlTwo}`)
        } else {
            response = await axios.get(`${url}${parameters.updatedUrlOne}${parameters.updatedUrlTwo}`)
        }

        const data = await response.data

        return data
    } catch (error) {
        console.error(error);
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        updateProductsURL: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.updatedURL = payload 

            // loading false
            state.isLoading = false                       
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getListOfProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getListOfProducts.fulfilled, (state, { payload }) => {
                // console.log(payload);

                state.isLoading = false;
                state.productsList = payload.products;
                state.availableProducts = payload.total;
                state.skip = payload.skip;
                state.limit = payload.limit;
            })
            .addCase(getListOfProducts.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            })
    }
})

export const {
    updateProductsURL, // FilterFeature
} = productsSlice.actions
export default productsSlice.reducer