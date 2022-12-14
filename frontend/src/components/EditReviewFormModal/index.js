import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import EditReviewForm from './EditReviewForm';

function EditReviewFormModal({review}) {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="review-modal-button" onClick={() => setShowModal(true)}><i className="fa-solid fa-pen"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm review={review} showModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;