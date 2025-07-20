 

const FeaturePageFeature = () => {
  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
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
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-aos="fade-up"
          >
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-chart-line fa-4x text-primary"></i>
              </div>
              <h4>Global Management</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.4s"
            data-aos="fade-up"
          >
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-university fa-4x text-primary"></i>
              </div>
              <h4>Corporate Banking</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.6s"
            data-aos="fade-up"
          >
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-file-alt fa-4x text-primary"></i>
              </div>
              <h4>Asset Management</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay="0.8s"
            data-aos="fade-up"
          >
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-hand-holding-usd fa-4x text-primary"></i>
              </div>
              <h4>Investment Bank</h4>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                laborum odit pariatur...
              </p>
              <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePageFeature;
