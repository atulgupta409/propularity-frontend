import React, { useState } from "react";
import star from "../media/star-rating.png";
import sampleImage from "../media/sample-image.png";
import icon from "../media/icon.png";
import { IoMdPhotos } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import ContactForm from "../form/ContactForm";
import contactImage from "../media/sumit-sir-contact-main.png";
import "./Project.css";
import buildingIcon from "../media/building-icon.png";
import floorImg from "../media/floor-plan.png";
import masterPlan from "../media/master-plan.png";
import MyCarousel from "../carousel/MyCarousel";
import EmiCalculator from "../emi-calculator/EmiCalculator";

function Project() {
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
  const floorPlanChange = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 m60">
          <h1 className="builder_h1">M3M Golf 79</h1>
          <img src={star} alt="star" className="star" />
          <p className="detail_p d-inline-block">
            <span className="me-2">4.0</span> Golf Course Extension Road, Sector
            67, Gurugram
          </p>
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
                <h4 className="detail_h4">Project Type</h4>
                <p className="detail_p">Residential</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Project Size</h4>
                <p className="detail_p">19.47 Acres</p>
              </div>
            </div>
          </div>
          <div className="col-12 builder_overview mt20">
            <div className="d-flex">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Configuration</h4>
                <p className="detail_p">2BHK, 3BHK, 4BHK, 5BHK</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Project Status</h4>
                <p className="detail_p">Ready To Move</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m60">
        <div className="col-8 main_section_detail">
          <p className="about_builder mt-0">{shortAboutText}</p>
          {shortAboutText?.length < 351 ? (
            <button className="read_btn" onClick={readMore}>
              Read more <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          ) : (
            <button className="read_btn" onClick={readLess}>
              Read less <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          )}
          <div className="row">
            <h3 className="mt30">M3M Golf 79 Configuration</h3>
            <div className="project_configuration mt30">
              <div className="configuration_box mb30">
                <div className="config_size">
                  <h6>3BHK Apartment</h6>
                  <p>2042 sq.ft - 2408 sq.ft</p>
                </div>
                <div className="config_price">
                  <div>
                    <p>Price</p>
                    <p>₹ 1.78 Cr Onwards</p>
                  </div>
                  <img src={buildingIcon} alt="building" />
                </div>
              </div>
              <div className="configuration_box mb30">
                <div className="config_size">
                  <h6>4BHK Apartment</h6>
                  <p>2402 sq.ft - 2808 sq.ft</p>
                </div>
                <div className="config_price">
                  <div>
                    <p>Price</p>
                    <p>₹ 1.78 Cr Onwards</p>
                  </div>
                  <img src={buildingIcon} alt="building" />
                </div>
              </div>
              <div className="configuration_box mb30">
                <div className="config_size">
                  <h6>5BHK Apartment</h6>
                  <p>3042 sq.ft - 3408 sq.ft</p>
                </div>
                <div className="config_price">
                  <div>
                    <p>Price</p>
                    <p>₹ 1.78 Cr Onwards</p>
                  </div>
                  <img src={buildingIcon} alt="building" />
                </div>
              </div>
              <div className="configuration_box mb30">
                <div className="config_size">
                  <h6>5BHK Apartment</h6>
                  <p>4042 sq.ft - 4408 sq.ft</p>
                </div>
                <div className="config_price">
                  <div>
                    <p>Price</p>
                    <p>₹ 1.78 Cr Onwards</p>
                  </div>
                  <img src={buildingIcon} alt="building" />
                </div>
              </div>
            </div>
          </div>
          <hr className="divider_line" />
          <div className="row">
            <h3 className="mt30">M3M Golf 79 Floor Plans</h3>
            <button className="floor_plan_btn mt20" onClick={floorPlanChange}>
              3 BHK Floor Plans
            </button>
            <button className="floor_plan_btn mt20" onClick={floorPlanChange}>
              4 BHK Floor Plans
            </button>
            <div className="floor_configuration mt30">
              <div className="floor_plan_card">
                <div className="floor_img">
                  <img src={floorImg} alt="floor plan" className="img-fluid" />
                </div>
                <div className="card_body">
                  <h5 className="card_title">3 BHK Apartment 1224 Sq.ft</h5>
                  <div className="row d-flex justify-content-between">
                    <div className="col-6">
                      <p>Rent Price</p>
                      <p>₹ 15,000/month</p>
                    </div>
                    <div className="col-4">
                      <p>Sale Price</p>
                      <p>₹ 1.85 Cr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floor_plan_card">
                <div className="floor_img">
                  <img src={floorImg} alt="floor plan" className="img-fluid" />
                </div>
                <div className="card_body">
                  <h5 className="card_title">3 BHK Apartment 1224 Sq.ft</h5>
                  <div className="row d-flex justify-content-between">
                    <div className="col-6">
                      <p>Rent Price</p>
                      <p>₹ 15,000/month</p>
                    </div>
                    <div className="col-4">
                      <p>Sale Price</p>
                      <p>₹ 1.85 Cr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floor_plan_card">
                <div className="floor_img">
                  <img src={floorImg} alt="floor plan" className="img-fluid" />
                </div>
                <div className="card_body">
                  <h5 className="card_title">3 BHK Apartment 1224 Sq.ft</h5>
                  <div className="row d-flex justify-content-between">
                    <div className="col-6">
                      <p>Rent Price</p>
                      <p>₹ 15,000/month</p>
                    </div>
                    <div className="col-4">
                      <p>Sale Price</p>
                      <p>₹ 1.85 Cr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floor_plan_card">
                <div className="floor_img">
                  <img src={floorImg} alt="floor plan" className="img-fluid" />
                </div>
                <div className="card_body">
                  <h5 className="card_title">3 BHK Apartment 1224 Sq.ft</h5>
                  <div className="row d-flex justify-content-between">
                    <div className="col-6">
                      <p>Rent Price</p>
                      <p>₹ 15,000/month</p>
                    </div>
                    <div className="col-4">
                      <p>Sale Price</p>
                      <p>₹ 1.85 Cr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider_line" />
          <div className="row">
            <h3 className="mt30">M3M Golf 79 Highlights</h3>
            <ul className="mt20 highlights">
              <li>55 Acres Land Parcel</li>
              <li>Total Tower – 27 G + 30</li>
              <li>2 Modern Clubhouses</li>
              <li>Golf and Aravali Facing Towers</li>
              <li>Energy efficient VRV/VRF Air conditioned apartments</li>
              <li>Italian Marble Flooring</li>
              <li>Pay 40 % Car Parking waived</li>
              <li>Pay 30% Club charges waived</li>
            </ul>
          </div>
          <hr className="divider_line" />
          <div className="row">
            <h3 className="mt30">M3M Golf 79 Amenities</h3>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
            <div className="col-6 col-md-4 facility mt20">
              <img src={buildingIcon} alt="building icon" />
              <p>Grade A building</p>
            </div>
          </div>
          <hr className="divider_line" />
          <div className="row map">
            <h3 className="mt30">M3M Golf 79</h3>
            <p className="mt-2">
              Golf Course Extension Road, Sector 69, Gurugram
            </p>
            <div className="map_box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14039.739422316317!2d77.06794775!3d28.3910355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692360225546!5m2!1sen!2sin"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <hr className="divider_line" />
          <div className="row">
            <h3 className="mt30">M3M Golf 79 Master Plan</h3>
            <div className="master_plan mt20">
              <img src={masterPlan} alt="master plan" className="img-fluid" />
            </div>
          </div>
          <hr className="divider_line" />
          <div className="row">
            <h3 className="mt30">About M3M Golf 79</h3>
            <p className="about_builder mt20">{shortAboutText}</p>
            <div>
              {shortAboutText?.length < 351 ? (
                <button className="read_btn" onClick={readMore}>
                  Read more <MdKeyboardArrowRight className="read_more_icon" />
                </button>
              ) : (
                <button className="read_btn" onClick={readLess}>
                  Read less <MdKeyboardArrowRight className="read_more_icon" />
                </button>
              )}
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

        <div className="row">
          <hr className="divider_line" />
          <h3 className="mt30">Properties for rent in M3M Golf 79</h3>
          <div className="my_carousel mt20">
            <MyCarousel carouselClass={"full_carousel"} />
          </div>
        </div>
        <div className="calci_box">
          <EmiCalculator />
        </div>
        <div className="row">
          <h3>Properties for sale in M3M Golf 79</h3>
          <div className="my_carousel mt20">
            <MyCarousel carouselClass={"full_carousel"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
