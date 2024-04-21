import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../authentication/ProtectedRoute";
import RedirectIfAuthenticated from "../authentication/RedirectIfAuthenticated";
// import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import UploadVideoCourse from "../components/CourseUpload/UploadVideoCourse";
import SingleCourse from "../pages/SingleCourse";
import StepOne from "../components/CourseUpload/StepOne";
import CartPage from "../components/cart/CartPage";
import StartMeeting from "../components/Meeting/StartMeeting";
import StudentMeeting from "../components/Meeting/StudentMeeting";
import InstructorSettings from "../pages/InstructorSettings";
import InstructorProfile  from "../pages/InstructorProfile";
import SuccessPage from "../components/Checkout/Success";
import CancelPage from "../components/Checkout/Cancel";
import StudentProfile from "../pages/StudentProfile";
import StudentSettings from "../pages/StudentSettings";

const Router = () => {
  return (
    <>
      <Routes>

        {/* NON-PROTECTED ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/courses/:courseId" element={<SingleCourse />} />
      {/* <Route path="/category/:category" element={<Courses />} /> */}
        <Route path="/login" element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
        <Route path="/signup" element={<RedirectIfAuthenticated><Signup /></RedirectIfAuthenticated>} />
      
      

        {/* PROTECTED ROUTES */}
        <Route path="/upload-course" element={<ProtectedRoute><StepOne /></ProtectedRoute>} />
        <Route path="/upload-course-video-lectures" element={<ProtectedRoute><UploadVideoCourse /></ProtectedRoute>} />

        <Route path="/student-profile" element={<ProtectedRoute><StudentProfile /></ProtectedRoute>} />
        <Route path="/student-settings" element={<ProtectedRoute><StudentSettings /></ProtectedRoute>} />

        <Route path="/instructor-profile" element={<ProtectedRoute><InstructorProfile /></ProtectedRoute>} />
        <Route path="/instructor-settings" element={<ProtectedRoute><InstructorSettings /></ProtectedRoute>} />

        <Route path="/student-meeting" element={<ProtectedRoute><StudentMeeting /></ProtectedRoute>} />
        <Route path="/instructor-meeting" element={<ProtectedRoute><StartMeeting /></ProtectedRoute>} />

        <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/success" element={<ProtectedRoute><SuccessPage /></ProtectedRoute>} />
        <Route path="/cancel" element={<ProtectedRoute><CancelPage /></ProtectedRoute>} />

      </Routes>
    </>
  );
};

export default Router;
