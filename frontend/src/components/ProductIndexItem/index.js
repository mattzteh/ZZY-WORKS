import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createCartItem } from '../../store/cart';
import './ProductIndexItem.css';
import { useDispatch } from 'react-redux';

const ProductIndexPage = ({product}) => {

    const photo = product.photoUrl[0];
    const [onHover, setOnHover] = useState(false)
    const dispatch = useDispatch();

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
                        <button className='index-add-cart'>Add to Cart</button>
                        
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