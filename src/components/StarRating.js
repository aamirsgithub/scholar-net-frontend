import React, { useState } from 'react';
import {BsStar, BsStarHalf, BsStarFill} from "react-icons/bs";
import styled from "styled-components";

const StarRating = ({ rating_star, onChange }) => {
  const [hoverRating, setHoverRating] = useState(0); // Track hover state to show preview
  const stars = Array.from({length: 5}, (_, idx) => {
    const val = idx + 1;
    return (
      <Star key={idx} onClick={() => onChange(val)} onMouseEnter={() => setHoverRating(val)} onMouseLeave={() => setHoverRating(0)}>
        {
          (hoverRating >= val || rating_star >= val) ? (<BsStarFill />) : (hoverRating >= val - 0.5 && hoverRating < val) ? (<BsStarHalf />) : (<BsStar />)
        }
      </Star>
    )
  });

  return (
    <div>{stars}</div>
  )
}

const Star = styled.span`
  color: #e59819;
  margin-right: 2px;
  font-size: 20px;
  margin-bottom: -5px!important;
  cursor: pointer;

  &:hover {
    color: #f1c40f;
  }
`;

export default StarRating;
