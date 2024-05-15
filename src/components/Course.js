import React from "react";
import styled from "styled-components";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";
import DefaultImg from "../assets/images/img100.jpg";

const CourseCard = ({
  _id,
  image,
  course_name,
  actual_price,
  discounted_price,
  rating_count,
  rating_star,
  instructor_name,
  instructor_email,
  category,
  addToCart,
  CompleteCourse,
  myCourse = false,
}) => {
  const navigate = useNavigate();

  const handleSeeDetailsClick = () => {
    navigate(`/courses/${_id}`, {
      state: {
        CompleteCourse,
      },
    });
  };

  console.log("CompleteCourse:", CompleteCourse);

  const imageUrl = image
    ? myCourse
      ? image
      : `http://localhost:5000/${image.replace(/\\/g, "/")}`
    : DefaultImg;

  return (
    <MainContainer>
      <div className="item-img">
        {/* <img
          src={`http://localhost:5000/${image.replace(/\\/g, "/")}`}
          alt={course_name}
          style={{ width: "100%", height: "200px" }}
        /> */}

        {/* <img
          src={
            image
              ? `http://localhost:5000/${image.replace(/\\/g, "/")}`
              : DefaultImg
          }
          alt={course_name}
          style={{ width: "100%", height: "200px" }}
        /> */}

        <img
          src={imageUrl}
          alt={course_name}
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div className="item-body">
        <div>
          <h5 className="item-name">{course_name}</h5>
        </div>

        <span className="item-creator">Created By: {instructor_name}</span>
        <br />
        <span className="item-creator">Email: {instructor_email}</span>

        <div className="item-rating">
          <span className="rating-star-val">{rating_star}</span>
          <StarRating rating_star={rating_star} />
          <span className="rating-count">({rating_count})</span>
        </div>

        <div className="item-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div>
      </div>
      <div className="item-btns">
        <button
          onClick={handleSeeDetailsClick}
          className="item-btn see-details-btn"
        >
          See Details
        </button>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 320px;
  height: 435px;
  cursor: pointer;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02) translateY(-10px); // Modified transform
    box-shadow: rgba(0, 0, 0, 0.15) 0px 16px 30px;
    border: 1px solid orange;
  }
  .item-body {
    padding: 16px;
    text-align: left;

    .item-name {
      font-size: 18px;
      font-weight: bold;
    }
    .item-creator {
      font-size: 14px;
      color: #666;
    }
    .item-rating {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    .item-price-new {
      color: #008000;
      font-weight: bold;
    }
    .item-price-old {
      margin-left: 8px;
      color: #999;
      text-decoration: line-through;
    }
  }

  .item-btns {
    padding: 10px 16px;
    background-color: #f8f8f8;
    border-top: 1px solid #eee;

    .item-btn {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      margin-right: 5px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }

      &.see-details-btn {
        background-color: black;
        border: 1px solid var(--clr-black);
        margin-right: 5px;
      }
    }
  }
`;

export default CourseCard;
