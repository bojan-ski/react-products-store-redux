import React from 'react'
import { useLoaderData } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getListOfProducts, resetProductsPage, updateProductsURL } from '../../features/products/productsSlice'
// utils
import scrollToTop from '../../utils/scrollToTop'


const Categories = () => {
    const { categories } = useLoaderData()

    const { productsLimit } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleApplySelectedFilterOption = async (selectedCategory) => {
        scrollToTop()

        dispatch(updateProductsURL(`/category/${selectedCategory}`))

        const filterProductsListParameters = {
            updatedUrlOne: `/category/${selectedCategory}`,
            updatedUrlTwo: `?limit=${productsLimit}&skip=0`
        }

        dispatch(getListOfProducts(filterProductsListParameters))
    }

    const handleResetFilterOption = () => {
        const resetProductsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
        }

        dispatch(getListOfProducts(resetProductsListParameters))
        dispatch(resetProductsPage())
    }

    return (
        <section className='categories'>
            <button className='btn btn-orange-hover text-start text-capitalize w-100 my-1' value={'all'} onClick={() => handleResetFilterOption()}>
                All
            </button>
            {categories.map(category => {
                return <button className='btn btn-orange-hover text-start text-capitalize w-100 my-1' value={category} key={category} onClick={() => handleApplySelectedFilterOption(category)}>
                    {category}
                </button>
            })}
        </section>
    )
}

export default Categories