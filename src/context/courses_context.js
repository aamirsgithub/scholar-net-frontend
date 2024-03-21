// removed courses context and do this in parent compoent 

// import React, { useState, useEffect } from 'react';
// import CourseList from './CourseList';
// // Import other components as needed

// const App = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch the courses from an API or other source
//     const fetchCourses = async () => {
//       const response = await fetch('YOUR_API_ENDPOINT');
//       const data = await response.json();
//       setCourses(data);
//     };

//     fetchCourses();
//   }, []); // Empty dependency array means this effect runs once on mount

//   return (
//     <div>
//       {/* Pass courses as a prop to CourseList */}
//       <CourseList courses={courses} />
//     </div>
//   );
// };

// export default App;
