import React from "react";
import "./TopProperties.css";
import HomeCard from "../../card/HomeCard";

function TopProperties() {

  const noImage = [
    {
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg",
      alt: "No image",
    },
  ];

  return (
    <div className="container mt100">
      <div className="row">
        <h2 className="heading">
          Top Projects in <span className="primary_color">India</span>
        </h2>
        <p className="heading_text">
          Explore prime properties based on your preference
        </p>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt30">
          <HomeCard images={noImage} />
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
