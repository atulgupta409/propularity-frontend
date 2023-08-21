import React from "react";
import builderImg from "../media/sample-image.png";
import Carousel from "react-bootstrap/Carousel";
import "./Card.css";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="property_card">
      <div>
        <Carousel interval={null} controls={false}>
          <Carousel.Item>
            <div className="img_card">
              <Link to="/m3m-india/gurugram/m3m-golf-79">
                <img src={builderImg} alt="" className="img-fluid img_cover" />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img_card">
              <Link to="/m3m-india/gurugram/m3m-golf-79">
                <img src={builderImg} alt="" className="img-fluid img_cover" />
              </Link>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="img_card">
              <Link to="/m3m-india/gurugram/m3m-golf-79">
                <img src={builderImg} alt="" className="img-fluid img_cover" />
              </Link>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Link to="/m3m-india/gurugram/m3m-golf-79">
        <div className="card_body">
          <h5 className="card_title">M3M Golf 79</h5>
          <p className="card_p">Golf Course Extension Road, Gurugram</p>
          <div className="card_footer">
            <div>
              <p className="card_p mb-0">
                Starting <span>₹ 1.78 Cr</span>
              </p>
            </div>
            <div>
              <p className="card_p mb-0">
                <span>
                  <MdCall className="card_icon" />
                </span>
                Enquire
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
