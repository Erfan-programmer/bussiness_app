 

type ServiceType = {
  title: string;
  description: string;
  image: string;
};
const ServiceBox = ({ title, description, image }: ServiceType) => {
  return (
    <div
      className="col-md-6 col-lg-4 wow fadeInUp"
      data-aos="fade-up"
    >
      <div className="service-item">
        <div className="service-img">
          <img
            src={image}
            className="img-fluid rounded-top w-100"
            alt="Image"
          />
        </div>
        <div className="rounded-bottom p-4">
          <a href="#" className="h4 d-inline-block mb-4">
            {title}
          </a>
          <p className="mb-4">{description},</p>
          <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
