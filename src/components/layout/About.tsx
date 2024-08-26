import React from "react";
import BackToTop from "../modules/BackToTop/BackToTop";
import Spinner from "../modules/Spinner/Spinner";
import TopBar from "../modules/TopBar/TopBar";
import Navbar from "../modules/Navbar/Navbar";
import AboutPageAbout from "../templates/About/AboutPageAbout";
import AboutPageFeatures from "../templates/About/AboutPageFeatures";
import AboutPageTeam from "../templates/About/AboutPageTeam";
import Footer from "../modules/Footer/Footer";

const About = () => {
  return (
    <>
      <Spinner />
      <TopBar />
      
      <Navbar />
      <AboutPageAbout />
      <AboutPageFeatures />
      <AboutPageTeam />
      <Footer />
      <BackToTop />
    </>
  );
};

export default About;
