import  { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import BlogBox from "../../modules/Home/BlogBox";
import { ContextItem } from "../../../../hooks/Context";
import { BlogType } from "../../../../types/blog";
const MainPageBlog = () => {
  const {BlogItems} = useContext(ContextItem) 
  return (
    <div className="container-fluid blog pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px;" }}
        >
          <h4 className="text-primary">Our Blog & News</h4>
          <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <div className="container">
          <div className="row gap-5 justify-content-center" data-aos="fade-up">
            {BlogItems?.map((blog:BlogType)=>(
              <BlogBox key={blog._id}
              {...blog}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBlog;
