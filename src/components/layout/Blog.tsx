 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import BlogPageBlog from "../templates/Blog/BlogPageBlog";
import BreadCrumb from "../modules/BreadCrumb";

const Blog = () => {
  const link = {
    title:"Our Blog",
    route:"blog"
  }
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <BreadCrumb link={link}/>
      <BlogPageBlog />
    </>
  );
};

export default Blog;
