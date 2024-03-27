import styled from "styled-components";
import { Link } from "react-router-dom";

export const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);
`;

export const CourseIntro = styled.div`
  padding: 40px 16px;
  max-width: 90%;
  display: grid;

  @media screen and (min-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: 60% 40%;
  }
`;

export const CourseImage = styled.div`
width: 90%;
margin-top: 25px;
`;

export const CourseFoot = styled.div``;

export const CourseDetails = styled.div`
  padding-top: 20px;
`;

export const CourseCategory = styled.div`
  background-color: white;
  color: black;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 12px;
  display: inline-block;
  padding: 0 8px;
  border-radius: 6px;
`;

export const CourseHead = styled.div`
  font-size: 38px;
  line-height: 1.2;
  padding: 12px 0 0;
`;

export const CourseBody = styled.div`
  .course-para {
    padding: 12px 0;
  }
`;

export const CourseRating = styled.div`
  display: flex;
  .rating-star-val {
    margin-right: 7px;
    padding-bottom: 5px;
    color: var(--clr-orange);
  }
  .rating-count,
  .students-count {
    font-size: 14px;
  }
  .rating-count {
    margin-left: 6px;
    color: #d097f6;
  }
  .students-count {
    margin-left: 8px;
  }
`;

export const CourseInfo = styled.ul`
  li {
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    .course-info-txt {
      margin-left: 8px;
      margin-bottom: 4px;
      text-transform: capitalize;
    }
  }
`;

export const CoursePrice = styled.div`
  margin-top: 12px;
  .new-price {
    font-size: 26px;
    font-weight: bold;
  }
  .old-price {
    font-size: 26px;
    font-weight: semi-bold;
    color: #eceb98;
    text-decoration: line-through;
    margin-left: 10px;
  }
`;

export const CourseButton = styled.div`
  margin-top: 16px;
`;

export const AddToCartButton = styled.button`
  display: inline-block;
  font-weight: bold;
  background-color: purple;
  padding: 10px 18px;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "grey" : "#7b1fa4")};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CourseFull = styled.div`
  background-color: white;
  color: black;
  padding: 40px 16px;
`;

export const CourseLearn = styled.div`
  max-width: 992px;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px 28px 22px;
`;

export const CourseScTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin: 12px 0;
`;

// export const CourseLearnList = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(1, 1fr);
//   @media screen and (min-width: 992px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

export const LearnItem = styled.li`
  margin: 5px 0;
  display: flex;
  align-items: center;
`;

export const CourseContentSection = styled.div`
  max-width: 992px;
  margin: auto;
  margin-top: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 12px 28px 22px;
`;

export const CourseContentList = styled.ul`
  li {
    background-color: #f7f9fa;
    padding: 12px 18px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    font-weight: 800;
    font-size: 15px;
  }
`;



export const HomeWrapper = styled.div`
transition: filter 0.3s ease;
filter: ${(props) => (props.isPopupVisible ? "blur(3px)" : "none")};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50; // Ensure this is below your popup but above other content
  display: ${(props) => (props.isPopupVisible ? "block" : "none")};
`;


// Additional styling for CourseLearnList to handle the content titles, descriptions, and videos
export const ContentItem = styled.li`
  //   display: flex;
  //   justify-content: center;
  //   align-self: center;
  width: 60%;
  height: 400px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f2f2f2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .content-title {
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .content-description {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
    overflow-y: auto;
  }

  video {
    width: 100%;
    height: auto;
    max-height: 250px;
    border-radius: 8px;
    overflow: hidden;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CourseLearnList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  //   @media screen and (min-width: 768px) {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  //   @media screen and (min-width: 1024px) {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
`;

export const LearnItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px; // Adjust the bottom margin to control space between items

  .check-icon {
    margin-right: 5px; // Space between the check icon and the text
    color: green; // Example color for the check icon, adjust as needed
  }

  .learn-text {
    // Style for the text if needed
  }
`;
