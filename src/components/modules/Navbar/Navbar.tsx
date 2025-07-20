import  { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [pathname, setPathName] = useState<string>("/");
  const [fixTop, setFixTop] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setPathName(location.pathname);
  }, []);

  useEffect(() => {
    const fixNavbarToTop = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 105) {
        setFixTop(true);
      } else {
        setFixTop(false);
      }
    };

    window.addEventListener("scroll", fixNavbarToTop);

    return () => window.removeEventListener("scroll", fixNavbarToTop);
  }, []);

  return (
    <div className={`container-fluid  position-relative p-0 `}>
      <nav
        className={`navbar  navbar-expand-lg ${
          fixTop ? " position-fixed bg-white navbar_animation " : "position-relative"
        } navbar-light px-4 px-lg-5 py-3 py-lg-0 `}
      >
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary">
            <i className="fas fa-search-dollar me-3"></i>Stocker
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink
              to="/"
              className={`nav-item nav-link ${"/" === pathname && "active"}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={` nav-item nav-link ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={` nav-item nav-link ${
                pathname === "/service" ? "active" : ""
              }`}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={`nav-item nav-link ${
                pathname === "/blogs" ? "active" : ""
              }`}
            >
              Blogs
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink
                to="/#"
                className={`nav-link ${
                  pathname === "/feature" ||
                  pathname === "/team" ||
                  pathname === "testimonial" ||
                  pathname === "offer" ||
                  pathname === "faq"
                    ? "active"
                    : ""
                }`}
                data-bs-toggle="dropdown"
              >
                <span className="dropdown-toggle">Pages</span>
              </NavLink>
              <div className="dropdown-menu m-0">
                <NavLink to="/feature" className="dropdown-item">
                  Our Features
                </NavLink>
                <NavLink to="/team" className="dropdown-item">
                  Our team
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item">
                  Testimonial
                </NavLink>
                <NavLink to="/offer" className="dropdown-item">
                  Our offer
                </NavLink>
                <NavLink to="/FAQ" className="dropdown-item">
                  FAQs
                </NavLink>
                <NavLink to="/404" className="dropdown-item">
                  404 Page
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/contact"
              className={`nav-item nav-link ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact Us
            </NavLink>
          </div>
          <a
            href="#"
            className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
          >
            Get Started
          </a>
        </div>
      </nav>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="header-carousel-item h-100">
            <div
              className="position-absolute bg-black top-0 right-0 left-0  w-100 h-100"
              style={{ zIndex: 1000, background: "#000000b7" }}
            ></div>

            <img
              src="img/carousel-1.jpg"
              className="img-fluid w-100 h-100"
              alt="Image"
            />
            <div className="carousel-caption" style={{ zIndex: 1001 }}>
              <div className="container">
                <div className="row gy-0 gx-5">
                  <div className="col-lg-0 col-xl-5"></div>
                  <div className="col-xl-7 animated fadeInLeft">
                    <div className="text-sm-center text-md-end">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To Stocker
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        Invest your money with higher return
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                        <a
                          className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fas fa-play-circle me-2"></i> Watch
                          Video
                        </a>
                        <a
                          className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                        <h2 className="text-white me-2">Follow Us:</h2>
                        <div className="d-flex justify-content-end ms-2">
                          <a
                            className="btn btn-md-square btn-light rounded-circle me-2"
                            href=""
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href=""
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href=""
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle ms-2"
                            href=""
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header-carousel-item h-100 position-relative">
            <div
              className="position-absolute bg-black top-0 right-0 left-0  w-100 h-100"
              style={{ zIndex: 1000, background: "#000000b7" }}
            ></div>
            <img
              src="img/carousel-2.jpg"
              className="img-fluid w-100 h-100"
              alt="Image"
            />
            <div className="carousel-caption bg-black" style={{ zIndex: 1001 }}>
              <div className="container">
                <div className="row g-5">
                  <div className="col-12 animated fadeInUp">
                    <div className="text-center">
                      <h4 className="text-primary text-uppercase fw-bold mb-4">
                        Welcome To Stocker
                      </h4>
                      <h1 className="display-4 text-uppercase text-white mb-4">
                        Invest your money with higher return
                      </h1>
                      <p className="mb-5 fs-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy...
                      </p>
                      <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                        <a
                          className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                          href="#"
                        >
                          <i className="fas fa-play-circle me-2"></i> Watch
                          Video
                        </a>
                        <a
                          className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                          href="#"
                        >
                          Learn More
                        </a>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <h2 className="text-white me-2">Follow Us:</h2>
                        <div className="d-flex justify-content-end ms-2">
                          <a
                            className="btn btn-md-square btn-light rounded-circle me-2"
                            href=""
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href=""
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle mx-2"
                            href=""
                          >
                            <i className="fab fa-instagram"></i>
                          </a>
                          <a
                            className="btn btn-md-square btn-light rounded-circle ms-2"
                            href=""
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Navbar;
