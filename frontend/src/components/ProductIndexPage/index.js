import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem';
import './ProductIndex.css'

const ProductIndexPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

   

    return (
        <>
        <div className="products">
            <ul >
                {
                    products.map(product => <li key={product.id}><ProductIndexItem
                        product = {product}
                        />
                        </li>)
                    }
            </ul>
        </div>
        </>
    )
}


export default ProductIndexPage;