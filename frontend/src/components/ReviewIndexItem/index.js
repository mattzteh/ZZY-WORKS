import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import { getCurrentUser } from '../../store/session';
import './ReviewIndexItem.css'

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUser)

    let reviewButtons;

    if (review.userId == currentUserId) {
        reviewButtons = (
        <>
            <button className='review-buttons'><i className="fa-solid fa-pen"></i></button>
                <button className='review-buttons' onClick={() => dispatch(deleteReview(review.id))}>
                    <i className="fa-solid fa-trash"></i>
                </button>
        </>
        )
    } else {
        reviewButtons = (
            <>
            </>
        );
    }

    return (
        <div className='review-item'>
                <div className='review-header'>
                    <h2>{review.title}</h2>

                    <div className='review-icons'>
                        {reviewButtons}
                    </div>
                </div>
                <h4>{review.firstName} {review.lastName}</h4>
                <p>{review.body}</p>
        </div>
    )
}

export default ReviewIndexItem;