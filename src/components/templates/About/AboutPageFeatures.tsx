import  { useContext } from "react";
import { ContextItem } from "../../../../hooks/Context";
import { FeatureType } from "../../../../types/blog";

const AboutPageFeatures = () => {
  const {featuresItems} = useContext(ContextItem)
  return (
    <div className="container feature pb-5">
      <div className="container-fluid pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Features</h4>
          <h1 className="display-5 mb-4">
            Connecting businesses, ideas, and people for greater impact.
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>
        <div className="row g-4">
        {featuresItems?.map((feature:FeatureType)=>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.2s"
            data-aos="fade-up"
          >
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className={` ${feature?.icon} fa-4x text-primary `}></i>
              </div>
              <h4>{feature?.title}</h4>
              <p className="mb-4">
                {feature?.description}
              </p>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPageFeatures;
