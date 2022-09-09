import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/products';
import ReviewForm from '../ReviewForm';
import ReviewIndex from '../ReviewIndex';
import './ProductShow.css'

const ProductShowPage = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // debugger
        dispatch(fetchProduct(productId));
        
    }, []);    
    
    
    if (!product) return null;

    const photo = product.photoUrl[0];
    return (
    <>
        <div className='showpage'>

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
                                <i className="fa-solid fa-arrow-up"></i> :               
                                <i className="fa-solid fa-arrow-down"></i> 
                            }</div>
                                </button>
                                {isOpen && <div className='collapse-content'>{product.description}</div>}
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>  
        </div>
        <ReviewIndex/>
        {/* <ReviewForm /> */}
    </>
    )
}

export default ProductShowPage;