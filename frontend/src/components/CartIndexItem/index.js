import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCartItem, updateCartItem, deleteCartItem } from '../../store/cart';
import './CartIndexItem.css'

const CartIndexItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const photo = cartItem.photoUrl[0];

    const handleDecrement = (e) => {
        e.preventDefault();
        if (cartItem.quantity <= 1) {
            dispatch(deleteCartItem(cartItem.id))
        } else {
            dispatch(updateCartItem(cartItem, "decrement"))
        }
    } 


    return (
        <>
        <div className='cart-index-item'>
            <div className='cart-photo'>
                <Link to={`/products/${cartItem.productId}`}><img src={photo}/></Link>
            </div>

            <h1 className='cart-index-item-name'>{cartItem.name}</h1>

            <div className='quantity-and-price'>
                <div className='cart-buttons'>
                    <button onClick={handleDecrement}>-</button>
                    <h4>{cartItem.quantity}</h4>
                    <button onClick={() => dispatch(updateCartItem(cartItem, "increment"))}>+</button>
                </div>
                <h6>${cartItem.price}.00</h6>
            </div>

        </div>
        </>
    )
}

export default CartIndexItem;