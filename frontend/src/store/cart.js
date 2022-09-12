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


