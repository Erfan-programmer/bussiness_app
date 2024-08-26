import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import ServicePageService from "../templates/Service/ServicePageService";
import ServicePageTestimonial from "../templates/Service/ServicePageTestimonial";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";

const Service = () => {
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <ServicePageService />
      <ServicePageTestimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Service;
