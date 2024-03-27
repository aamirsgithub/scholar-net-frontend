import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  SingleCourseWrapper,
  CourseIntro,
  CourseImage,
  CourseDetails,
  CourseCategory,
  CourseHead,
  CourseBody,
  CourseRating,
  CourseInfo,
  CoursePrice,
  CourseButton,
  AddToCartButton,
  CourseFoot,
  CourseFull,
  CourseLearn,
  CourseScTitle,
  CourseLearnList,
  LearnItem,
  CourseContentSection,
  CourseContentList,
  ContentItem,
  LearnItemStyled,
} from "./style";
import Navbar from "../components/Navbar/Navbar";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [learningOutcomes, setLearningOutcomes] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemExists = cartItems.some((item) => item.courseID === courseId);
    setIsAddedToCart(itemExists);
  }, [courseId]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const isUserInstructor = userData?.role === "Instructor";
  const isAdmin = userData?.role === "Admin";

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        console.log("Fetching data for courseId:", courseId);

        const response = await fetch(
          `http://localhost:5000/api/fetch-single-course/${courseId}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }

        const data = await response.json();
        setCourseData(data);
        console.log("Course data through API:", data);

        if (data && data.what_you_will_learn) {
          const outcomes = data.what_you_will_learn
            .split(/\r?\n/)
            .map((outcome) => outcome.trim())
            .filter((outcome) => outcome.length > 0);
          setLearningOutcomes(outcomes);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  const {
    _id,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    language,
    actual_price,
    discounted_price,
    what_you_will_learn,
    content,
  } = courseData;

  const handleAddToCartClick = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const newItem = {
      courseID: _id,
      category,
      image,
      course_name,
      creator,
      discounted_price,
      actual_price,
    };

    const itemExists = cartItems.some(
      (item) => item.courseID === newItem.courseID
    );
    if (!itemExists) {
      cartItems.push(newItem);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setIsAddedToCart(true); 
      window.dispatchEvent(new CustomEvent("cartUpdated"));
    }
  };

  return (
    <>
      <Navbar />
      <SingleCourseWrapper>
        <CourseIntro>
          {/* <CourseImage>
            <img
              src={`http://localhost:5000/${image.replace(/\\/g, "/")}`}
              alt={course_name}
            />
          </CourseImage> */}
          <CourseDetails>
            <CourseCategory>{category}</CourseCategory>
            <CourseHead>{course_name}</CourseHead>
            <CourseBody>
              <p className="course-para fs-18">{description}</p>
              <CourseRating>
                <span className="rating-star-val fw-8 fs-16">
                  {rating_star}
                </span>
                <StarRating rating_star={rating_star} />
                <span className="rating-count fw-5 fs-14">
                  ({rating_count})
                </span>
                <span className="students-count fs-14">
                  {students} students
                </span>
              </CourseRating>
              <CourseInfo>
                <li>
                  <MdInfo />
                  <span className="course-info-txt">
                    Created by <strong>{creator}</strong>
                  </span>
                </li>
                <li>
                  <TbWorld />
                  <span className="course-info-txt">
                    Last updated {updated_date}
                  </span>
                </li>
                <li>
                  <RiClosedCaptioningFill />
                  <span className="course-info-txt">{language} [Auto]</span>
                </li>
              </CourseInfo>
            </CourseBody>
            <CourseFoot>
              <CoursePrice>
                <span className="new-price">${discounted_price}</span>
                <span className="old-price">${actual_price}</span>
              </CoursePrice>
            </CourseFoot>
            {!isUserInstructor && (
              <CourseButton>
                <AddToCartButton
                  onClick={handleAddToCartClick}
                  disabled={isAddedToCart}
                >
                  {isAddedToCart ? (
                    <>Added to Cart</>
                  ) : (
                    <>
                      <FaShoppingCart /> Add to Cart
                    </>
                  )}{" "}
                </AddToCartButton>
              </CourseButton>
            )}
          </CourseDetails>
          <CourseImage>
            <img
              src={`http://localhost:5000/${image.replace(/\\/g, "/")}`}
              alt={course_name}
            />
          </CourseImage>
        </CourseIntro>
        <CourseFull>
          <CourseLearn>
            {" "}
            <CourseScTitle>What you'll learn</CourseScTitle>
            <CourseLearnList>
              {learningOutcomes.length > 0 ? (
                <CourseLearnList>
                  {learningOutcomes.map((outcome, index) => (
                    <LearnItemStyled key={index}>
                      <BiCheck className="check-icon" />
                      <span className="learn-text">{outcome}</span>
                    </LearnItemStyled>
                  ))}
                </CourseLearnList>
              ) : (
                <div>No learning outcomes provided.</div>
              )}
            </CourseLearnList>
          </CourseLearn>
          <CourseContentSection>
            <CourseScTitle>Course content</CourseScTitle>
            <CourseContentList>
              {/* {content.map((contentItem, idx) => (
                <li key={idx}>{contentItem.title}</li>
              ))} */}
              <CourseLearnList>
                {content &&
                  content.map((contentItem, idx) => (
                    <ContentItem key={idx}>
                      <div className="content-title">{contentItem.title}</div>
                      <div className="content-description">
                        {contentItem.description}
                      </div>
                      {contentItem.video && (
                        <video
                          controls
                          src={`http://localhost:5000/${contentItem.video.replace(
                            /\\/g,
                            "/"
                          )}`}
                        >
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </ContentItem>
                  ))}
              </CourseLearnList>
            </CourseContentList>
          </CourseContentSection>
        </CourseFull>
      </SingleCourseWrapper>
    </>
  );
};

export default SingleCoursePage;