import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import OfferPageOffer from "../templates/Offer/OfferPageOffer";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";
import BreadCrumb from "../modules/BreadCrumb";

const Offer = () => {
  const link = {
    title:"Our Offer",
    route:"offer"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link} />
      <OfferPageOffer />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Offer;
