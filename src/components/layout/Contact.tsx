 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import ContactPageContact from "../templates/Contact/ContactPageContact";
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
    </>
  );
};

export default Contact;
