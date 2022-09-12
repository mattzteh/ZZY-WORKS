import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import { getCurrentUser } from "../../store/session";

const ReviewForm = () => {
    const dispatch = useDispatch();
    const { productId }  = useParams();

    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({rating, title, body, product_id: productId}))
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
            <h2>Write a Review</h2>
            <label>Title
                <br/>
                <input
                type='text'
                value={title}
                onChange={update('title')}
                />
            </label>

            <label>Review
                <br/>
                <input
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
                value={rating}
                onChange={update('rating')}
                />
            </label>

            <input 
            className="review-button" 
            type="submit" 
            value='Submit Review'
            onClick={() => window.location.reload()}
            />

       </form>
    </div>
    </>
    )
}

export default ReviewForm;