 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import ServicePageService from "../templates/Service/ServicePageService";
import ServicePageTestimonial from "../templates/Service/ServicePageTestimonial";
import BreadCrumb from "../modules/BreadCrumb";

const Service = () => {
    const link = {
    title:"Our Services",
    route:"service"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link} />
      <ServicePageService />
      <ServicePageTestimonial />
    </>
  );
};

export default Service;
