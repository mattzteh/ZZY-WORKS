import csrfFetch from "./csrf";

export const RECEIVE_ITEM = 'cartItem/RECEIVE_ITEM';
export const RECEIVE_ITEMS = 'cartItem/RECEIVE_ITEMS';
export const REMOVE_ITEM = 'cartItem/REMOVE_ITEM';

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})

const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

const removeItem = itemId => ({
    type: REMOVE_ITEM,
    itemId
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
    const response = await csrfFetch(`/api/cartItems/${cartItemId}`);

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

export const fetchCartItems = () => async dispatch => {
    const response = await csrfFetch('/api/cartItems');

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItems(data));
    }
}

//------------------------------------------------------------------------------

const createCartItem = cartItem => async dispatch => {
    const response = await csrfFetch('/api/cartItems', {
        method: 'POST',
        body: JSON.stringify(cartItem)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

const updateCartItem = cartItem => async dispatch => {
    const response = await csrfFetch(`/api/cartItems/${cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartItem)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveItem(data));
    }
}

const deleteCartItem = cartItemId => async dispatch => {
    const response = await csrfFetch(`/api/cartItems/${cartItemId}`, {
        method: 'DELETE'
    })
    dispatch(removeItem(cartItemId))
}

//------------------------------------------------------------------------------

const cartItemsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return {...state.cartItems};
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