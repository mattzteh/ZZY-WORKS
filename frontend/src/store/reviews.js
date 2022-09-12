import csrfFetch from "./csrf"
import { RECEIVE_PRODUCT } from "./products"

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReviews = state => {
    return state?.reviews ? Object.values(state.reviews) : [];
}

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
    }
}

export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeReview(reviewId));
    }
}


const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return { ...state, ...action.payload.reviews }
        case RECEIVE_REVIEW:
            return { ...state, [action.review.id] : action.review }
        case REMOVE_REVIEW:
            const newState = { ...state }
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;