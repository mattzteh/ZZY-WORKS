import { useSelector } from "react-redux";
import { getReviews } from "../../store/reviews";
import ReviewIndexItem from "../ReviewIndexItem";
import './ReviewIndex.css';
import ReviewFormModal from "../ReviewFormModal";

const ReviewIndex = () => {
    const reviews = useSelector(getReviews)
    const sessionUser = useSelector(state => state.session.user);

    function _isContains(json, value) {
        let contains = false;
        Object.keys(json).some(key => {
            contains = typeof(json[key]) == 'object' ?
            _isContains(json[key], value) : json[key] === value;
            return contains;
        })
        return contains
    }


    let modalButton;
    if (sessionUser && !(_isContains(reviews, sessionUser.id))) {
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