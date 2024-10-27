import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// redux
import { useDispatch } from "react-redux"
import { getListOfProducts, updateProductsURL } from "../../features/products/productsSlice"


const FilterFeature = ({ disabledOption, setDisabledOption, handleResetFilterOption, selectedCategory, setSelectedCategory }) => {
    const { categories } = useLoaderData()    

    const dispatch = useDispatch()

    const handleApplySelectedFilterOption = async (e) => {
        e.preventDefault()

        setDisabledOption(true)

        dispatch(updateProductsURL(`/category/${selectedCategory}`))

        const filterProductsListParameters = {
            updatedUrlOne: `/category/${selectedCategory}`,
            updatedUrlTwo: '?limit=12&skip=0'
        }
        dispatch(getListOfProducts(filterProductsListParameters))
    }


    return (
        <>
            <form onSubmit={handleApplySelectedFilterOption}>
                <select className="form-select mb-3" onChange={(e) => setSelectedCategory(e.target.value)} disabled={disabledOption}>
                    {categories.map(category => {
                        // console.log(category);
                        return <option key={category} value={category} className="capitalize">
                            {category}
                        </option>
                    })}
                </select>

                {!disabledOption && (
                    <button type="submit" className="fw-bold btn btn-success w-100">
                        Apply
                    </button>
                )}
            </form>
            {disabledOption && (
                <button type="button" className="fw-bold btn btn-warning w-100" onClick={handleResetFilterOption}>
                    Reset
                </button>
            )}
        </>
    )
}

export default FilterFeature