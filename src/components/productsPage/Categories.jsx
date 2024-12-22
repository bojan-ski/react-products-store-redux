import React from 'react'
import { useLoaderData } from 'react-router-dom'
// redux
import { useDispatch } from 'react-redux'
import { getListOfProducts, updateProductsURL } from '../../features/products/productsSlice'
// utils
import scrollToTop from '../../utils/scrollToTop'


const Categories = ({ setCurrentPageNumber, setDisabledOption, setSearchTerm }) => {
    const { categories } = useLoaderData()   

    const dispatch = useDispatch()

    const handleResetFilterOption = () => {
        setSearchTerm('')
        setCurrentPageNumber(1)
        
        const resetProductsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
        }
        dispatch(getListOfProducts(resetProductsListParameters))
        dispatch(updateProductsURL(''))

        setDisabledOption(false)
    }

    const handleApplySelectedFilterOption = async (selectedCategory) => {
        scrollToTop()
        setDisabledOption(true)
        setCurrentPageNumber(1)

        dispatch(updateProductsURL(`/category/${selectedCategory}`))

        const filterProductsListParameters = {
            updatedUrlOne: `/category/${selectedCategory}`,
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
        }
        dispatch(getListOfProducts(filterProductsListParameters))
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