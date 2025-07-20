import  { useEffect, useState } from "react";

const BackToTop = () => {
  const [fixTop , setFixTop] = useState<boolean>(false)
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
    <a
      href="#"
      className={`btn btn-primary btn-lg-square rounded-circle back-to-top d-flex justify-content-center align-items-center ${fixTop ? "d-flex" : "d-none"}`}
    >
      <i className="fa fa-arrow-up"></i>
    </a>
  );
};

export default BackToTop;
