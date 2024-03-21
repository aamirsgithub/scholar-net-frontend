import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Course from "../components/Course";

const fetchCourses = async () => {
  // Implement fetching logic here, e.g., fetching from an API
  const response = await fetch("YOUR_API_ENDPOINT");
  const data = await response.json();
  return data;
};

const CoursesPage = () => {
  const { category } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then((data) => {
      // Assuming the API returns an array of courses
      setCourses(data);
    });
  }, []);

  return (
    <CoursesPageWrapper>
      <div className="container">
        <div className="category-based-list">
          {courses
            .filter((course) => course.category === category)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </CoursesPageWrapper>
  );
};

const CoursesPageWrapper = styled.div`
  .category-based-list {
    margin-top: 32px;
  }
  @media screen and (min-width: 600px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1400px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default CoursesPage;
