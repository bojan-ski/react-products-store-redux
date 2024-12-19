import React from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCompareProductsList, removeProductFromCompareProductsList } from '../../features/products/compareProductsSlice'
// react-icons
import { TiArrowSyncOutline } from "react-icons/ti";
import { TiArrowSync } from "react-icons/ti";
// toastify
import { toast } from 'react-toastify'


const CompareProductsOption = ({ product }) => {    
    const { isLoading, compareProductsList } = useSelector(store => store.compareProducts)
    const dispatch = useDispatch()

    const handleAddProductToCompareProductsList = (product) => {
        if (compareProductsList.length > 1) {
            // warning message
            toast.warning('Only two products can be compared')
        } else {
            dispatch(addProductToCompareProductsList(product))

            // success message
            toast.success('Product added to compare list')
        }
    }

    const handleRemoveProductFromCompareProductsList = (id) => {
        dispatch(removeProductFromCompareProductsList({ productID: id }))

        // success message
        toast.success('Product removed from compare list')
    }

    const isProductInCompareList = compareProductsList && compareProductsList.some(selectedProduct => selectedProduct.id === product.id);

    return (
        <>
            {isProductInCompareList ? (
                <button className="btn" onClick={() => handleRemoveProductFromCompareProductsList(product.id)} disabled={isLoading}>
                    <TiArrowSync size={30} fill="orangered" />
                </button>
            ) : (
                <button className="btn" onClick={() => handleAddProductToCompareProductsList(product)} disabled={isLoading}>
                    <TiArrowSyncOutline size={30} fill="orangered" />
                </button>
            )}
        </>
    )
}

export default CompareProductsOption