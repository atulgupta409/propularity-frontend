import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ project }) {
  const starImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695277991289.png";
  return (
    <div className="property_homecard">
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
      <Link
        to={`/${project?.builder[0]?.name
          ?.split(" ")
          ?.join("-")
          ?.toLowerCase()}/${project?.location?.city[0]?.name?.toLowerCase()}/${
          project?.slug
        }`}
        className="card-link"
      >
        <div className="card_body">
          <div className="card_title_box d-flex justify-content-between align-items-center">
            <h5 className="card_title d-inline-block">{project?.name}</h5>
            {project?.ratings && (
              <div className="star_image d-inline-block">
                <p>
                  <img src={starImage} alt="star" />
                  {project?.ratings}
                </p>
              </div>
            )}
          </div>
          <p className="card_p homecard_p">
            {project?.location?.micro_location[0]?.name},{" "}
            {project?.location?.city[0]?.name}
          </p>
          <p className="card_p mb-0 homecard_p">
            Starting <span>₹ {project?.starting_price}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
