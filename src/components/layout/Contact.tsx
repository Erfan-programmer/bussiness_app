import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import ContactPageContact from "../templates/Contact/ContactPageContact";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";

const Contact = () => {
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <ContactPageContact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
