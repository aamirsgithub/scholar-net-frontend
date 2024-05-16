import React, { useState, useEffect, useRef } from "react";
import Course from "../components/Course"; // Assuming Course is the component you use to display each course card
import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";

import isEqual from "lodash/isEqual";
import { FlexDiv } from "../components/common/Style";
import { Typography } from "@mui/material";
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

const MyCoursesPage = () => {
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
    const fetchPurchasedCourses = async () => {
      if (!userData) {
        console.log("No user data available.");
        return;
      }

      const userId = userData._id;
      const response = await fetch(
        `http://localhost:5000/api/purchased-courses/${userId}`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch purchased courses");
        return;
      }

      try {
        const coursesData = await response.json();
        setCourses(coursesData);
      } catch (error) {
        console.error("Failed to parse purchased courses data", error);
      }
    };

    fetchPurchasedCourses();
  }, [userData]); // Use the custom hook here

  if (!courses.length)
    return (
      <>
        <Navbar />
        <PageWrapper>
          <CoursesContainer>
            <FlexDiv>
              {" "}
              <Typography
                style={{
                  color: "orange",
                  padding: "2rem",
                  fontSize: "3rem",
                }}
              >
                Dear {userData.displayName}! You have not purchased any course yet.
              </Typography>
            </FlexDiv>
          </CoursesContainer>
        </PageWrapper>
        <FooterCard />
      </>
    );

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
            {userData.displayName}'s Purchased Courses
          </Typography>
        </FlexDiv>
        <CoursesContainer>
          {courses.map((course) => (
            <Course
              key={course._id}
              {...course}
              CompleteCourse={courses}
              myCourse={true}
            />
          ))}
        </CoursesContainer>
      </PageWrapper>
      <FooterCard />
    </>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default MyCoursesPage;
