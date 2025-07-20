 
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="container-fluid topbar bg-light px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-flex flex-wrap">
            <Link to="/contact" className="text-muted small me-4">
              <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A
              Location
            </Link>
            <a href="tel:+01234567890" className="text-muted small me-4">
              <i className="fas fa-phone-alt text-primary me-2"></i>+01234567890
            </a>
            <a href="mailto:example@gmail.com" className="text-muted small me-0">
              <i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
