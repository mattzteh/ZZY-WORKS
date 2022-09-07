import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, getProducts } from '../../store/products';
import ProductIndexItem from '../ProductIndexItem';

const ProductIndexPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
        <ul>
            {
                products.map(product => <ProductIndexItem
                product = {product}
                key = {product.id}
                />)
            }
        </ul>
        </>
    )
}


export default ProductIndexPage;