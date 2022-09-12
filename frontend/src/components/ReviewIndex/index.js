import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import { getReviews } from "../../store/reviews";
import ReviewIndexItem from "../ReviewIndexItem";
import './ReviewIndex.css';
import ReviewFormModal from "../ReviewFormModal";

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const productId = useParams();
    const reviews = useSelector(getReviews)
    const sessionUser = useSelector(state => state.session.user);

    let modalButton;
    if (sessionUser) {
        modalButton = (
        <ReviewFormModal/>
        )
    } else {
        modalButton = (
            <></>
        )
    }

    return (
    <>
        <div className="review">
            <h1>Reviews</h1>
            {modalButton}
        </div>
        <hr className="review-line"/>

        <ul>
            {
                reviews.map(review => <li key={review.id}><ReviewIndexItem
                    review = {review}
                    />
                </li>)
                }
        </ul>
    </>
    )
}

export default ReviewIndex;