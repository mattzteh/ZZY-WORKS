import './ProductIndexItem.css';
import {useState} from "react";
import { Link } from 'react-router-dom';

const ProductIndexPage = ({product}) => {
    
    const photo = product.photoUrl[0];

    return (
    <div className='index-area'>
        <div className='product-index'>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}><img className='product-photo' src={photo}/>
            <h1>{product.name}</h1>
            <h2>${product.price}.00</h2>
            </Link>
            
        </div>
    </div>

    )
}

export default ProductIndexPage;