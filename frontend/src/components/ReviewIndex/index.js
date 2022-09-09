import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import { getReviews } from "../../store/reviews";
import ReviewIndexItem from "../ReviewIndexItem";
import './ReviewIndex.css';

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const productId = useParams();
    const reviews = useSelector(getReviews)

    useEffect(() => {
        // dispatch(fetchProduct())
    })

    return (
    <>
        <div className="review">
            <h1>Reviews</h1>
            <hr/>
        </div>
        <ul>
            {
                reviews.map(review => <ReviewIndexItem
                    review = {review}
                    key = {review.id}
                    />
                    )
                }
        </ul>
    </>
    )
}

export default ReviewIndex;