import React from "react";
import { SwiperSlide } from "swiper/react";

type BlogType = {
  title: string;
  question: string;
  description: string;
  image: string;
  role: string;
  date: string;
};
const BlogBox = ({
  title,
  question,
  description,
  image,
  role,
  date,
}: BlogType) => {
  return (
      <div className="blog-item p-2  col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{height:"80vh"}}>
        <div className="blog-img mb-4 w-100  h-50">
          <img
            src="img/service-1.jpg"
            className="img-fluid w-100 h-100 rounded"
            style={{height:"30px"}}
            alt=""
          />
          <div className="blog-title">
            <a href="#" className="btn">
              {title}
            </a>
          </div>
        </div>
        <a href="#" className="h4 d-inline-block mb-3">
          {question}
        </a>
        <p className="mb-4">{description}</p>
        <div className="d-flex align-items-center">
          <img
            src={image}
            className="img-fluid rounded-circle"
            style={{ width: "60px", height: "60px;" }}
            alt=""
          />
          <div className="ms-3">
            <h5>{role}</h5>
            <p className="mb-0">{date}</p>
          </div>
        </div>
      </div>
  );
};

export default BlogBox;
