 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import FAQPageFAQ from "../templates/FAQ/FAQPageFAQ";
import BreadCrumb from "../modules/BreadCrumb";

const FAQ = () => {
  const link = {
    title:"FAQ",
    route:"faq"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link} />
      <FAQPageFAQ />
    </>
  );
};

export default FAQ;
