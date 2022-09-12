import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import ReviewForm from './ReviewForm';
import './ReviewForm.css'

function ReviewFormModal() {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  return (
    <>
      <button className="review-modal-button" onClick={() => setShowModal(true)}><i className="fa-solid fa-plus"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ReviewForm onSubmit={() => setShowModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default ReviewFormModal;