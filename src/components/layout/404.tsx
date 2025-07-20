 
import Spinner from "../modules/Spinner/Spinner";
import TopBarLight from "../modules/TopBar/TopBarLight";
import NavBarLight from "../modules/Navbar/NavBarLight";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Spinner />
      <TopBarLight />
      <NavBarLight />
      <div className="container-fluid bg-light py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <i
                className="far fa-frown-open display-1 text-primary mb-4"
                style={{width: "80px" , height: "80px"}}
              ></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <Link
                className="btn btn-primary rounded-pill py-3 px-5"
                to="/"
              >
                Go Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
