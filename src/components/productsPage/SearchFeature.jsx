import React from "react"
// redux
import { useDispatch, useSelector } from "react-redux"
import { searchForProducts, updateSearchTerm } from "../../features/products/productsSlice"
// toastify
import { toast } from "react-toastify"


const SearchFeature = ({ searchTerm, setSearchTerm, handleResetFilterOption }) => {
    const { disabledOption } = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handleSearchProduct = async e => {
        e.preventDefault()

        if (!searchTerm) return toast.warning('Please enter search term');

        dispatch(updateSearchTerm(searchTerm));
        dispatch(searchForProducts(`?q=${searchTerm}`));
    }

    return (
        <section className="search-product mb-4">

            <form onSubmit={handleSearchProduct}>
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-8 mb-3">
                        <input type="text" className="form-control" value={searchTerm} placeholder="Enter search term" onChange={e => setSearchTerm(e.target.value)} disabled={disabledOption} />
                    </div>

                    {/* row item 2 */}
                    {!disabledOption && (
                        <div className="col-12 col-md-4 mb-3">
                            <button type="submit" className="btn btn-orange-hover fw-bold text-white w-100">
                                Search
                            </button>
                        </div>
                    )}

                    {disabledOption && (
                        <div className="col-12 col-md-4 mb-3">
                            <button type="button" className="btn btn-warning fw-bold text-white w-100" onClick={handleResetFilterOption}>
                                Reset
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </section>
    )
}

export default SearchFeature