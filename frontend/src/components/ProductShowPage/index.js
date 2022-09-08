import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/products';
import './ProductShow.css'

const ProductShowPage = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const [isOpen, setIsOpen] = useState(false);
    // const [loading,setLoading] = useState(true)
    // const [product, setProduct] = useState({});
    
    useEffect(() => {
        dispatch(fetchProduct(productId));
        
    }, [productId]);
    
    
    const photo = product.photoUrl[2]? product.photoUrl[2] : product.photoUrl[0];
    // if(!product) return null;

    return (
    <div className='showpage'>
        {console.log(productId)}
        <div className='left-column'>
            <img src={photo}/>
        </div>

        <div className='right-column'>
            <div className='product-info'>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <p>Tax included. Shipping calculated at checkout.</p>
                <hr/>
                <div className='product-buttons'>
                    <button className='cart-button'>Add to cart</button>
                    <div className='collapse'>
                        <button className='desc-button' onClick={() => setIsOpen(!isOpen)}>
                            DESCRIPTION
                            <div className='desc-icon'>{isOpen ? 
                            <i class="fa-solid fa-arrow-up"></i> :               
                            <i class="fa-solid fa-arrow-down"></i> 
                        }</div>
                            </button>
                            {isOpen && <div className='collapse-content'>{product.description}</div>}
                    </div>
                </div>
                <hr/>
            </div>
        </div>  

    </div>
    )
}

export default ProductShowPage;