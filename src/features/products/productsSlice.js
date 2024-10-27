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
    searchTerm: '',
    updatedURL: ''
}

// used in : Dashboard, SearchFeature, FilterFeature, Pagination
export const getListOfProducts = createAsyncThunk('products/getListOfProducts', async (parameters) => {
    // console.log(parameters);

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

// used in : SearchAndFilter
export const resetListOfProducts = createAsyncThunk('products/resetListOfProducts', async (parameters) => {
    // console.log(parameters);

    try {
        const response = await axios.get(`${url}${parameters}`)
        const data = await response.data

        return data
    } catch (error) {
        console.error(error);
    }
})

// used in : Dashboard, ProductsList, Pagination
const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        updateSearchTerm: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.searchTerm = payload 

            // loading false
            state.isLoading = false                       
        },
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
            .addCase(resetListOfProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetListOfProducts.fulfilled, (state, { payload }) => {
                // console.log(payload);

                state.isLoading = false;
                state.productsList = payload.products;
                state.availableProducts = payload.total;
                state.skip = payload.skip;
                state.limit = payload.limit;
                state.searchTerm = '';
                state.updatedURL = '';
            })
            .addCase(resetListOfProducts.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
            })
    }
})

export const {
    updateSearchTerm, // SearchFeature
    updateProductsURL, // FilterFeature
} = productsSlice.actions

export default productsSlice.reducer