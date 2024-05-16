import React, { useState, useEffect } from "react";
import styled from "styled-components";
import StarRating from "../components/StarRating";
import { useNavigate, useLocation } from "react-router-dom";
import DefaultImg from "../assets/images/img100.jpg";
import RatingModal from "./RatingModal";
import StarRatingStatic from "./StarRatingStatic";
import { FlexDiv } from "../components/common/Style";

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

  onDelete,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = () => {
    setIsRatingOpen(true);
  };

  const handleCloseRating = () => {
    setIsRatingOpen(false);
  };

  // const handleRatingSubmit = (rating) => {
  //   // Logic to submit the rating to the backend
  //   console.log("Selected Rating:", rating);
  //   // You can send a request to the backend to update the rating here
  //   // Make sure to handle the logic for updating the UI with the new rating after submitting
  //   setSelectedRating(rating); // For demonstration, update the UI immediately with the selected rating
  //   setIsRatingOpen(false); // Close the rating modal after submitting
  // };

  const handleRatingSubmit = async (rating) => {
    const courseId = "course_id"; // Replace "course_id" with the actual course ID
    const apiUrl = `http://localhost:5000/api/courses/${_id}/rating`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit rating");
      }

      console.log("Rating submitted successfully");
      // Handle success, such as showing a success message to the user
    } catch (error) {
      console.error("Error submitting rating:", error);
      // Handle error, such as showing an error message to the user
    }
  };

  const handleSeeDetailsClick = () => {
    navigate(`/courses/${_id}`, {
      state: {
        CompleteCourse,
      },
    });
  };

  const user = JSON.parse(localStorage.getItem("userData"));
  const isInstructor = user?.role === "Instructor";
  const isStudent = user?.role === "Student";

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  const deleteCourse = () => {
    onDelete(_id);
  };

  const [courseRating, setCourseRating] = useState(null);

  // Function to fetch the rating of the course
  const fetchCourseRating = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/courses/${_id}/rating`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch rating");
      }
      const data = await response.json();
      setCourseRating(data.rating);
    } catch (error) {
      console.error("Error fetching rating:", error);
      // Handle error, such as showing an error message to the user
    }
  };

  // Fetch course rating when the component mounts
  useEffect(() => {
    fetchCourseRating();
  }, []);

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

        <div className="item-rating" >
          {courseRating !== null && courseRating !== undefined ? (
            <>
              <StarRatingStatic
                rating_star={parseFloat(courseRating.toFixed(1))}
              />
              <span className="rating-star-val">{courseRating.toFixed(1)}</span>
            </>
          ) : (
            <span>Loading rating...</span>
          )}
          <span className="rating-count">({rating_count} Students)</span>
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

        {isStudent && (
          <button onClick={handleRatingClick} className="item-btn rating-btn">
            Rate Course
          </button>
        )}

        {isInstructor && location.pathname !== "/" && (
          <button onClick={deleteCourse} className="item-btn delete-btn">
            Delete
          </button>
        )}
      </div>
      <RatingModal
        isOpen={isRatingOpen}
        onRequestClose={handleCloseRating}
        onSubmit={handleRatingSubmit}
      />
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
