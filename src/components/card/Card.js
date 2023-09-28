import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import { Link } from "react-router-dom";
import RequestCallBtn from "../request-call-button/RequestCallBtn";

function Card({ project }) {
  console.log(project);
  return (
    <div className="property_card">
      <div>
        <Carousel interval={null} controls={false}>
          {project?.images?.map((image, i) => {
            return (
              <Carousel.Item key={i}>
                <div className="img_card">
                  <Link
                    to={`/${project?.builder[0]?.name
                      ?.split(" ")
                      ?.join("-")
                      ?.toLowerCase()}/${project?.location?.city[0]?.name?.toLowerCase()}/${
                      project?.slug
                    }`}
                  >
                    <img
                      src={image?.image}
                      alt={image?.alt}
                      className="img-fluid img_cover"
                    />
                  </Link>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>

      <div className="card_body">
        <Link
          to={`/${project?.builder[0]?.name
            ?.split(" ")
            ?.join("-")
            ?.toLowerCase()}/${project?.location?.city[0]?.name?.toLowerCase()}/${
            project?.slug
          }`}
        >
          <h5 className="card_title">{project?.name}</h5>
          <p className="card_p">
            {project?.location?.micro_location[0]?.name},{" "}
            {project?.location?.city[0]?.name}
          </p>
        </Link>
        <div className="card_footer">
          <Link
            to={`/${project?.builder[0]?.name
              ?.split(" ")
              ?.join("-")
              ?.toLowerCase()}/${project?.location?.city[0]?.name?.toLowerCase()}/${
              project?.slug
            }`}
            style={{ width: "100%" }}
          >
            <div className="w-100">
              <p className="card_p mb-0">
                Starting <span>₹ {project?.starting_price}</span>
              </p>
            </div>
          </Link>
          <RequestCallBtn button_name={"Enquire"} />
        </div>
      </div>
    </div>
  );
}

export default Card;
