// redux
import { useDispatch } from "react-redux"
import { searchForProducts } from "../../features/products/productsSlice"
// toastify
import { toast } from "react-toastify"


const SearchFeature = ({ searchTerm, setSearchTerm, disabledOption, setDisabledOption, handleResetFilterOption }) => {
    const dispatch = useDispatch()

    const handleSearchProduct = async e => {
        e.preventDefault()

        if (!searchTerm) return toast.error('Please enter search term')

        setDisabledOption(true)

        dispatch(searchForProducts(`?q=${searchTerm}`));
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