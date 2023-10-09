import React, { useState, useEffect } from "react";
import star from "../media/star-rating.png";
import { IoMdPhotos } from "react-icons/io";
import ContactForm from "../form/ContactForm";
import contactImage from "../media/sumit-sir-contact-main.png";
import "./Project.css";
import buildingIcon from "../media/building-icon.png";
import EmiCalculator from "../emi-calculator/EmiCalculator";
import { GET_PROJECT_DETAILS } from "../../service/ProjectDetailsservice";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import LeafletMap from "./LeafletMap";
import Carousel from "react-bootstrap/Carousel";

function Project() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      slug: slug,
    },
  });

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
  const latitude = data?.projectDetails[0]?.location?.latitude;
  const longitude = data?.projectDetails[0]?.location?.longitude;

  const amenities = data?.projectDetails[0]?.amenties;
  const [readMoretext, setReadMoreText] = useState(false);
  const readMore = () => {
    setReadMoreText(!readMoretext);
  };

  const readLess = () => {
    // setShortAboutText(aboutText.substring(0, 350));
  };
  const [floorPlan, setFloorPlan] = useState("");

  useEffect(() => {
    setFloorPlan(data?.projectDetails[0]?.plans[0]?.category[0]?.name);
  }, [data]);

  const noImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg";

  const floorPlanChange = (e) => {
    const innerValue = e.target.innerText;
    const planType = innerValue.replace("floor plan", "");
    setFloorPlan(planType.trim());
  };

  const downloadPdf = async () => {
    try {
      const response = await fetch(data?.projectDetails[0]?.brochure);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "downloaded-pdf.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-6 m60">
              <h1 className="builder_h1">{data?.projectDetails[0]?.name}</h1>
              <img src={star} alt="star" className="star" />
              <p className="detail_p d-inline-block">
                <span className="me-2">{data?.projectDetails[0]?.ratings}</span>{" "}
                {data?.projectDetails[0]?.location?.address}
              </p>
            </div>
            <div className="col-6 m60 p-0 d-flex flex-column align-items-end mob_hide">
              <p className="detail_p mob_hide">Starting Price</p>
              <h1 className="mob_hide">
                <span style={{ color: "#ff385c" }}>
                  ₹ {data?.projectDetails[0]?.starting_price}
                </span>{" "}
                Onwards
              </h1>
            </div>
          </div>
          <div className="row mt30">
            <div className="col-12 desk_hide">
              <Carousel interval={null} controls={false}>
                {data?.projectDetails[0]?.images?.map((image, i) => {
                  return (
                    <Carousel.Item key={i}>
                      <div className="img_card">
                        <img
                          src={
                            data?.projectDetails[0]?.images?.length !== 0
                              ? image?.image
                              : noImage
                          }
                          alt={image?.alt}
                          className="img-fluid img_cover"
                        />
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>

            <div className="col-6 mob_hide">
              <div className="main_img">
                <img
                  src={
                    data?.projectDetails[0]?.images?.length > 0
                      ? data?.projectDetails[0]?.images[0]?.image
                      : noImage
                  }
                  className="img-fluid"
                  alt={data?.projectDetails[0]?.images[0]?.alt}
                />
              </div>
            </div>
            <div className="col-3 small_img_main mob_hide">
              <div className="col-12">
                <div className="small_img">
                  <img
                    src={
                      data?.projectDetails[0]?.images?.length > 1
                        ? data?.projectDetails[0]?.images[1]?.image
                        : noImage
                    }
                    alt={data?.projectDetails[0]?.images[1]?.alt}
                  />
                </div>
              </div>
              <div className="col-12 mt20">
                <div className="small_img small_img_position">
                  <img
                    src={
                      data?.projectDetails[0]?.images?.length > 2
                        ? data?.projectDetails[0]?.images[2]?.image
                        : noImage
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
            <div className="col-12 col-md-3 pe-md-0">
              <div className="col-12 builder_overview mt-3 mt-md-0">
                <div className="d-flex">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617884484.png"
                    alt="icon"
                    className="project_icons"
                  />
                  <div className="ms-2">
                    <h4 className="detail_h4">Project Type</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.project_type}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-md-3">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617864882.png"
                    alt="icon"
                    className="project_icons"
                  />
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
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617875044.png"
                    alt="icon"
                    className="project_icons"
                  />
                  <div className="ms-2">
                    <h4 className="detail_h4">Configuration</h4>
                    <p className="detail_p">
                      {data?.projectDetails[0]?.configuration}
                    </p>
                  </div>
                </div>
                <div className="d-flex mt-md-3">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617895244.png"
                    alt="icon"
                    className="project_icons"
                  />
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
          <hr className="devider_line desk_hide" />
          <div className="row detail_main_box">
            <div className="col-12 col-md-8">
              <div className="main_section_detail">
                <p className="about_builder mt-0 mob_hide">
                  {data?.projectDetails[0]?.short_descrip}
                </p>
                <div className="row">
                  <h3 className="mt30">
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    Price
                  </h3>
                  <div className="project_configuration mt30">
                    {data?.projectDetails[0]?.plans?.map((plan, i) => {
                      return (
                        <div className="configuration_box mb30" key={i}>
                          <div className="config_size">
                            <h6>
                              {plan?.category[0]?.name
                                ?.toLowerCase()
                                ?.includes("bhk")
                                ? plan?.category[0]?.name + " Apartment"
                                : plan?.category[0]?.name}
                            </h6>
                            <p>
                              {plan?.size +
                                (plan?.size_sq ? plan?.size_sq : "Sq.Ft")}
                            </p>
                          </div>
                          <div className="config_price">
                            <div>
                              <p>Price</p>
                              <p>
                                {plan?.price ===
                                ("Call For Price" ||
                                  "call for price" ||
                                  "Call for price" ||
                                  "Call for Price") ? (
                                  <a
                                    href="tel:9999063322"
                                    className="project_details_link"
                                  >
                                    Call For Offer
                                  </a>
                                ) : (
                                  "Starting ₹ " + plan?.price
                                )}
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
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    Floor Plans
                  </h3>
                  <div className="row floor_plan_scrollar">
                    {data?.projectDetails[0]?.plans && (
                      <>
                        {Array.from(
                          new Set(
                            data.projectDetails[0].plans.map(
                              (plan) => plan.category[0].name
                            )
                          )
                        ).map((uniqueName, i) => (
                          <button
                            className="floor_plan_btn mt20"
                            onClick={floorPlanChange}
                            key={i}
                          >
                            {uniqueName} floor plan
                          </button>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="floor_configuration mt30">
                    {data?.projectDetails[0]?.plans
                      ?.filter((plan) => plan.category[0].name === floorPlan)
                      .map((myPlan, j) => (
                        <div className="floor_plan_card lightbox" key={j}>
                          <div className="floor_img">
                            <img
                              src={
                                myPlan.image.length > 0
                                  ? myPlan.image[0]
                                  : noImage
                              }
                              alt={
                                myPlan.image.length > 0
                                  ? `${data?.projectDetails[0]?.name} floor plan`
                                  : "No floor plan"
                              }
                              className="img-fluid clickable-image"
                            />
                            {myPlan.image.length > 0 && (
                              <>
                                <div className="view_floor_plan_img">
                                  <button
                                    type="button"
                                    className="btn view_img_btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    View Floor Plan
                                  </button>
                                </div>

                                <div
                                  className="modal fade"
                                  id="exampleModal"
                                  tabindex="-1"
                                  aria-labelledby="exampleModalLabel"
                                  aria-hidden="true"
                                >
                                  <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h5
                                          className="modal-title"
                                          id="exampleModalLabel"
                                        >
                                          {`${
                                            data?.projectDetails[0]?.name +
                                            " " +
                                            data?.projectDetails[0]?.location
                                              ?.city[0]?.name
                                          } floor plan`}
                                        </h5>
                                        <button
                                          type="button"
                                          className="btn-close"
                                          data-bs-dismiss="modal"
                                          aria-label="Close"
                                        ></button>
                                      </div>
                                      <div className="modal-body">
                                        <img
                                          src={
                                            myPlan.image.length > 0
                                              ? myPlan.image[0]
                                              : ""
                                          }
                                          alt={`${
                                            data?.projectDetails[0]?.name +
                                            " " +
                                            data?.projectDetails[0]?.location
                                              ?.city[0]?.name
                                          } floor plan`}
                                          className="img-fluid"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="card_body">
                            <h5 className="card_title">
                              {myPlan.category[0]?.name +
                                " Apartment" +
                                " " +
                                myPlan?.size +
                                (myPlan?.size_sq ? myPlan?.size_sq : "Sq.Ft")}
                            </h5>
                            <div className="row d-flex justify-content-between">
                              {data?.projectDetails[0]?.for_sale && (
                                <div className="col-6">
                                  <p>Sale Price</p>
                                  <p>
                                    {myPlan?.price ===
                                    ("Call For Price" ||
                                      "call for price" ||
                                      "Call for price" ||
                                      "Call for Price") ? (
                                      <a
                                        href="tel: 9999063322"
                                        className="project_details_link"
                                      >
                                        Call For Price
                                      </a>
                                    ) : (
                                      "Starting ₹ " + myPlan?.price
                                    )}
                                  </p>
                                </div>
                              )}
                              {data?.projectDetails[0]?.for_rent && (
                                <div className="col-6">
                                  <p>Rent Price</p>
                                  <p>
                                    {myPlan?.price ===
                                    ("Call For Price" ||
                                      "call for price" ||
                                      "Call for price" ||
                                      "Call for Price") ? (
                                      <a
                                        href="tel: 9999063322"
                                        className="project_details_link"
                                      >
                                        Call For Price
                                      </a>
                                    ) : (
                                      "Starting ₹ " + myPlan?.price
                                    )}
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
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    Highlights
                  </h3>
                  {data?.projectDetails[0]?.highlights !== "<p></p>\n" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.projectDetails[0]?.highlights,
                      }}
                      className="project_highlights"
                    ></div>
                  ) : (
                    <p className="no_data_p">No Highlights Available</p>
                  )}
                </div>
                <hr className="divider_line" />
                <div className="row">
                  <h3 className="mt30">
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    Amenities
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
                  <h3 className="mt30">
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    on Google Map
                  </h3>
                  <p className="mt-2">
                    {data?.projectDetails[0]?.location?.address}
                  </p>
                  <div className="map_box">
                    <LeafletMap
                      latitude={latitude}
                      longitude={longitude}
                      name={data?.projectDetails[0]?.name}
                    />
                  </div>
                </div>
                <hr className="divider_line" />
                <div className="row">
                  <h3 className="mt30">
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}{" "}
                    Master Plan
                  </h3>
                  {data?.projectDetails[0]?.master_plan ? (
                    <div className="master_plan mt20">
                      <img
                        src={data?.projectDetails[0]?.master_plan}
                        data-mdb-img={data?.projectDetails[0]?.master_plan}
                        alt={
                          data?.projectDetails[0]?.name + " " + "master plan"
                        }
                        className="img-fluid"
                      />
                      <div className="view_floor_plan_img">
                        <button
                          type="button"
                          className="btn view_master_btn"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          View Master Plan
                        </button>
                      </div>

                      <div
                        className="modal fade"
                        id="exampleModal2"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                {`${
                                  data?.projectDetails[0]?.name +
                                  " " +
                                  data?.projectDetails[0]?.location?.city[0]
                                    ?.name
                                } master plan`}
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <img
                                src={
                                  data?.projectDetails[0]?.master_plan
                                    ? data?.projectDetails[0]?.master_plan
                                    : noImage
                                }
                                alt={`${data?.projectDetails[0]?.name} master plan`}
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="no_data_p">No Master Plan Available</p>
                  )}
                </div>
                <hr className="divider_line" />
                <div className="row">
                  <h3 className="mt30">
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.micro_location[0]
                        ?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}
                  </h3>
                  {data?.projectDetails[0]?.description !== "<p></p>\n" ? (
                    <p className="about_builder mt20">{aboutText}</p>
                  ) : (
                    <p className="no_data_p">Not Available</p>
                  )}
                  {data?.projectDetails[0]?.brochure && (
                    <div className="brochure">
                      <RequestCallBtn
                        button_name={"Download Brochure"}
                        downloadPdf={downloadPdf}
                      />
                    </div>
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
                      href="mailto: hello@propularity.in"
                      className="form_email"
                    >
                      hello@propularity.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider_line" />
            <div className="row">
              {data?.projectDetails[0]?.for_sale && (
                <>
                  {" "}
                  <h3 className="mt30">
                    Apartment for Sale in{" "}
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}
                  </h3>
                  <div className="my_carousel projects_carousel mt20">
                    <ProjectCard
                      isRent={false}
                      carouselclassName={"full_carousel"}
                      isProjectcard={true}
                      name={data?.projectDetails[0]?.name}
                      city={data?.projectDetails[0]?.location?.city[0]?.name}
                      microlocation={
                        data?.projectDetails[0]?.location?.micro_location[0]
                          ?.name
                      }
                      projectImages={data?.projectDetails[0]?.images}
                      starting_price={data?.projectDetails[0]?.starting_price}
                      floorPlans={data?.projectDetails[0]?.plans}
                      isSale={true}
                    />
                  </div>{" "}
                </>
              )}
            </div>
            <div className="calci_box">
              <EmiCalculator />
            </div>
            <div className="row">
              {data?.projectDetails[0]?.for_rent && (
                <>
                  <h3>
                    Apartment for Rent in{" "}
                    {data?.projectDetails[0]?.name +
                      " " +
                      data?.projectDetails[0]?.location?.city[0]?.name}
                  </h3>
                  <div className="my_carousel projects_carousel mt20">
                    <ProjectCard
                      isRent={true}
                      carouselclassName={"full_carousel"}
                      isProjectcard={true}
                      name={data?.projectDetails[0]?.name}
                      city={data?.projectDetails[0]?.location?.city[0]?.name}
                      microlocation={
                        data?.projectDetails[0]?.location?.micro_location[0]
                          ?.name
                      }
                      projectImages={data?.projectDetails[0]?.images}
                      starting_price={data?.projectDetails[0]?.starting_price}
                      floorPlans={data?.projectDetails[0]?.plans}
                      isSale={true}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <nav className="navbar fixed-bottom navbar-light desk_hide fixed_bottom">
        <div className="container-fluid">
          <div className="starting_price">
            <p>Starting</p>
            <p>
              ₹ {data?.projectDetails[0]?.starting_price}{" "}
              <span style={{ color: "#222", fontSize: "13px" }}>Onwards</span>
            </p>
          </div>
          <button>
            <RequestCallBtn button_name={"Enquire"} darkBtn={true} />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Project;
