import React, { useState, useEffect } from "react";
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
import { GET_PROJECT_DETAILS } from "../../service/ProjectDetailsservice";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import ImageModal from "./ImageModal";

function Project() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      slug: slug,
    },
  });

  console.log(data?.projectDetails);

  function removeHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    if (data?.projectDetails && data?.projectDetails?.length > 0) {
      const description = data?.projectDetails[0]?.description;
      const plainText = removeHtmlTags(description);
      setAboutText(plainText);
    }
  }, [data]);

  const [mapSrc, setMapSrc] = useState("");
  const latitude = data?.projectDetails[0]?.location?.latitude;
  const longitude = data?.projectDetails[0]?.location?.longitude;
  const encodedLatitude = encodeURIComponent(latitude);
  const encodedLongitude = encodeURIComponent(longitude);

  useEffect(() => {
    const dynamicMapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14039.739422316317!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692360225546!5m2!1sen!2sin&q=${encodedLongitude},${encodedLatitude}`;
    setMapSrc(dynamicMapSrc);
  }, [latitude, longitude]);

  const amenities = data?.projectDetails[0]?.amenties;
  const [readMoretext, setReadMoreText] = useState(false);
  const readMore = () => {
    setReadMoreText(!readMoretext);
  };
  console.log(readMoretext);
  const readLess = () => {
    // setShortAboutText(aboutText.substring(0, 350));
  };
  const [floorPlan, setFloorPlan] = useState("");

  useEffect(() => {
    setFloorPlan(data?.projectDetails[0]?.plans[0]?.category[0]?.name);
  }, [data]);

  const floorPlanChange = (e) => {
    const innerValue = e.target.innerText;
    const planType = innerValue.match(/\d+\sBHK/);
    setFloorPlan(planType[0]);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 m60">
              <h1 className="builder_h1">{data?.projectDetails[0].name}</h1>
              <img src={star} alt="star" className="star" />
              <p className="detail_p d-inline-block">
                <span className="me-2">{data?.projectDetails[0]?.ratings}</span>{" "}
                {data?.projectDetails[0]?.location?.address}
              </p>
            </div>
            <div className="col-6 m60 p-0 d-flex flex-column align-items-end">
              <p className="detail_p">Starting Price</p>
              <h1>
                <span style={{ color: "#ff385c" }}>
                  ₹ {data?.projectDetails[0]?.starting_price}
                </span>{" "}
                Onwards
              </h1>
            </div>
          </div>
          <div className="row mt30">
            <div className="col-6">
              <div className="main_img">
                <img
                  src={
                    data?.projectDetails[0]?.images?.length > 0
                      ? data?.projectDetails[0]?.images[0].image
                      : sampleImage
                  }
                  className="img-fluid"
                  alt={data?.projectDetails[0]?.images[0]?.alt}
                />
              </div>
            </div>
            <div className="col-3">
              <div className="col-12">
                <div className="small_img">
                  <img
                    src={
                      data?.projectDetails[0]?.images?.length > 0
                        ? data?.projectDetails[0]?.images[1].image
                        : sampleImage
                    }
                    alt={data?.projectDetails[0]?.images[1]?.alt}
                  />
                </div>
              </div>
              <div className="col-12 mt20">
                <div className="small_img small_img_position">
                  <img
                    src={
                      data?.projectDetails[0]?.images?.length > 0
                        ? data?.projectDetails[0]?.images[2].image
                        : sampleImage
                    }
                    alt={data?.projectDetails[0]?.images[2]?.alt}
                  />
                  <Link
                    to={`/${data?.projectDetails[0]?.builder[0]?.name.toLowerCase()}/${data?.projectDetails[0]?.location?.city[0]?.name.toLowerCase()}/${slug}/image-gallery`}
                  >
                    <div className="view_all_img">
                      <p>
                        <span>
                          <IoMdPhotos />
                        </span>{" "}
                        Show All Photos
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3 pe-0">
              <div className="col-12 builder_overview">
                <div className="d-flex">
                  <img src={icon} alt="icon" className="detail_icon" />
                  <div className="ms-2">
                    <h4 className="detail_h4">Project Type</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.project_type}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img src={icon} alt="icon" className="detail_icon" />
                  <div className="ms-2">
                    <h4 className="detail_h4">Project Size</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.project_size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 builder_overview mt20">
                <div className="d-flex">
                  <img src={icon} alt="icon" className="detail_icon" />
                  <div className="ms-2">
                    <h4 className="detail_h4">Configuration</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.configuration}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <img src={icon} alt="icon" className="detail_icon" />
                  <div className="ms-2">
                    <h4 className="detail_h4">Project Status</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.project_status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m60">
            <div className="col-8 main_section_detail">
              <p className="about_builder mt-0">
                {data?.projectDetails[0]?.short_descrip}
              </p>
              <div className="row">
                <h3 className="mt30">
                  {data?.projectDetails[0]?.name} Configuration
                </h3>
                <div className="project_configuration mt30">
                  {data?.projectDetails[0]?.plans?.map((plan, i) => {
                    return (
                      <div className="configuration_box mb30" key={i}>
                        <div className="config_size">
                          <h6>{plan.category[0].name} Apartment</h6>
                          <p>{plan.size + plan.size_sq}</p>
                        </div>
                        <div className="config_price">
                          <div>
                            <p>Price</p>
                            <p>
                              {plan.price === "coming soon" ||
                              "Coming soon" ||
                              "Coming Soon"
                                ? "Coming Soon"
                                : "₹" + " " + plan.price + " Onwards"}
                            </p>
                          </div>
                          <img src={buildingIcon} alt="building" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <hr className="divider_line" />
              <div className="row">
                <h3 className="mt30">
                  {data?.projectDetails[0]?.name} Floor Plans
                </h3>
                {data?.projectDetails[0]?.plans?.map((plan, i) => {
                  return (
                    <>
                      <button
                        className="floor_plan_btn mt20"
                        onClick={floorPlanChange}
                        key={i}
                      >
                        {plan.category[0].name} Floor Plans
                      </button>
                    </>
                  );
                })}
                <div className="floor_configuration mt30">
                  {data?.projectDetails[0]?.plans
                    ?.filter((plan) => plan.category[0].name === floorPlan)
                    .map((myPlan, j) => (
                      <div className="floor_plan_card lightbox" key={j}>
                        <div className="floor_img">
                          <img
                            src={myPlan.image.length > 0 ? myPlan.image[0] : ""}
                            alt={`${data?.projectDetails[0]?.name} floor plan`}
                            className="img-fluid clickable-image"
                            onClick={openModal}
                          />
                          {isModalOpen && (
                            <ImageModal
                              imageUrl={
                                myPlan.image.length > 0 ? myPlan.image[0] : ""
                              }
                              onClose={closeModal}
                            />
                          )}
                        </div>
                        <div className="card_body">
                          <h5 className="card_title">
                            {myPlan.category[0]?.name +
                              " Apartment" +
                              " " +
                              myPlan.size +
                              " " +
                              myPlan.size_sq}
                          </h5>
                          <div className="row d-flex justify-content-between">
                            {data?.projectDetails[0]?.for_sale && (
                              <div className="col-6">
                                <p>Sale Price</p>
                                <p>
                                  {myPlan.price === "coming soon" ||
                                  "Coming soon" ||
                                  "Coming Soon"
                                    ? "Coming Soon"
                                    : "₹ " + myPlan.price}
                                </p>
                              </div>
                            )}
                            {data?.projectDetails[0]?.for_rent && (
                              <div className="col-6">
                                <p>Rent Price</p>
                                <p>
                                  {myPlan.price === "coming soon" ||
                                  "Coming soon" ||
                                  "Coming Soon"
                                    ? "Coming Soon"
                                    : "₹ " + myPlan.price}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <hr className="divider_line" />
              <div className="row">
                <h3 className="mt30">
                  {data?.projectDetails[0]?.name} Highlights
                </h3>
                {data?.projectDetails[0]?.highlights !== "<p></p>\n" ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.projectDetails[0]?.highlights,
                    }}
                  ></div>
                ) : (
                  <p className="no_data_p">No Highlights Available</p>
                )}
              </div>
              <hr className="divider_line" />
              <div className="row">
                <h3 className="mt30">
                  {data?.projectDetails[0]?.name} Amenities
                </h3>
                {amenities?.length > 0 ? (
                  amenities?.map((amenity, i) => {
                    return (
                      <div className="col-6 col-md-4 facility mt20" key={i}>
                        <img src={amenity?.icon} alt="amenity icon" />
                        <p>{amenity?.name}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="no_data_p">No Amenities Available</p>
                )}
              </div>
              <hr className="divider_line" />
              <div className="row map">
                <h3 className="mt30">{data?.projectDetails[0]?.name}</h3>
                <p className="mt-2">
                  {data?.projectDetails[0]?.location?.address}
                </p>
                <div className="map_box">
                  <iframe
                    src={mapSrc}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <hr className="divider_line" />
              <div className="row">
                <h3 className="mt30">
                  {data?.projectDetails[0]?.name} Master Plan
                </h3>
                {data?.projectDetails[0]?.master_plan ? (
                  <div className="master_plan mt20">
                    <img
                      src={data?.projectDetails[0]?.master_plan}
                      data-mdb-img={data?.projectDetails[0]?.master_plan}
                      alt={data?.projectDetails[0]?.name + " " + "master plan"}
                      className="img-fluid"
                    />
                  </div>
                ) : (
                  <p className="no_data_p">No Master Plan Available</p>
                )}
              </div>
              <hr className="divider_line" />
              <div className="row">
                <h3 className="mt30">About {data?.projectDetails[0]?.name}</h3>
                <p className="about_builder mt20">{aboutText}</p>
                {/* <div>
                  <button className="read_btn" onClick={readMore}>
                    Read more{" "}
                    <MdKeyboardArrowRight className="read_more_icon" />
                  </button>
                </div> */}
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
              <h3 className="mt30">
                Properties for rent in {data?.projectDetails[0]?.name}
              </h3>
              <div className="my_carousel mt20">
                <MyCarousel carouselClass={"full_carousel"} />
              </div>
            </div>
            <div className="calci_box">
              <EmiCalculator />
            </div>
            <div className="row">
              <h3>Properties for sale in {data?.projectDetails[0]?.name}</h3>
              <div className="my_carousel mt20">
                <MyCarousel carouselClass={"full_carousel"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Project;
