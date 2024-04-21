import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer/FooterCard";
import VerifyEmailPopup from "../components/Login/VerifyEmailPopup";
import { HomeWrapper, Overlay } from "./style";
import MarqueeText from "../components/common/MarqueeText";
const Home = () => {
  const [isSupportGhazaPopupVisible, setIsSupportGhazaPopupVisible] =
    useState(false);

  useEffect(() => {
    const shouldShowPopup =
      localStorage.getItem("showVerifyEmailPopup") === "true";
    if (shouldShowPopup) {
      setIsSupportGhazaPopupVisible(true);
      localStorage.removeItem("showVerifyEmailPopup");
    }
  }, []);

  const handleGhazaPopupClose = () => {
    setIsSupportGhazaPopupVisible(false);
  };
  return (
    <>
      <Overlay isPopupVisible={isSupportGhazaPopupVisible} />
      <HomeWrapper isPopupVisible={isSupportGhazaPopupVisible}>
        <div className="holder">
          <Navbar />
          <Hero />
          <MarqueeText />
          <CoursesList />
          {/* <CategoriesList /> */}
          <Footer />
        </div>
      </HomeWrapper>
      {isSupportGhazaPopupVisible && (
        <VerifyEmailPopup onClose={handleGhazaPopupClose} />
      )}
    </>
  );
};

export default Home;
