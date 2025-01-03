import React from 'react'
import { useLoaderData } from 'react-router-dom'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getListOfProducts, updateProductsURL } from '../../features/products/productsSlice'
// utils
import scrollToTop from '../../utils/scrollToTop'


const Categories = ({ setSearchTerm, handleResetFilterOption }) => {
    const { categories } = useLoaderData()

    const { productsLimit, selectedCategory } = useSelector(state => state.products)
    const dispatch = useDispatch()    

    const handleApplySelectedFilterOption = async (selectedCategory) => {
        scrollToTop()

        dispatch(updateProductsURL(`/category/${selectedCategory}`))
        setSearchTerm('')

        const filterProductsListParameters = {
            updatedUrlOne: `/category/${selectedCategory}`,
            updatedUrlTwo: `?limit=${productsLimit}&skip=0`
        }

        dispatch(getListOfProducts(filterProductsListParameters))
    }    

    return (
        <section className='categories'>
            <button className={`btn btn-orange-hover text-start text-capitalize w-100 mb-1 ${selectedCategory == 'all' && 'selected-category'}`} value={'all'} onClick={() => handleResetFilterOption()}>
                All
            </button>
            {categories.map(category => {
                return <button className={`btn btn-orange-hover text-start text-capitalize w-100 mb-1 ${selectedCategory == category && 'selected-category'}`} value={category} key={category} onClick={() => handleApplySelectedFilterOption(category)}>
                    {category}
                </button>
            })}
        </section>
    )
}

export default Categories