import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer/FooterCard";

const Home = () => {
  return (
    <div className="holder">
      <Navbar />
      <Hero />
      <CoursesList />

      {/* <CategoriesList /> */}
      <Footer />
    </div>
  );
};

export default Home;
