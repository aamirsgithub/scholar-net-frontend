import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
import styled from "styled-components";

Modal.setAppElement("#root");

const RatingModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    onSubmit(rating);
    setRating(0);
    onRequestClose();
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Rating Modal"
    >
      <ModalContent>
        <h2>Rate This Course</h2>
        <StarRating rating_star={rating} onChange={handleRatingChange} />
        <SubmitButton onClick={handleSubmit}>Submit Rating</SubmitButton>
      </ModalContent>
    </CustomModal>
  );
};

const CustomModal = styled(Modal)`
  margin-top: 200px;
  overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
  content {
    width: 300px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ModalContent = styled.div`
  text-align: center;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RatingModal;
