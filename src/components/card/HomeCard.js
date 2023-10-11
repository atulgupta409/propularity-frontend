import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import { Link } from "react-router-dom";

function HomeCard({
  builder,
  city,
  projectName,
  startingPrice,
  microlocationName,
  slug,
  images,
  ratings,
}) {
  const noImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg";
  const starImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695277991289.png";

  return (
    <div className="property_homecard">
      <Carousel interval={null} controls={true} className="carousel-container">
        {images?.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="img_card">
                <Link
                  to={`/${builder?.split(" ")?.join("-")?.toLowerCase()}/${city
                    ?.split(" ")
                    ?.join("-")
                    ?.toLowerCase()}/${slug}`}
                  className="card-link"
                >
                  <img
                    src={images?.length !== 0 ? image?.image : noImage}
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
        to={`/${builder?.split(" ")?.join("-")?.toLowerCase()}/${city
          ?.split(" ")
          ?.join("-")
          ?.toLowerCase()}/${slug}`}
        className="card-link"
      >
        <div className="card_body">
          <div className="card_title_box d-flex justify-content-between align-items-center">
            <h5 className="card_title d-inline-block">{projectName}</h5>
            {ratings && (
              <div className="star_image d-inline-block">
                <p>
                  <img src={starImage} alt="star" />
                  {ratings}
                </p>
              </div>
            )}
          </div>
          <p className="card_p homecard_p">{microlocationName + ", " + city}</p>
          <p className="card_p mb-0 homecard_p">
            Starting <span>₹ {startingPrice}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
