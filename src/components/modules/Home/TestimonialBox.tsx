 

type TestimonialType = {
  image: string;
  comment: string;
  name: string;
  role: string;
};
const TestimonialBox = ({ image, comment, name, role }: TestimonialType) => {
  return (
      <div className="testimonial-item">
        <div className="testimonial-quote-left">
          <i className="fas fa-quote-left fa-2x"></i>
        </div>
        <div className="testimonial-img">
          <img src={image} className="img-fluid" alt="Image" />
        </div>
        <div className="testimonial-text">
          <p className="mb-0">{comment}</p>
        </div>
        <div className="testimonial-title">
          <div>
            <h4 className="mb-0">{name}</h4>
            <p className="mb-0">{role}</p>
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
  );
};

export default TestimonialBox;
