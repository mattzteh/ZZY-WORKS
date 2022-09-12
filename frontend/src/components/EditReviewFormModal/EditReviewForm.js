import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateReview } from "../../store/reviews";
import { useState } from "react";
import { getCurrentUser } from "../../store/session";

const EditReviewForm = (review) => {
    
    const [rating, setRating] = useState(review.rating);
    const [title, setTitle] = useState(review.title);
    const [body, setBody] = useState(review.body);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateReview(review.rating, review.title, review.body))
    }

    const update = (field) => {
        return e => {
            switch (field) {
                case 'rating':
                    setRating(e.currentTarget.value);
                    break;
                case 'title':
                    setTitle(e.currentTarget.value);
                    break;
                case 'body':
                    setBody(e.currentTarget.value);
                    break;
                default:
                    console.log('Field name error.');
                    break;
            }
        }
    }

    return (
    <>
    <div className="review-form-container">

        <form className="review-form" onSubmit={handleSubmit}>
            <h2>Edit Your Review</h2>
            <label>Title
                <br/>
                <input
                type='text'
                value={review.title}
                onChange={update('title')}
                />
            </label>

            <label>Review
                <br/>
                <input
                type='text'
                value={review.body}
                onChange={update('body')}
                />
            </label>

            <label>Rating
                <br/>
                <input
                type='number'
                step="1"
                value={review.rating}
                onChange={update('rating')}
                />
            </label>

            <input className="review-button" type="submit" value='Submit Review'/>

       </form>
    </div>
    </>
    )
}

export default EditReviewForm;