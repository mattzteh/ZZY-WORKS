import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductIndexItem";

const SearchIndexPage = () => {
    const products = useSelector(state => Object.values(state.products));

    return (
        <>
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