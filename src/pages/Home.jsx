import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer/FooterCard";
import VerifyEmailPopup from "../components/Login/VerifyEmailPopup";
import {HomeWrapper, Overlay} from "./style"
const Home = () => {
  const [isVerifyEmailPopupVisible, setIsVerifyEmailPopupVisible] =
    useState(false);

  useEffect(() => {
    const shouldShowPopup =
      localStorage.getItem("showVerifyEmailPopup") === "true";
    if (shouldShowPopup) {
      setIsVerifyEmailPopupVisible(true);
      localStorage.removeItem("showVerifyEmailPopup");
    }
  }, []);

  const handleVerifyEmailPopupClose = () => {
    setIsVerifyEmailPopupVisible(false);
  };
  return (
    <>
      <Overlay isPopupVisible={isVerifyEmailPopupVisible} />
      <HomeWrapper isPopupVisible={isVerifyEmailPopupVisible}>
        <div className="holder">
          <Navbar />
          <Hero />
          <CoursesList />
          {/* <CategoriesList /> */}
          <Footer />
        </div>
      </HomeWrapper>
      {isVerifyEmailPopupVisible && (
        <VerifyEmailPopup onClose={handleVerifyEmailPopupClose} />
      )}
    </>
  );
};

export default Home;
