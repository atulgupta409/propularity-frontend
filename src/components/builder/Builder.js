import React, { useState } from "react";
import "./Builder.css";
import star from "../media/star-rating.png";
import sampleImage from "../media/sample-image.png";
import icon from "../media/icon.png";
import ContactForm from "../form/ContactForm";
import { MdKeyboardArrowRight } from "react-icons/md";
import contactImage from "../media/sumit-sir-contact-main.png";
import MyCarousel from "../carousel/MyCarousel";
import { IoMdPhotos } from "react-icons/io";

function Builder() {
  const aboutText =
    "Emaar Capital Tower is a place for all who want to develop their Brand Equity and Fame in the world of Business and Retail Space with Top-Notch Office Space, Ground Floor Retail Shops, and other Entertaining spaces. It is prepared by Award-winning Architects. The Entrance of the Emaar MGF Capital Tower 1 is Spectacular and there are a lot more exciting features also. For More Details, You can call us at 99991-8999 and Get your Commercial Property in Emaar Capital Tower 1. Emaar MGF Capital Tower 1 at Downtown Sector-26 Gurgaon over G-12, is available with adjustable";
  const [shortAboutText, setShortAboutText] = useState(
    aboutText.substring(0, 350)
  );
  const readMore = () => {
    setShortAboutText(aboutText);
  };
  const readLess = () => {
    setShortAboutText(aboutText.substring(0, 350));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 m60">
          <h1 className="builder_h1">M3M India</h1>
          <img src={star} alt="star" className="star" />
          <p className="detail_p d-inline-block">4.0 Estd: 2011</p>
        </div>
        <div className="col-6 m60 p-0 d-flex flex-column align-items-end">
          <p className="detail_p">Starting Price</p>
          <h1>
            <span style={{ color: "#ff385c" }}>₹ 1.23 Cr</span> Onwards
          </h1>
        </div>
      </div>
      <div className="row mt30">
        <div className="col-6">
          <div className="main_img">
            <img src={sampleImage} className="img-fluid" alt="sample image" />
          </div>
        </div>
        <div className="col-3">
          <div className="col-12">
            <div className="small_img">
              <img src={sampleImage} alt="sample image" />
            </div>
          </div>
          <div className="col-12 mt20">
            <div className="small_img small_img_position">
              <img src={sampleImage} alt="sample image" />
              <div className="view_all_img">
                <p>
                  <span>
                    <IoMdPhotos />
                  </span>{" "}
                  Show All Photos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 pe-0">
          <div className="col-12 builder_overview">
            <div className="d-flex">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Cities</h4>
                <p className="detail_p">12+</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Configuration</h4>
                <p className="detail_p">Apartment, Villa, Offices, Shops</p>
              </div>
            </div>
          </div>
          <div className="col-12 builder_overview mt20">
            <div className="d-flex">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Residential Projects</h4>
                <p className="detail_p">12</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Commercial Projects</h4>
                <p className="detail_p">10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m60">
        <div className="col-8 main_section_detail">
          <h3>About M3M India</h3>
          <p className="about_builder">{shortAboutText}</p>
          {shortAboutText?.length < 351 ? (
            <button className="read_btn" onClick={readMore}>
              Read more <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          ) : (
            <button className="read_btn" onClick={readLess}>
              Read less <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          )}
          <hr className="divider_line" />
          <div className="residential_carousel mt30">
            <div className="res_heading">
              <h3>Residential Projects of M3M India</h3>
            </div>
            <div className="my_carousel">
              <MyCarousel carouselClass={"half_carousel"} />
            </div>
          </div>
          <hr className="divider_line" />
          <div className="residential_carousel mt30">
            <div className="res_heading">
              <h3>Commericial Projects of M3M India</h3>
            </div>
            <div className="my_carousel">
              <MyCarousel carouselClass={"half_carousel"} />
            </div>
          </div>
        </div>
        <div className="col-lg-4 mob_hide p-0">
          <div className="sticky_form">
            <div className="form_box">
              <ContactForm />
            </div>
            <div className="contact_form_footer">
              <div className="img_box_form">
                <img
                  src={contactImage}
                  alt="contact image"
                  className="img-fluid"
                />
              </div>
              <div className="ms-4">
                <h3 className="req_box text-align-center">Get in Touch</h3>
                <a
                  href="mailto: sumit.propularity@gmail.com"
                  className="form_email"
                >
                  sumit.propularity@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider_line" />
      <h3>Other Builders</h3>
      <div className="my_carousel">
        <MyCarousel carouselClass={"full_carousel"} />
      </div>
    </div>
  );
}

export default Builder;
