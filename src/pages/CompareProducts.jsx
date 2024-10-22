// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"
import CompareProductCard from "../components/compareProductsPage/CompareProductCard"


const CompareProducts = () => {
    const { compareProductsList } = useGlobalContext()
    // console.log(compareProductsList);

    return (
        <div className="compare-products-page">
            <PageHeader page='Compare Products' />

            <div className="container">
                <div className="row">
                    {!compareProductsList || compareProductsList.length == 0 ? (
                        <h1 className="text-center">No products were selected for comparison</h1>
                    ) : (
                        compareProductsList?.map(product => {
                            // console.log(product)

                            return <CompareProductCard key={product.id} product={product}/>
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

export default CompareProducts