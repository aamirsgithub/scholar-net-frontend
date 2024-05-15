import React, { useEffect, useState } from "react";
import StarRating from "../components/StarRating";
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
// import { useLocation } from "react-router-dom";
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
  CourseLearnListLearn,
  LearnItem,
  CourseContentSection,
  CourseContentList,
  ContentItem,
  LearnItemStyled,
  LockedVideo,
  CoursePurchasedText,
} from "./style";
import DefaultImg from "../assets/images/img100.jpg";
import Navbar from "../components/Navbar/Navbar";
import { FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";

const SingleCoursePage = () => {
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [learningOutcomes, setLearningOutcomes] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [purchaseInfo, setPurchaseInfo] = useState({
    purchased: false,
    purchaseDate: null,
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemExists = cartItems.some((item) => item.courseID === courseId);
    setIsAddedToCart(itemExists);
  }, [courseId]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const isInstructor = userData?.role === "Instructor";
  const isAdmin = userData?.role === "Admin";
  const isStudent = userData?.role === "Student";

  useEffect(() => {
    const checkPurchaseStatus = async () => {
      if (!userData || !courseId) return;

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userData._id, courseId: courseId }),
        credentials: "include",
      };

      try {
        const response = await fetch(
          "http://localhost:5000/api/check-purchase",
          requestOptions
        );
        const data = await response.json();
        setPurchaseInfo({
          purchased: data.purchased,
          purchaseDate: data.purchaseDate,
          details: data.details,
        });
      } catch (error) {
        console.error("Failed to check course purchase status:", error);
      }
    };

    checkPurchaseStatus();
  }, [courseId, userData]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        // console.log("Fetching data for courseId:", courseId);

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
        // console.log("Course data through API:", data);

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

  console.log("Fetching data of course:", courseData);

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
    updatedAt,
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
          <CourseDetails>
            <CourseCategory>{category}</CourseCategory>
            {purchaseInfo.purchased && isStudent && (
              <div>
                <CoursePurchasedText>
                  <span className="purchased">Purchased Course</span>
                </CoursePurchasedText>
              </div>
            )}
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
                <d />
                <span className="students-count fs-14">
                  {students} students
                </span>
              </CourseRating>
              <CourseInfo>
                <li>
                  <MdInfo />
                  <span className="course-info-txt">
                    Created by{" "}
                    <strong>
                      {courseData.course_creator?.displayName || "Unavailable"}
                    </strong>
                  </span>
                </li>
                <li>
                  <TbWorld />
                  <span className="course-info-txt">
                    Last updated {new Date(updatedAt).toLocaleDateString()}
                  </span>
                </li>
                <li>
                  <RiClosedCaptioningFill />
                  <span className="course-info-txt">{language} [Auto]</span>
                </li>
              </CourseInfo>
            </CourseBody>
            <CourseFoot>
              {isStudent && purchaseInfo.purchased ? (
                <CoursePurchasedText>
                  <span className="price">
                    Price Paid: ${purchaseInfo.details.price}
                  </span>
                </CoursePurchasedText>
              ) : (isStudent && !purchaseInfo.purchased) ||
                isAdmin ||
                isInstructor ? (
                <CoursePrice>
                  <span className="new-price">${discounted_price}</span>
                  <span className="old-price">${actual_price}</span>
                </CoursePrice>
              ) : null}
            </CourseFoot>
            {purchaseInfo.purchased && isStudent ? (
              <div>
                <CoursePurchasedText>
                  <span className="price">
                    Purchase Date:
                    {new Date(purchaseInfo.purchaseDate).toLocaleDateString()}
                  </span>
                </CoursePurchasedText>
              </div>
            ) : (
              isStudent &&
              !isInstructor && (
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
                    )}
                  </AddToCartButton>
                </CourseButton>
              )
            )}
          </CourseDetails>

          <CourseImage>
            <img
              src={
                image
                  ? `http://localhost:5000/${image.replace(/\\/g, "/")}`
                  : DefaultImg
              }
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
                <CourseLearnListLearn>
                  {learningOutcomes.map((outcome, index) => (
                    <LearnItemStyled key={index}>
                      <BiCheck className="check-icon" />
                      <span className="learn-text">{outcome}</span>
                    </LearnItemStyled>
                  ))}
                </CourseLearnListLearn>
              ) : (
                <div>No learning outcomes provided.</div>
              )}
            </CourseLearnList>
          </CourseLearn>
          <CourseContentSection>
            <CourseScTitle>Course content</CourseScTitle>
            <CourseContentList>
              <CourseLearnList>
                {content &&
                  content?.map((contentItem, idx) => (
                    <ContentItem key={idx}>
                      <Typography
                        style={{
                          fontSize: "1rem",
                          border: "1px solid black",
                          background: "orange",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "1rem",
                        }}
                      >
                        <strong>Lecture {idx + 1}: </strong>{" "}
                      </Typography>
                      <div className="content-title">{contentItem.title}</div>
                      <div className="content-description">
                        {contentItem.description}
                      </div>
                      {purchaseInfo.purchased || isInstructor || isAdmin ? (
                        <video
                          controls
                          src={`http://localhost:5000/${contentItem.video.replace(
                            /\\/g,
                            "/"
                          )}`}
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <LockedVideo
                          onClick={() =>
                            toast.warn("Course not purchased", {
                              position: "top-right",
                              autoClose: 2000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            })
                          }
                        >
                          <FaLock /> Click to Watch Lecture Video
                        </LockedVideo>
                      )}
                    </ContentItem>
                  ))}
              </CourseLearnList>
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </CourseContentList>
          </CourseContentSection>
        </CourseFull>
      </SingleCourseWrapper>
    </>
  );
};

export default SingleCoursePage;
