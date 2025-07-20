 

type FeatureType = {
    title:string,
    description:string,
    icon:string
}
const FeatureBox = ({title , description , icon}:FeatureType) => {
  return (
    <div
      className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
      data-aos="fade-right"
    >
      <div className="feature-item p-4">
        <div className="feature-icon p-4 mb-4">
          <i className={`${icon } fa-4x text-primary `}></i>
        </div>
        <h4>{title}</h4>
        <p className="mb-4">{description}
        </p>
        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default FeatureBox;
