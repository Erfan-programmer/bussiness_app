 
import ContactForms from "../../modules/Contact/ContactForms";

const ContactPageContact = () => {

  return (
    <div className="container-fluid contact py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-6" data-aos="fade-up">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <div className="bg-light rounded p-5 mb-5">
                <h4 className="text-primary mb-4">Get in Touch</h4>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-map-marker-alt fa-2x"></i>
                      </div>
                      <div>
                        <h4>Address</h4>
                        <p className="mb-0">123 Street New York.USA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-envelope fa-2x"></i>
                      </div>
                      <div>
                        <h4>Mail Us</h4>
                        <p className="mb-0">info@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fa fa-phone-alt fa-2x"></i>
                      </div>
                      <div>
                        <h4>Telephone</h4>
                        <p className="mb-0">(+012) 3456 7890</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-add-item">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fab fa-firefox-browser fa-2x"></i>
                      </div>
                      <div>
                        <h4>Yoursite@ex.com</h4>
                        <p className="mb-0">(+012) 3456 7890</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-light p-5 rounded h-100 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <h4 className="text-primary">Send Your Message</h4>
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.{" "}
                  <a
                    className="text-primary fw-bold"
                    href="https://htmlcodex.com/contact-form"
                  >
                    Download Now
                  </a>
                  .
                </p>
                <ContactForms />

              </div>
            </div>
          </div>
          <div className="col-xl-6 wow fadeInRight" data-aos="fade-up">
            <div className="rounded h-100">
              <iframe
                className="rounded h-100 w-100"
                style={{ height: "400px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContact;
