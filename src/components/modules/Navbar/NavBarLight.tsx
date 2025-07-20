import  { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBarLight = () => {
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
    <div className={`container-fluid position-relative p-0`}>
      <nav
        className={`navbar  navbar-expand-lg ${
          fixTop
            ? " position-fixed bg-white navbar_animation "
            : "position-relative"
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
    </div>
  );
};

export default NavBarLight;
