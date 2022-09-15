import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductIndexItem";
import './SearchIndexPage.css'

const SearchIndexPage = () => {
    let products = useSelector(state => Object.values(state.products));

    let component;
    if (products.length <= 0) {
        component = (
            <>
            <h1 className="search-error-message">No Products Found!</h1>
            </>
        )
    } else {
        component = (  
            <></>   
    )}
    if(!products.length) return null

    return (
        <>
        {component}
            <div className="products">
                <ul >
                    {
                        products.map(product => <li key={product.id}><ProductIndexItem
                            product={product}
                            />
                            </li>)
                        }
                </ul>
            </div>
        </>
    )
}


export default SearchIndexPage;