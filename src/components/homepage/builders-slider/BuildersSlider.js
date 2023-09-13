import React from "react";
import "./BuildersSlider.css";
import builderLogo from "../../media/dlf_logo.png";
import "../../carousel/MyCarousel.css";
import Carousel from "react-elastic-carousel";

function BuildersSlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2.4 },
    { width: 768, itemsToShow: 2.4 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className="container builder_container">
      <h2 className="heading">
        Top <span className="primary_color">Developers</span>
      </h2>
      <p className="heading_text">
        Discover Top Developers to Your Specific Preferences.
      </p>
      <div className="carousel_container mt30">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
            <div className="card builder_card">
              <div className="builder_img">
                <img src={builderLogo} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text builder_card_text">DLF Ltd.</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BuildersSlider;
