import React, { useState, useEffect ,useRef} from "react";
import Course from "../components/Course"; // Assuming Course is the component you use to display each course card
import Navbar from "../components/Navbar/Navbar";

import isEqual from 'lodash/isEqual';
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
  

  if (!courses.length) return <div>No courses purchased yet.</div>;

  return (
    <>
      <Navbar />
      <div style={{ width: "40%", padding: "10%" }}>
        {courses.map((course) => (
          <Course key={course._id} {...course} myCourse={true}  />
        ))}
      </div>
    </>
  );
};

export default MyCoursesPage;
