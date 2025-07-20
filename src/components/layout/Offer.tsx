 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import OfferPageOffer from "../templates/Offer/OfferPageOffer";
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
    </>
  );
};

export default Offer;
