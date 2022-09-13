import './CartIndexItem.css'

const CartIndexItem = ({cartItem}) => {

    return (
        <>
        <h1>{cartItem.productId.name}</h1>
        </>
    )
}

export default CartIndexItem;