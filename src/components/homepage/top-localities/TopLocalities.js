import React from "react";
import "./TopLocalities.css";
import locationImg from "../../media/sample-image.png";

function TopLocalities() {
  return (
    <div className="mt100 localities_main">
      <div className="container">
        <div className="row section_row">
          <h2 className="heading">
            Top Localities in <span className="primary_color">Gurugram</span>
          </h2>
          <p className="heading_text">
            Explore prime locations based on your city
          </p>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
                </div>
              </div>
              <div className="overlay2"></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt30">
            <div className="localities_card">
              <div className="img">
                <img
                  src={locationImg}
                  alt="location name"
                  className="img-fluid"
                />
              </div>
              <div className="localities_card_overlay">
                <div className="overlay_text">
                  <h3>Dwarka Expressway</h3>
                  <p>100+ Properties</p>
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
