import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import NavBarLight from "../modules/Navbar/NavBarLight";
import TopBarLight from "../modules/TopBar/TopBarLight";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";
import TestimonialPageTestimonial from "../templates/Testimonial/TestimonialPageTestimonial";
import BreadCrumb from "../modules/BreadCrumb";

const Testimonial = () => {
  const link = {
    title: "Our Testimonial",
    route: "/testimonial",
  };
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link} />
      <TestimonialPageTestimonial />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Testimonial;
