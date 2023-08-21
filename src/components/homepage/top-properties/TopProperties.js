import React from "react";
import "./TopProperties.css";
import HomeCard from "../../card/HomeCard";

function TopProperties() {
  return (
    <div className="container mt100">
      <div className="row">
        <h1 className="heading">
          Top Projects in <span className="primary_color">Gurugram</span>
        </h1>
        <p className="heading_text">
          Explore prime properties based on your preference
        </p>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
