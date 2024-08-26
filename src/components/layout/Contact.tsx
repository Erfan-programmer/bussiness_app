import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import ContactPageContact from "../templates/Contact/ContactPageContact";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";
import BreadCrumb from "../modules/BreadCrumb";

const Contact = () => {
  const link = {
    title:"Contact Us",
    route:"contact"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link}/>
      <ContactPageContact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
