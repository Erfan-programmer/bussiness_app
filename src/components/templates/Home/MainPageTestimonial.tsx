import  { useContext } from "react";
import TestimonialBox from "../../modules/Home/TestimonialBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./MainPageTestimonial.css";
import { ContextItem } from "../../../../hooks/Context";
import { TestimonialType } from "../../../../types/blog";
const MainPageTestimonial = () => {
  const { TestimonialItems } = useContext(ContextItem);
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-4">Our Clients Reviews</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <Swiper
          data-aos="fade-up"
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
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
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {TestimonialItems?.map((testimonial: TestimonialType) => (
            <SwiperSlide>
              <TestimonialBox
                image={testimonial?.image}
                comment={testimonial?.description}
                name={testimonial?.name}
                role={testimonial?.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainPageTestimonial;
