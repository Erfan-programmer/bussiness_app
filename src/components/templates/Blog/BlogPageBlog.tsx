import  { useContext   } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {ContextItem} from "./../../../../hooks/Context"
const BlogPageBlog = () => {
  const {BlogItems} = useContext(ContextItem)
  console.log("blogITems =>" , BlogItems)
  return (
    <div className="container-fluid blog py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
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
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          loop
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="mySwiper"
        >
          {BlogItems?.map((blog) => (
            <SwiperSlide key={blog?._id}>
              <div className="blog-item p-4" data-aos="fade-up">
                <div className="blog-img mb-4 h-25">
                  <img
                    src={blog.image}
                    className="img-fluid w-100 h-100 rounded"
                    alt={blog.title}
                  />
                  <div className="blog-title">
                    <a href="#" className="btn">
                      {blog.title}
                    </a>
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  {blog.question}
                </a>
                <p className="mb-4">{blog.description}</p>
                {blog.testimonial && (
                  <div className="d-flex align-items-center">
                    <img
                      src={blog.testimonial.image}
                      className="img-fluid rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                      alt={blog.testimonial.role}
                    />
                    <div className="ms-3">
                      <h5>{blog.testimonial.role}</h5>
                      <p className="mb-0">October 9, 2025</p>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogPageBlog;
