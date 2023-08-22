import React from "react";
import "./BuildersSlider.css";
import builderLogo from "../../media/dlf_logo.png";

function BuildersSlider() {
  return (
    <div className="container builder_slider_container">
      <div className="builders_row">
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
        <div className="builder_logo_box">
          <img src={builderLogo} alt="builder name" />
        </div>
      </div>
    </div>
  );
}

export default BuildersSlider;
