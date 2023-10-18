import React from "react";
import "./Faq.css";
import faqSideImg from "../../media/faq-side-img.png";

function Faq() {
  return (
    <div className="container mb60 mt100">
      <div className="row">
        <div className="col-12 col-md-6 mob_hide">
          <div className="faq_img">
            <div className="faq_img_box">
              <img src={faqSideImg} alt="faq side profile" />
            </div>
            <h2 className="heading text-start mt20">
              We're Here to <span className="primary_color">Help</span>
            </h2>
            <p className="heading_text text-start mob_hide">
              Property Discovery With Expert Guidance
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h2 className="heading mt20 desk_hide">
            We're Here to <span className="primary_color">Help</span>
          </h2>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How can I buy property through popularity.com?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  To buy a property through popularity.com, you need to visit
                  the website and follow simple steps:
                  <ul>
                    <li>
                      Visit the website through a desktop or mobile application.
                    </li>
                    <li>
                      Select the property that suits your requirements and fill
                      up the enquiry form.
                    </li>
                    <li>
                      Our Property expert will connect with you with the best
                      price and available options.
                    </li>
                    <li>
                      Visit the property with us and buy your dream property in
                      India.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Why should I choose popularity.com to buy a property?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  When it comes to choosing the right property for you ,
                  propularity is the most trusted platform. We help you find
                  your dream home and commercial space through the efforts of
                  our professional property experts. All properties listed on
                  propularity are ReRe registered and from top notch builders in
                  the country, you can easily get a home loan from all leading
                  banks on all the properties listed with us.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  In which cities are you providing your services?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our services are available all over India, currently, you can
                  buy property in Gurgaon and Mumbai. Besides this, we will be
                  available in Delhi, Noida, Pune and other top cities very
                  soon.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What types of properties are available on popularity.com?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  We have a curated list of best residential properties in India
                  including flats, apartments, villas, plots, farm houses,
                  kothis and approved commercial offices spaces on rent and
                  sale. Our listing include everything from new projects, resale
                  properties, under construction properties, and best upcoming
                  and under construction residential and commercial projects in
                  India.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapsefive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  How to get in touch with Propularity?
                </button>
              </h2>
              <div
                id="flush-collapsefive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Our dedicated professional team is available for you, drop
                  your enquiry with your contact details and our team will get
                  in touch with you within 24 hours of your request.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Are there any kind of brokerage charges payable while buying a
                  property?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  No, there is no brokerage on buying a new property on
                  propularity. However brokerage shall be charged on any other
                  transaction you do through the platform. You can find your
                  dream property through our professional sales team. They will
                  assist you in finding the best property for you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
