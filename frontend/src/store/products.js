import csrfFetch from "./csrf"

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = payload => ({
    type: RECEIVE_PRODUCT,
    payload
})

export const getProducts = state => {
    return state?.products ? Object.values(state.products) : [];
}

export const getProduct = productId => state => {
    return state?.products ? state.products[productId] : null;
}

export const fetchProducts = () => async dispatch => {
    const response = await csrfFetch('/api/products')

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveProducts(data));
        return data;
    }
}

export const fetchProduct = (productId) => async dispatch => {
    
    const response = await csrfFetch(`/api/products/${productId}`)

    if (response.ok) {
        const data = await response.json();
       dispatch(receiveProduct(data));
        // data;
    }
}

const productsReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({},state)
    // debugger
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {...action.products};
        case RECEIVE_PRODUCT:
            newState[action.payload.product.id] = action.payload.product
            // return {...state, [action.product.id]: action.product};
            return newState
        default:
            return state;
    }
}

export default productsReducer;