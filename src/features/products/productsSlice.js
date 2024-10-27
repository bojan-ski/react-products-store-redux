import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// axios
import axios from "axios"


const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`

const initialProductsState = {
    isLoading: false,
    productsList: {},
    availableProducts: 0,
    updatedURL: ''
}

// used in: Dashboard, FilterFeature, Pagination
export const getListOfProducts = createAsyncThunk('products/getListOfProducts', async (parameters) => {
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

// used in: SearchFeature
export const searchForProducts = createAsyncThunk('products/searchForProducts', async (parameters) => {
    try {
        const response = await axios.get(`${url}/search${parameters}`)
        const data = await response.data

        return data
    } catch (error) {
        console.error(error);
    }
})

// used in: Dashboard, ProductsList, Pagination
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
        },
    },
    extraReducers: (builder) => {
        builder
            // getListOfProducts
            .addCase(getListOfProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getListOfProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.productsList = payload.products;
                state.availableProducts = payload.total;
            })
            .addCase(getListOfProducts.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            })
            // searchForProducts
            .addCase(searchForProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchForProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                payload.products.length > 12 ? state.productsList = payload.products.slice(0, 12) : state.productsList = payload.products;
                payload.products.length > 12 ? state.availableProducts = 12 : state.availableProducts = payload.total;
            })
            .addCase(searchForProducts.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            })
    }
})

export const {
    updateProductsURL, // FilterFeature
} = productsSlice.actions

export default productsSlice.reducer