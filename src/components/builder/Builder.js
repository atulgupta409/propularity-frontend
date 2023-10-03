import React, { useEffect, useState } from "react";
import "./Builder.css";
import star from "../media/star-rating.png";
import ContactForm from "../form/ContactForm";
import contactImage from "../media/sumit-sir-contact-main.png";
import { IoMdPhotos } from "react-icons/io";
import { useQuery } from "@apollo/client";
import {
  GET_ALL_BUILDERS_DATA,
  GET_ALL_PROJECTS_BY_BUILDER,
} from "../../service/BuildersService";
import { useParams, Link } from "react-router-dom";
import BuilderSlider from "../homepage/builders-slider/BuildersSlider";
import Carousel from "react-elastic-carousel";
import Card from "../card/Card";

function Builder() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2.4 },
    { width: 768, itemsToShow: 2.4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const { builder } = useParams();
  const slug = builder;
  const [builderData, setBuilderData] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_BUILDERS_DATA, {
    variables: { slug: slug },
  });
  const builderName = builderData[0]?.name;
  const {
    loading: projectLoading,
    error: projectError,
    data: projectData,
  } = useQuery(GET_ALL_PROJECTS_BY_BUILDER, {
    variables: { builderName },
  });

  useEffect(() => {
    if (data) {
      setBuilderData(data?.buildersBySlug);
    }
  }, [data]);
  const [projectType, setProjectType] = useState([]);

  useEffect(() => {
    if (projectData) {
      setProjectType(projectData.projectsByBuilder);
    }
  }, [projectData]);

  const noImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg";

  return (
    <div className="container mt-5" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-6 m60">
          <h1 className="builder_h1">{builderData[0]?.name}</h1>
          <img src={star} alt="star" className="star" />
          <p className="detail_p d-inline-block">
            {builderData[0]?.ratings} Estd: {builderData[0]?.estb_year}
          </p>
        </div>
        <div className="col-6 m60 p-0 d-flex flex-column align-items-end">
          <p className="detail_p">Starting Price</p>
          <h1>
            <span style={{ color: "#ff385c" }}>
              ₹ {builderData[0]?.starting_price}
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
                builderData[0]?.images?.length > 0
                  ? builderData[0]?.images[0]?.image
                  : noImage
              }
              className="img-fluid"
              alt={
                builderData[0]?.images?.length > 0
                  ? builderData[0]?.images[0]?.alt
                  : "no image"
              }
            />
          </div>
        </div>
        <div className="col-3 small_img_main">
          <div className="col-12">
            <div className="small_img">
              <img
                src={
                  builderData[0]?.images?.length > 1
                    ? builderData[0]?.images[1]?.image
                    : noImage
                }
                alt={
                  builderData[0]?.images?.length > 1
                    ? builderData[0]?.images[1]?.alt
                    : "no image"
                }
              />
            </div>
          </div>
          <div className="col-12 mt20">
            <div className="small_img small_img_position">
              <img
                src={
                  builderData[0]?.images?.length > 2
                    ? builderData[0]?.images[2]?.image
                    : noImage
                }
                alt={
                  builderData[0]?.images?.length > 2
                    ? builderData[0]?.images[2]?.alt
                    : "no image"
                }
              />
              {builderData[0]?.images?.length > 0 && (
                <Link to={`/builder/${builderData[0]?.slug}/image-gallery`}>
                  <div className="view_all_img">
                    <p>
                      <span>
                        <IoMdPhotos />
                      </span>{" "}
                      Show All Photos
                    </p>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="col-3 pe-0">
          <div className="col-12 builder_overview">
            <div className="d-flex">
              <img
                src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695805294596.png"
                alt="city icon"
                className="detail_icon"
              />
              <div className="ms-2">
                <h4 className="detail_h4">Cities</h4>
                <p className="detail_p">{builderData[0]?.cities?.length}+</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img
                src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617875044.png"
                alt="configuration icon"
                className="detail_icon"
              />
              <div className="ms-2">
                <h4 className="detail_h4">Configuration</h4>
                <p className="detail_p">{builderData[0]?.configuration}</p>
              </div>
            </div>
          </div>
          <div className="col-12 builder_overview mt20">
            <div className="d-flex">
              <img
                src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695617884484.png"
                alt="residential icon"
                className="detail_icon"
              />
              <div className="ms-2">
                <h4 className="detail_h4">Residential Projects</h4>
                <p className="detail_p">{builderData[0]?.residential_num}+</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img
                src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695805311265.png"
                alt="commercial icon"
                className="detail_icon"
              />
              <div className="ms-2">
                <h4 className="detail_h4">Commercial Projects</h4>
                <p className="detail_p">{builderData[0]?.commercial_num}+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m60">
        <div className="col-8 main_section_detail">
          <h3>About {builderData[0]?.name}</h3>
          <p className="about_builder">
            {builderData[0]?.description !== "<p></p>\n"
              ? builderData[0]?.description
              : "Not available"}
          </p>
          {projectType.some(
            (e) => e?.project_type.toLowerCase() === "residential"
          ) && (
            <>
              <hr className="divider_line" />
              <div className="residential_carousel mt30">
                <div className="res_heading">
                  <h3 className="d-inline-block">
                    Residential Projects of {builderData[0]?.name}
                  </h3>
                  <div>
                    <Link
                      to={`/builder/${builderData[0]?.name
                        ?.split(" ")
                        .join("-")
                        ?.toLowerCase()}/projects/residential`}
                      className="view_all_text"
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="my_carousel">
                  <div className="mt30 carousel_container half_carousel">
                    <div className="carousel-wrapper">
                      <Carousel breakPoints={breakPoints}>
                        {projectType
                          ?.filter((project) => {
                            return (
                              project?.project_type?.toLowerCase() ===
                              "residential"
                            );
                          })
                          ?.slice(0, 8)
                          ?.map((project, i) => {
                            return <Card project={project} key={i} />;
                          })}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {projectType.some(
            (e) => e?.project_type.toLowerCase() === "commercial"
          ) && (
            <>
              <hr className="divider_line" />
              <div className="residential_carousel mt30">
                <div className="res_heading">
                  <h3 className="d-inline-block">
                    Commercial Projects of {builderData[0]?.name}
                  </h3>
                  <div>
                    <Link
                      className="view_all_text"
                      to={`/builder/${builderData[0]?.name
                        ?.split(" ")
                        .join("-")
                        ?.toLowerCase()}/projects/commercial`}
                    >
                      View All
                    </Link>
                  </div>
                </div>
                <div className="my_carousel">
                  <div className="mt30 carousel_container half_carousel">
                    <div className="carousel-wrapper">
                      <Carousel breakPoints={breakPoints}>
                        {projectType
                          ?.filter((project) => {
                            return (
                              project?.project_type?.toLowerCase() ===
                              "commercial"
                            );
                          })
                          ?.slice(0, 8)
                          ?.map((project, i) => {
                            return <Card project={project} key={i} />;
                          })}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
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
                <a href="mailto: hello@propularity.in" className="form_email">
                  hello@propularity.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider_line" />
      <h3 className="mt30">Other Builders</h3>
      <BuilderSlider myClass={"other_builders"} name={builderData[0]?.name} />
    </div>
  );
}

export default Builder;
