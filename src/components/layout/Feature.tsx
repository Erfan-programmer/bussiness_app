import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import NavBarLight from "../modules/Navbar/NavBarLight";
import TopBarLight from "../modules/TopBar/TopBarLight";
import FeaturePageFeature from "../templates/Feature/FeaturePageFeature";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";

const Feature = () => {
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <FeaturePageFeature />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Feature;
