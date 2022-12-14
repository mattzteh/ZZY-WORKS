import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory} from 'react-router-dom';
import { createCartItem } from '../../store/cart';
import { fetchProduct, getProduct } from '../../store/products';
import { getCurrentUser } from '../../store/session';
import ReviewIndex from '../ReviewIndexPage';
import './ProductShow.css'

const ProductShowPage = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(getProduct(productId));
    const [isOpen, setIsOpen] = useState(false);
    const currentUserId = useSelector(getCurrentUser);
    const sessionUser = useSelector(state => state.session.user);


    let cartItem = {
        user_id: currentUserId,
        product_id: productId,
    };

    useEffect(() => {
        dispatch(fetchProduct(productId)); 
    }, []);    
    
    const handleSubmit = (e) => {
        if (!sessionUser) {
            history.push('/login')
        } else {
            dispatch(createCartItem(cartItem))
        }
    }
    
    if (!product) return null;

    const photo = product.photoUrl[0];
    return (
    <>
        <div className='showpage'>

            <div className='left-column'>
                <img src={photo} alt="product-image"/>
            </div>

            <div className='right-column'>
                <div className='product-info'>
                    <h1>{product.name}</h1>
                    <h2>${product.price}.00</h2>
                    <p>Tax included. Shipping calculated at checkout.</p>
                    <hr/>
                    <div className='product-buttons'>


                        <button onClick={handleSubmit}
                        className='cart-button'>Add to cart
                        </button>



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
        <div className='review-div'>  
        <ReviewIndex />
        </div>
    </>
    )
}

export default ProductShowPage;