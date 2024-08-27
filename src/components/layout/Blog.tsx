import React from "react";
import Spinner from "../modules/Spinner/Spinner";
import TopBar from "../modules/TopBar/TopBar";
import Navbar from "../modules/Navbar/Navbar";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import BlogPageBlog from "../templates/Blog/BlogPageBlog";
import Footer from "../modules/Footer/Footer";
import BackToTop from "../modules/BackToTop/BackToTop";
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
      <Footer />
      <BackToTop />
    </>
  );
};

export default Blog;
