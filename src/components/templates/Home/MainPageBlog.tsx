import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogBox from "../../modules/Home/BlogBox";
const MainPageBlog = () => {
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
          <div className="row gap-5 justify-content-center">
            <BlogBox
              title="Dividend Stocks"
              question=" Options Trading Business?"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut aliquam suscipit error corporis accusamus labore...."
              image="img/service-1.jpg"
              role="Admin"
              date="October 9, 2025"
            />
            <BlogBox
              title="Non-Dividend Stocks"
              question=" Options Trading Business?"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut aliquam suscipit error corporis accusamus labore......"
              image="img/service-2.jpg"
              role="Admin"
              date="October 9, 2025"
            />

            <BlogBox
              title="Dividend Stocks"
              question=" Options Trading Business?"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut aliquam suscipit error corporis accusamus labore......"
              image="img/service-3.jpg"
              role="Admin"
              date="October 9, 2025"
            />

            <BlogBox
              title="Non-Dividend Stocks"
              question=" Options Trading Business?"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                aut aliquam suscipit error corporis accusamus labore......"
              image="img/service-4.jpg"
              role="Admin"
              date="October 9, 2025"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageBlog;
