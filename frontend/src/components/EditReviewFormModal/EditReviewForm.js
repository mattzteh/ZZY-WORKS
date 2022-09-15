import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";
import { useState } from "react";

const EditReviewForm = ({review, showModal}) => {

    const [rating, setRating] = useState(review.rating);
    const [title, setTitle] = useState(review.title);
    const [body, setBody] = useState(review.body);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        const newReview = {
            rating: rating,
            title: title,
            body: body,
            id: review.id
        }
        e.preventDefault();
        dispatch(updateReview(newReview)).then(()=>showModal(false))
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
                value={title}
                onChange={update('title')}
                required
                />
            </label>

            <label>Review
                <br/>
                <textarea
                className="review-input"
                type='text'
                value={body}
                onChange={update('body')}
                />
            </label>

            <label>Rating
                <br/>
                <input
                type='number'
                step="1"
                min="1"
                max="5"
                value={rating}
                onChange={update('rating')}
                />
            </label>

            <input 
            className="review-button" 
            type="submit" 
            value='Submit Review'
            />

       </form>
    </div>
    </>
    )
}

export default EditReviewForm;