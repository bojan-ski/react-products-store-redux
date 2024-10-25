// context
import { useGlobalContext } from "../../context"
// api func
import fetchDataFromDummyJSON from "../../api/fetchDataFromDummyJSON"

// redux
import { useDispatch } from "react-redux"
import { getListOfProducts } from "../../features/products/productsSlice"
// toastify
import { toast } from "react-toastify"


const SearchFeature = ({ searchTerm, setSearchTerm, disabledOption, setDisabledOption, handleResetFilterOption }) => {
    // const { setAvailableProducts, setProductsList, setCurrentPageNumber } = useGlobalContext()

    // const handleSearchProduct = async e => {
    //     e.preventDefault()

    //     if (!searchTerm) return alert('please enter search term')

    //     setDisabledOption(true)

    //     const searchResults = await fetchDataFromDummyJSON(`/search`, `?q=${searchTerm}`)

    //     setAvailableProducts(searchResults.total)
    //     setProductsList(searchResults.products)
    //     setCurrentPageNumber(1)
    // }

    const dispatch = useDispatch()

    const handleSearchProduct = async e => {
        e.preventDefault()

        if (!searchTerm) return toast.error('please enter search term')

        setDisabledOption(true)

        // dummyjson funcs - products
        const searchProductsListParameters = {
            updatedUrlOne: `/search`,
            updatedUrlTwo: `?q=${searchTerm}`
        }

        dispatch(getListOfProducts(searchProductsListParameters));
    }

    return (
        <>
            <form onSubmit={handleSearchProduct} className="text-center">
                <input type="text" className="form-control mb-3" value={searchTerm} placeholder="Enter search term" onChange={e => setSearchTerm(e.target.value)} disabled={disabledOption} />

                {!disabledOption && (
                    <button type="submit" className="fw-bold btn btn-success w-100">
                        Search
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

export default SearchFeature