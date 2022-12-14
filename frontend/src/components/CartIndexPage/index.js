import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, getCartItems } from '../../store/cart'
import CartIndexItem from '../CartIndexItem';
import './CartIndexPage.css'

const CartIndexPage = ({closeCartMenu}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);

    let cartMessage;
    if (cartItems.length === 0) {
        cartMessage = (
            <p className='cart-message'>Your cart is currently empty.</p>
        )
    } else {
        cartMessage = (
            <Link to='/checkout' style={{ textDecoration: 'none' }}>
            <div className='checkout-wrapper'>
                <button className='checkout' 
                onClick={() => closeCartMenu(false)}
                >Check out</button>
            </div>
            </Link>
        )
    }

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

            <ul>
                {
                    cartItems.map(cartItem => <li key={cartItem.id}><CartIndexItem
                        cartItem = {cartItem}
                        />
                    </li>)
                }
            </ul>
            {cartMessage}
        </div>
        </>
    )
}

export default CartIndexPage;