// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getReviews } from "../../store/reviews";
// import { getCurrentUser } from "../../store/session";
// import { useState } from "react";
// import { getProduct } from "../../store/products";

// const ReviewForm = () => {
//     const { productId } = useParams();
//     const formType = reviewId ? 'Edit Review' : 'Create Review';
//     const reviews = useSelector(getReviews);
//     let review = useSelector(getProduct(payload.reviews.))
//     let userReviews = reviews;
//     const currentUserId = useSelector(getCurrentUser);

//     if (formType === 'Create Review') {
//         review = {
//             title: '',
//             body: '',
//             rating: 0
//         }
//     }

//     const [title, setTitle] = useState(review.title);
//     const [body, setBody] = useState(review.body);
//     const [rating, setRating] = useState(review.rating);


//     return (
//        <>
//        <form></form>
//        </>
//     )
// }

// export default ReviewForm;