import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// axios
import axios from "axios"


const url = `${import.meta.env.VITE_DUMMYJSON_PRODUCTS_API_URL}`;

const initialProductsState = {
    isLoading: false,
    productsList: {},
    availableProducts: 0,
    updatedURL: '',
    selectedCategory: 'all',
    searchTerm: '',
    disabledOption: false,
    productsLimit: 12,
    productsSkipNumber: 0,
    currentPageNumber: 1
}

// used in: Products, Categories, Pagination
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
        return null;
    };
})

// used in: SearchFeature
export const searchForProducts = createAsyncThunk('products/searchForProducts', async (parameters) => {
    try {
        const response = await axios.get(`${url}/search${parameters}`)
        const data = await response.data

        return data
    } catch (error) {
        return null;
    }
})

// used in: Products, Categories, ProductsList
const productsSlice = createSlice({
    name: 'products',
    initialState: initialProductsState,
    reducers: {
        updateSearchTerm: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.searchTerm = payload
            state.disabledOption = true

            // loading false
            state.isLoading = false
        },
        updateProductsURL: (state, { payload }) => {
            const selectedCategory = payload.split("/").filter(Boolean)[1];
                        
            // loading true
            state.isLoading = true

            // update state
            state.updatedURL = payload
            state.selectedCategory = selectedCategory
            state.searchTerm = ''
            state.disabledOption = false
            state.currentPageNumber = 1
            state.productsSkipNumber = 0

            // loading false
            state.isLoading = false
        },
        updateProductsCurrentPage: (state, { payload }) => {
            // loading true
            state.isLoading = true

            // update state
            state.productsSkipNumber = payload.productsSkipNumber
            state.currentPageNumber = payload.currentPageNumber

            // loading false
            state.isLoading = false
        },
        resetProductsPage: (state) => {
            // loading true
            state.isLoading = true

            // update state
            state.updatedURL = ''
            state.selectedCategory = ''
            state.searchTerm = ''
            state.currentPageNumber = 1
            state.productsSkipNumber = 0
            state.disabledOption = false

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
    updateSearchTerm, // SearchFeature
    updateProductsURL, // Categories, Pagination
    updateProductsCurrentPage, // Pagination
    resetProductsPage, // Products
} = productsSlice.actions

export default productsSlice.reducer