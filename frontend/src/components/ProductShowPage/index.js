import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/products';
import './ProductShow.css'

const ProductShowPage = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId]);

    return (
        <div>
            <h1>{product.name}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductShowPage;