 
import Spinner from "../modules/Spinner/Spinner";
import NavBarLight from "../modules/Navbar/NavBarLight";
import TopBarLight from "../modules/TopBar/TopBarLight";
import FeaturePageFeature from "../templates/Feature/FeaturePageFeature";
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
    </>
  );
};

export default Feature;
