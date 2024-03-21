import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../authentication/ProtectedRoute";
import RedirectIfAuthenticated from "../authentication/RedirectIfAuthenticated";
import Home from "../pages/Home";
import SingleCourse from "../pages/SingleCourse";
// import Courses from "../pages/Courses";
// import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import UploadVideoCourse from "../components/CourseUpload/UploadVideoCourse";
import TempTestPage from "../pages/TempTestPage";
import StepOne from "../components/CourseUpload/StepOne";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/temp" element={<TempTestPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
        <Route path="/signup" element={<RedirectIfAuthenticated><Signup /></RedirectIfAuthenticated>} />
        <Route path="/courses/:id" element={<ProtectedRoute><SingleCourse /></ProtectedRoute>} />
        {/* <Route path="/category/:category" element={<Courses />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/upload-course" element={<ProtectedRoute><StepOne /></ProtectedRoute>} />
        <Route path="/upload-course-video-lectures" element={<ProtectedRoute><UploadVideoCourse /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default Router;
