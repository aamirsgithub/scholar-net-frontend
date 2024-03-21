import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { useLocation } from "react-router-dom";
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
} from "./style";

const SingleCoursePage = ({ addToCart }) => {
  const { id } = useParams();
  const location = useLocation();
  const CompleteCourse = location.state;
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
    // what_you_will_learn: learnItems,
    content,
  } = CompleteCourse.CompleteCourse;

  return (
    <SingleCourseWrapper>
      <CourseIntro>
        <CourseImage>
          <img
            src={`http://localhost:5000/${image.replace(/\\/g, "/")}`}
            alt={course_name}
          />
        </CourseImage>
        <CourseDetails>
          <CourseCategory>{category}</CourseCategory>
          <CourseHead>
            <h5>{course_name}</h5>
          </CourseHead>
          <CourseBody>
            <p className="course-para fs-18">{description}</p>
            <CourseRating>
              <span className="rating-star-val fw-8 fs-16">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="rating-count fw-5 fs-14">({rating_count})</span>
              <span className="students-count fs-14">{students} students</span>
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
          <CourseButton>
            <AddToCartButton
              // to="/cart"
              onClick={() => addToCart(CompleteCourse)}
            >
              <FaShoppingCart /> Add to cart
            </AddToCartButton>
          </CourseButton>
        </CourseDetails>
      </CourseIntro>
      <CourseFull>
        <CourseLearn>
          <CourseScTitle>What you'll learn</CourseScTitle>
          <CourseLearnList>
            {/* {learnItems &&
              learnItems.map((learnItem, idx) => (
                <li key={idx}>
                  <span>
                    <BiCheck />
                  </span>
                  <span className="fs-14 fw-5 opacity-09">{learnItem}</span>
                </li>
              ))} */}
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

            {/* {content &&
              content.map((contentItem, idx) => (
                <li key={idx}>
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
                </li>
              ))} */}
          </CourseLearnList>
        </CourseLearn>
        <CourseContentSection>
          <CourseScTitle>Course content</CourseScTitle>
          <CourseContentList>
            {content.map((contentItem, idx) => (
              <li key={idx}>{contentItem.title}</li>
            ))}
          </CourseContentList>
        </CourseContentSection>
      </CourseFull>
    </SingleCourseWrapper>
  );
};

export default SingleCoursePage;