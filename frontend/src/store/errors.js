export const GET_REVIEW_REQUEST = 'errors/GET_REVIEW_REQUEST'
export const GET_REVIEW_SUCCESS = 'errors/GET_REVIEW_SUCCESS'
export const GET_REVIEW_ERROR = 'error/GET_REVIEW_ERROR'

const getReviewRequest = () => ({
    type: GET_REVIEW_REQUEST
})

const getReviewSuccess = review => ({
    type: GET_REVIEW_SUCCESS,
    review
})

const getReviewError = error => ({
    type: GET_REVIEW_ERROR,
    error: error
})


const errorsReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_REVIEW:

    }

}

export default errorsReducer;