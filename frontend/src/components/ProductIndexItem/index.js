import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createCartItem } from '../../store/cart';
import './ProductIndexItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/session';

const ProductIndexPage = ({product}) => {
    
    const dispatch = useDispatch();

    const photo = product.photoUrl[0];
    const [onHover, setOnHover] = useState(false)

    const currentUserId = useSelector(getCurrentUser)
    const productId = product.id;

    let cartItem = {
        user_id: currentUserId,
        product_id: productId,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCartItem(cartItem));
    }

    return (

    <div className='index-area'
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        >
            <div className='product-index'>
                <img className='product-photo' src={photo}/>
                <h1>{product.name}</h1>
                <h2>${product.price}.00</h2>         
            </div>
            {onHover && (
                <div className='product-index-buttons'>
                        <button 
                        onClick={handleSubmit}
                        className='index-add-cart'
                        >Add to Cart</button>
                        
                        <Link to={`/products/${product.id}`} 
                        style={{ textDecoration:'none'}}>
                            <button className='index-details'>More Details</button>
                        </Link>
                    </div>
        )}
    </div>

    )
}

export default ProductIndexPage;