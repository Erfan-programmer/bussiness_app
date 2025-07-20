 
import Spinner from "../modules/Spinner/Spinner";
import AboutPageAbout from "../templates/About/AboutPageAbout";
import AboutPageFeatures from "../templates/About/AboutPageFeatures";
import AboutPageTeam from "../templates/About/AboutPageTeam";
import BreadCrumb from "../modules/BreadCrumb";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";

const About = () => {
  const link = {
    title: "About Us",
    route: "/about",
  };
  return (
    <>
      <Spinner />
      <TopBarLight />

      <NavBarLight />
      <BreadCrumb link={link} />
      <AboutPageAbout />
      <AboutPageFeatures />
      <AboutPageTeam />
    </>
  );
};

export default About;
