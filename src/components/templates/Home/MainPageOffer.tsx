const MainPageOffer = () => {
  return (
    <div className="container-fluid offer-section pb-5">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px;"}}>
            <h4 className="text-primary">Our Offer</h4>
            <h1 className="display-5 mb-4">Benefits We offer</h1>
            <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
            </p>
        </div>
        <div className="row g-5 align-items-center">
            <div className="col-xl-5 wow fadeInLeft" data-aos="fade-up">
                <div className="nav nav-pills bg-light rounded p-5">
                    <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                        <h5 className="mb-0">Lending money for investment of your new projects</h5>
                    </a>
                    <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                        <h5 className="mb-0">Lending money for investment of your new projects</h5>
                    </a>
                    <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                        <h5 className="mb-0">Mobile payment is more flexible and easy for all investors</h5>
                    </a>
                    <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                        <h5 className="mb-0">all transaction is kept free for the member of pro traders</h5>
                    </a>
                </div>
            </div>
            <div className="col-xl-7 wow fadeInRight"  data-aos="fade-up">
                <div className="tab-content" >
                    <div id="collapseOne" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            <div className="col-md-7" >
                                <img src="img/offer-1.jpg" className="img-fluid w-100 rounded" alt="" />
                            </div>
                            <div className="col-md-5" >
                                <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div id="collapseTwo" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-7">
                                <img src="img/offer-2.jpg" className="img-fluid w-100 rounded" alt="" />
                            </div>
                            <div className="col-md-5">
                                <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div id="collapseThree" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-7">
                                <img src="img/offer-3.jpg" className="img-fluid w-100 rounded" alt="" />
                            </div>
                            <div className="col-md-5">
                                <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div id="collapseFour" className="tab-pane fade show p-0">
                        <div className="row g-4">
                            <div className="col-md-7">
                                <img src="img/offer-4.jpg" className="img-fluid w-100 rounded" alt="" />
                            </div>
                            <div className="col-md-5">
                                <h1 className="display-5 mb-4">The stock market provides a venue...</h1>
                                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet sequi molestiae tenetur eum mollitia, blanditiis, magnam illo magni error dolore unde perspiciatis tempore et totam corrupti dignissimos aut praesentium?
                                </p>
                                <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainPageOffer