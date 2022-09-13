import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, getCartItems } from '../../store/cart'
import { fetchProducts } from '../../store/products';
import { getCurrentUser } from '../../store/session';
import CartIndexItem from '../CartIndexItem';
import './CartIndexPage.css'

const CartIndexPage = ({closeCartMenu}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const currentUserId = useSelector(getCurrentUser);


    useEffect(() => {
        dispatch(fetchCartItems());
        // dispatch(fetchProducts());
    }, [cartItems.length])


    return (
        <>
        <button 
        className="close-cart-button" 
        onClick={() => closeCartMenu(false)}>
        </button>

        <h1>Cart</h1>
        
            {
                cartItems.map(cartItem => <li key= {cartItem.id}><CartIndexItem
                    cartItem = {cartItem}
                />
                </li>)
            }
        </>
    )
}

export default CartIndexPage;