import React from "react";
import BackToTop from "../modules/BackToTop/BackToTop";
import Spinner from "../modules/Spinner/Spinner";
import TopBar from "../modules/TopBar/TopBar";
import Navbar from "../modules/Navbar/Navbar";
import AboutPageAbout from "../templates/About/AboutPageAbout";
import AboutPageFeatures from "../templates/About/AboutPageFeatures";
import AboutPageTeam from "../templates/About/AboutPageTeam";
import Footer from "../modules/Footer/Footer";
import BreadCrumb from "../modules/BreadCrumb";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";

const About = () => {
  const link = {
    title: "About Us",
    route: "/about",
  };
  return (
    <>
      <Spinner />
      <TopBarLight />

      <NavBarLight />
      <BreadCrumb link={link} />
      <AboutPageAbout />
      <AboutPageFeatures />
      <AboutPageTeam />
      <Footer />
      <BackToTop />
    </>
  );
};

export default About;
