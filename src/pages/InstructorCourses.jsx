import React, { useState, useEffect, useRef } from "react";
import Course from "../components/Course";
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";

import isEqual from "lodash/isEqual";
import { Typography } from "@mui/material";
import { FlexDiv } from "../components/common/Style";
import FooterCard from "../components/Footer/FooterCard";

const PageWrapper = styled.div`
  padding: 2rem;
  margin-top: 5rem;
  min-height: 150vh;
`;

const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const InstructorCourses = () => {
  const [courses, setCourses] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  function useDeepCompareEffect(callback, dependencies) {
    const currentDependenciesRef = useRef();

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
      currentDependenciesRef.current = dependencies;
    }

    useEffect(callback, [currentDependenciesRef.current]);
  }

  useDeepCompareEffect(() => {
    const fetchInstructorCourses = async () => {
      if (!userData) {
        console.log("No user data available.");
        return;
      }

      const instructorId = userData._id;
      const response = await fetch(
        `http://localhost:5000/api/instructor-courses/${instructorId}`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch instructor's courses");
        return;
      }

      try {
        const coursesData = await response.json();
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to parse instructor's courses data", error);
      }
    };

    fetchInstructorCourses();
  }, [userData]);

  if (!courses.length) return <div>No courses.</div>;


  


  return (
    <>
      <Navbar />
      <PageWrapper>
        <FlexDiv>
          <Typography
            style={{
              color: "orange",
              padding: "2rem",
              fontSize: "3rem",
            }}
          >
           {userData.displayName}'s Courses
          </Typography>
        </FlexDiv>
        <CoursesContainer>
          {courses.map((course) => (
            <Course
              key={course._id}
              {...course}
              CompleteCourse={courses}
              myCourse={true}
              // onDelete={deleteCourse}
            />
          ))}
        </CoursesContainer>
      </PageWrapper>
      <FooterCard/>
    </>
  );
};

export default InstructorCourses;
