import csrfFetch from "./csrf";

export const RECEIVE_ITEM = 'cartItem/RECEIVE_ITEM';
export const RECEIVE_ITEMS = 'cartItem/RECEIVE_ITEMS';
export const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';

const receiveItem = cartItem => ({
    type: RECEIVE_ITEM,
    cartItem
})

const receiveItems = cartItems => ({
    type: RECEIVE_ITEMS,
    cartItems
})

const removeItem = cartItemId => ({
    type: REMOVE_ITEM,
    cartItemId
})

//------------------------------------------------------------------------------

export const getCartItem = cartItemId => state => {
    return state?.cartItems ? state.cartItems[cartItemId] : null;
}

export const getCartItems = state => {
    return state?.cartItems ? Object.values(state.cartItems) : [];
}

//------------------------------------------------------------------------------

export const fetchCartItem = cartItemId => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

export const fetchCartItems = () => async dispatch => {
    const response = await csrfFetch('/api/cart_items'

    );

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItems(data));
    }
}

//------------------------------------------------------------------------------

export const createCartItem = cartItem => async dispatch => {
    const response = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

export const updateCartItem = (cartItem, action)=> async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}/${action}`, {
        method: 'PATCH',
        body: JSON.stringify({cartItem})
        
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

export const deleteCartItem = cartItemId => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    })
    dispatch(removeItem(cartItemId))
}

//------------------------------------------------------------------------------

const cartItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return action.cartItems;
        case RECEIVE_ITEM:
            return {...state, [action.cartItem.id] : action.cartItem};
        case REMOVE_ITEM:
            const newState = {...state};
            delete newState[action.cartItemId];
            return newState;
        default:
            return state;
    }
}

export default cartItemsReducer;