import React from "react";
import builderImg from "../media/sample-image.png";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import { Link } from "react-router-dom";

function HomeCard() {
  return (
    <div className="property_homecard">
      <Carousel interval={null} controls={false}>
        <Carousel.Item>
          <div className="img_card">
            <Link to="/m3m-india/gurugram/m3m-golf-79" className="card-link">
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img_card">
            <Link to="/m3m-india/gurugram/m3m-golf-79" className="card-link">
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="img_card">
            <Link to="/m3m-india/gurugram/m3m-golf-79" className="card-link">
              <img src={builderImg} alt="" className="img-fluid img_cover" />
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
      <Link to="/m3m-india/gurugram/m3m-golf-79" className="card-link">
        <div className="card_body">
          <h5 className="card_title">M3M Golf 79</h5>
          <p className="card_p homecard_p">
            Golf Course Extension Road, Gurugram
          </p>
          <p className="card_p mb-0 homecard_p">
            Starting <span>₹ 1.78 Cr</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomeCard;
