import React, { useEffect, useState } from "react";
import "./Builder.css";
import star from "../media/star-rating.png";
import sampleImage from "../media/sample-image.png";
import icon from "../media/icon.png";
import ContactForm from "../form/ContactForm";
import { MdKeyboardArrowRight } from "react-icons/md";
import contactImage from "../media/sumit-sir-contact-main.png";
import MyCarousel from "../carousel/MyCarousel";
import { IoMdPhotos } from "react-icons/io";
import { useQuery } from "@apollo/client";
import { GET_ALL_BUILDERS_DATA } from "../../service/BuildersService";
import { useParams, Link } from "react-router-dom";
import BuilderSlider from "../homepage/builders-slider/BuildersSlider";

function Builder() {
  const { builder } = useParams();
  const slug = builder;

  const { loading, error, data } = useQuery(GET_ALL_BUILDERS_DATA, {
    variables: { slug: slug },
  });

  const [builderData, setBuilderData] = useState([]);
  useEffect(() => {
    if (data) {
      setBuilderData(data?.buildersBySlug);
    }
  }, [data]);

  // console.log(builderData);

  return (
    <div className="container mt-5">
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
              src={builderData[0]?.images[0]?.image}
              className="img-fluid"
              alt={builderData[0]?.images[0]?.alt}
            />
          </div>
        </div>
        <div className="col-3 small_img_main">
          <div className="col-12">
            <div className="small_img">
              <img
                src={builderData[0]?.images[1]?.image}
                alt={builderData[0]?.images[1]?.alt}
              />
            </div>
          </div>
          <div className="col-12 mt20">
            <div className="small_img small_img_position">
              <img
                src={builderData[0]?.images[2]?.image}
                alt={builderData[0]?.images[2]?.alt}
              />
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
            </div>
          </div>
        </div>
        <div className="col-3 pe-0">
          <div className="col-12 builder_overview">
            <div className="d-flex">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Cities</h4>
                <p className="detail_p">{builderData[0]?.cities?.length}+</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Configuration</h4>
                <p className="detail_p">{builderData[0]?.configuration}</p>
              </div>
            </div>
          </div>
          <div className="col-12 builder_overview mt20">
            <div className="d-flex">
              <img src={icon} alt="icon" className="detail_icon" />
              <div className="ms-2">
                <h4 className="detail_h4">Residential Projects</h4>
                <p className="detail_p">{builderData[0]?.residential_num}+</p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img src={icon} alt="icon" className="detail_icon" />
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
          {/* {shortAboutText?.length < 351 ? (
            <button className="read_btn" onClick={readMore}>
              Read more <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          ) : (
            <button className="read_btn" onClick={readLess}>
              Read less <MdKeyboardArrowRight className="read_more_icon" />
            </button>
          )} */}

          <hr className="divider_line" />
          <div className="residential_carousel mt30">
            <div className="res_heading">
              <h3>Residential Projects of M3M India</h3>
            </div>
            <div className="my_carousel">
              <MyCarousel
                carouselClass={"half_carousel"}
                isProjectcard={false}
              />
            </div>
          </div>
          <hr className="divider_line" />
          <div className="residential_carousel mt30">
            <div className="res_heading">
              <h3>Commericial Projects of M3M India</h3>
            </div>
            <div className="my_carousel">
              <MyCarousel
                carouselClass={"half_carousel"}
                isProjectcard={false}
              />
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
      <BuilderSlider myClass={"other_builders"} />
    </div>
  );
}

export default Builder;
