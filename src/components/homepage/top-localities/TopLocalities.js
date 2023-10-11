import React from "react";
import "./TopLocalities.css";
import { Link } from "react-router-dom";

function TopLocalities() {
  return (
    <div className="mt100 localities_main">
      <div className="container">
        <div className="row section_row">
          <h2 className="heading">
            Top Cities In India For{" "}
            <span className="primary_color">Property</span>
          </h2>
          <p className="heading_text mob_hide">
            Find Your Home In The City Of Your Choice
          </p>
          <div className="col-6 col-md-3 mt30">
            <Link to="/gurugram">
              <div className="localities_card">
                <div className="img">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695022560060.png"
                    alt="location name"
                    className="img-fluid"
                  />
                </div>
                <div className="localities_card_overlay localities_card_overlay1">
                  <div className="overlay_text">
                    <h3>Gurugram</h3>
                    <p>12000+ Properties</p>
                  </div>
                </div>
                <div className="overlay2"></div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mt30">
            <Link to="/mumbai">
              <div className="localities_card">
                <div className="img">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695022586245.png"
                    alt="location name"
                    className="img-fluid"
                  />
                </div>
                <div className="localities_card_overlay localities_card_overlay2">
                  <div className="overlay_text">
                    <h3>Mumbai</h3>
                    <p>10000+ Properties</p>
                  </div>
                </div>
                <div className="overlay2"></div>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695022538381.png"
                  alt="location name"
                  className="img-fluid"
                  style={{ filter: "grayScale(100%)" }}
                />
              </div>
              <div className="localities_card_overlay localities_card_overlay3">
                <div className="overlay_text">
                  <h3>Delhi</h3>
                  <p>Coming Soon</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695022628666.png"
                  alt="location name"
                  className="img-fluid"
                  style={{ filter: "grayScale(100%)" }}
                />
              </div>
              <div className="localities_card_overlay localities_card_overlay4">
                <div className="overlay_text">
                  <h3>Noida</h3>
                  <p>Coming Soon</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopLocalities;
