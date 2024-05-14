import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer/FooterCard";
import VerifyEmailPopup from "../components/Login/VerifyEmailPopup";
import { HomeWrapper, Overlay } from "./style";
import MarqueeText from "../components/common/MarqueeText";
// import HomePageBottom from "../assets/images/homepagebottom.svg";
import HomePageBottom from "../assets/images/img90.svg";
import PhotoGallery from "../components/PhotoGallery";
// import Img70 from "../assets/images/881-ai.svg";
import Img772 from "../assets/images/772-ai.svg";
import Img771 from "../assets/images/771-ai.svg";
import Img880 from "../assets/images/880-ai.svg";
import Img881 from "../assets/images/881-ai.svg";
import Img883 from "../assets/images/883-ai.svg";
import Img892 from "../assets/images/892-ai.svg";

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

  const images = [Img881, Img771, Img880, Img772, Img883, Img892];

  return (
    <>
      <Overlay isPopupVisible={isSupportGhazaPopupVisible} />
      <HomeWrapper isPopupVisible={isSupportGhazaPopupVisible}>
        <div className="holder">
          <Navbar />
          {/* <Hero /> */}
          <PhotoGallery images={images} />

          <MarqueeText />
          <CoursesList />

          {/* <CategoriesList /> */}
          <img src={HomePageBottom} alt="" />
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
