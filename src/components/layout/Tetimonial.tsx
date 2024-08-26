import React from 'react'
import Spinner from '../modules/Spinner/Spinner'
import NavBarLight from '../modules/Navbar/NavBarLight'
import TopBarLight from '../modules/TopBar/TopBarLight'
import Footer from '../modules/Footer/Footer'
import BackToTop from '../modules/BackToTop/BackToTop'
import TestimonialPageTestimonial from '../templates/Testimonial/TestimonialPageTestimonial'

const Testimonial = () => {
  return (
    <>
    <Spinner />
    <TopBarLight/>
    <NavBarLight/>
    <TestimonialPageTestimonial />
    <Footer />
    <BackToTop />
    </>
  )
}

export default Testimonial