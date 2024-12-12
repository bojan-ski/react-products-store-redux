import { useState } from "react"
// redux
import { useDispatch } from "react-redux"
import { getListOfProducts, updateProductsURL } from "../../features/products/productsSlice"
// components
import SearchFeature from "./SearchFeature"
import FilterFeature from "./FilterFeature"


const SearchAndFilter = ({ setCurrentPageNumber }) => {
    const [disabledOption, setDisabledOption] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('beauty')

    const dispatch = useDispatch()

    const handleResetFilterOption = () => {
        setDisabledOption(false)
        setSearchTerm('')
        setSelectedCategory('beauty')
        setCurrentPageNumber(1)

        const resetProductsListParameters = {
            updatedUrlOne: '',
            updatedUrlTwo: `?limit=${import.meta.env.VITE_DUMMYJSON_PRODUCTS_SKIP}&skip=0`
        }
        dispatch(getListOfProducts(resetProductsListParameters))
        dispatch(updateProductsURL(''))
    }

    return (
        <section className="search-filter-option mb-5">
            <div className="row">

                {/* row item 1 */}
                <div className="search-option col-12 col-md-6 mb-3">
                    <SearchFeature
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        disabledOption={disabledOption}
                        setDisabledOption={setDisabledOption}
                        handleResetFilterOption={handleResetFilterOption}
                    />
                </div>

                {/* row item 2 */}
                <div className="filter-option col-12 col-md-6 mb-3">
                    <FilterFeature
                        disabledOption={disabledOption}
                        setDisabledOption={setDisabledOption}
                        handleResetFilterOption={handleResetFilterOption}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        setCurrentPageNumber={setCurrentPageNumber}
                    />
                </div>
            </div>
        </section>
    )
}

export default SearchAndFilter