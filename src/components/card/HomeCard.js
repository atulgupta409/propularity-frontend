import React from "react";
import builderImg from "../media/sample-image.png";
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
}) {
  return (
    <div className="property_homecard">
      <Carousel interval={null} controls={false}>
        <Carousel.Item>
          <div className="img_card">
            <Link to={`/${builder}/${city}/${slug}`} className="card-link">
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img_card">
            <Link
              to={`/${builder}/${city}/${projectName}`}
              className="card-link"
            >
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img_card">
            <Link
              to={`/${builder}/${city}/${projectName}`}
              className="card-link"
            >
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
      <Link to={`/${builder}/${city}/${projectName}`} className="card-link">
        <div className="card_body">
          <h5 className="card_title">{projectName}</h5>
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
