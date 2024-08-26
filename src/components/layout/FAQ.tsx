import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import FAQPageFAQ from "../templates/FAQ/FAQPageFAQ";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";

const FAQ = () => {
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <FAQPageFAQ />
      <Footer />
      <BackToTop />
    </>
  );
};

export default FAQ;
