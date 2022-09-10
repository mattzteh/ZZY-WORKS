import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import { useState } from "react";
import { getCurrentUser } from "../../store/session";

const ReviewForm = () => {
    const { productId }  = useParams();
    const currentUserId = useSelector(getCurrentUser)
    let review = {
        rating: 0,
        title: '',
        body: '',
        userId: currentUserId,
        productId: productId
    }
    
    const [rating, setRating] = useState(review.rating);
    const [title, setTitle] = useState(review.title);
    const [body, setBody] = useState(review.body);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        review = {...review, rating, title, body};
        dispatch(createReview(productId, review))
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
                <input
                type='text'
                value={rating}
                onChange={update('rating')}
                />
            </label>

            <input type="submit"/>

       </form>
       </>
    )
}

export default ReviewForm;