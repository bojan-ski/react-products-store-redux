import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// components
import SearchFeature from "./SearchFeature"
import FilterFeature from "./FilterFeature"


const SearchAndFilter = () => {
    const { listOfProductsFromDB } = useLoaderData()
    const { setAvailableProducts, setProductsList, setUpdatedURL, setCurrentPageNumber } = useGlobalContext()

    const [disabledOption, setDisabledOption] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')    

    const handleResetFilterOption = () => {
        setDisabledOption(false)
        setSearchTerm('')
        setAvailableProducts(listOfProductsFromDB.total)
        setProductsList(listOfProductsFromDB.products)
        setUpdatedURL('')
        setCurrentPageNumber(1)
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
                    />
                </div>
            </div>
        </section>
    )
}

export default SearchAndFilter