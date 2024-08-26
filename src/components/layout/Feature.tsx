import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import NavBarLight from "../modules/Navbar/NavBarLight";
import TopBarLight from "../modules/TopBar/TopBarLight";
import FeaturePageFeature from "../templates/Feature/FeaturePageFeature";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";
import BreadCrumb from "../modules/BreadCrumb";

const Feature = () => {
  const link = {
    title:"Our Feature",
    route:"contact"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link}/>
      <FeaturePageFeature />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Feature;
