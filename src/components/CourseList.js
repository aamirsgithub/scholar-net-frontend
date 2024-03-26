import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/fetch-all-courses",
          {
            method: "GET",
            // credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("There was an error fetching the courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // console.log("fetched courses from database: ", courses);

  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <h2>A broad selection of courses</h2>
          <p>
            Choose from 204,000 online video courses with new additions
            published every month
          </p>
        </div>
        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p {
    font-size: 1.8rem;
  }
`;

export default CourseList;
