import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartItem, fetchCartItems, getCartItems } from '../../store/cart'
import { getCurrentUser } from '../../store/session';
import CartIndexItem from '../CartIndexItem';
import './CartIndexPage.css'

const CartIndexPage = ({closeCartMenu}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const currentUserId = useSelector(getCurrentUser);


    useEffect(() => {
        dispatch(fetchCartItems());
    }, [])


    return (
        <>
        <div className='cart-page'>

            <div className='cart-page-header'>
                <h1>Cart</h1>
                <button 
                className="close-cart-button" 
                onClick={() => closeCartMenu(false)}>
                <i className="fa-solid fa-x"></i>
                </button>
            </div>

            <hr/>

            <ul>
                {
                    cartItems.map(cartItem => <li key={cartItem.id}><CartIndexItem
                        cartItem = {cartItem}
                        />
                    </li>)
                }
            </ul>
            <hr/>

            <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <div className='checkout-wrapper'>
                <button className='checkout' 
                onClick={() => closeCartMenu(false)}
                >Check out</button>
            </div>
            </Link>

        </div>
        </>
    )
}

export default CartIndexPage;