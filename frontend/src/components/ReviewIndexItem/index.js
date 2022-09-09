import { useDispatch } from 'react-redux';
import './ReviewIndexItem.css'

const ReviewIndexItem = ({review}) => {
    const dispatch = useDispatch();

    return (
        <div className='review-item'>
            <li>
                <div className='review-header'>
                    <h2>{review.title}</h2>
                    <div className='review-icons'>
                        <i className="fa-solid fa-pen"></i>
                        <i className="fa-solid fa-trash"></i>
                    </div>
                </div>
                <h4>{review.firstName} {review.lastName}</h4>
                <p>{review.body}</p>
            </li>
        </div>
    )
}

export default ReviewIndexItem;