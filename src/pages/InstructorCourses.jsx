import React, { useState, useEffect, useRef } from "react";
import Course from "../components/Course";
import Navbar from "../components/Navbar/Navbar";

import isEqual from "lodash/isEqual";
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
      <div style={{ width: "40%", padding: "10%" }}>
        {courses.map((course) => (
          <Course key={course._id} {...course} myCourse={true} />
        ))}
      </div>
    </>
  );
};

export default InstructorCourses;
