 
import Spinner from "../modules/Spinner/Spinner";
import TopBar from "../modules/TopBar/TopBar";
import Navbar from "../modules/Navbar/Navbar";
import MainPageAbout from "../templates/Home/MainPageAbout";
import MainPageService from "../templates/Home/MainPageService";
import MainPageOffer from "../templates/Home/MainPageOffer";
import MainPageBlog from "../templates/Home/MainPageBlog";
import MainPageFaq from "../templates/Home/MainPageFaq";
import MainPageTeam from "../templates/Home/MainPageTeam";
import MainPageTestimonial from "../templates/Home/MainPageTestimonial";
import MainPageFeature from "../templates/Home/MainPageFeature";

const Home = () => {
  return (
    <>
      <Spinner />
      <TopBar />
      <Navbar />
      <MainPageAbout />
      <MainPageService />
      <MainPageFeature/>
      <MainPageOffer />
      <MainPageBlog />
      <MainPageFaq />
      <MainPageTeam />
      <MainPageTestimonial />
    </>
  );
};

export default Home;
