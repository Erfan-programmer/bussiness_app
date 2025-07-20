import  { useContext } from "react";
import { ContextItem } from "../../../../hooks/Context";
import { TestimonialType } from "../../../../types/blog";

const TestimonialPageTestimonial = () => {
  const { TestimonialItems } = useContext(ContextItem);
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-5 mb-4">Our Clients Riviews</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.2s"
        >
          {TestimonialItems?.map((testimonial: TestimonialType) => (
            <div className="testimonial-item" data-aos="fade-up">
              <div className="testimonial-quote-left">
                <i className="fas fa-quote-left fa-2x"></i>
              </div>
              <div className="testimonial-img">
                <img
                  src={testimonial?.image}
                  className="img-fluid"
                  alt="Image"
                />
              </div>
              <div className="testimonial-text">
                <p className="mb-0">{testimonial?.description}</p>
              </div>
              <div className="testimonial-title">
                <div>
                  <h4 className="mb-0">{testimonial?.name}</h4>
                  <p className="mb-0">{testimonial?.role}</p>
                </div>
                <div className="d-flex text-primary">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="testimonial-quote-right">
                <i className="fas fa-quote-right fa-2x"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPageTestimonial;
