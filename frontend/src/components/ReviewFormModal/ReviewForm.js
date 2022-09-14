import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import { useState } from "react";

const ReviewForm = ({showModal}) => {
    const dispatch = useDispatch();
    const { productId }  = useParams();

    const [rating, setRating] = useState(1);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [errors, setErrors] = useState([]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createReview({rating, title, body, product_id: productId}));
        showModal(false);
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
            <ul className="errorbox">
                {errors.map((error) => <li className="errors" key={error}>{error}</li>)}
            </ul>

            <h2>Write a Review</h2>
            <label>Title
                <br/>
                <input
                type='text'
                value={title}
                placeholder='Title your review here...'
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
                placeholder='Write your review here...'
                onChange={update('body')}
                required
                />
            </label>

            <label>Rating
                <br/>
                <input
                type='number'
                step="1"
                min='1'
                max='5'
                value={rating}
                onChange={update('rating')}
                required
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

export default ReviewForm;