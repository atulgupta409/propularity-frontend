import React from "react";
import "./BuildersSlider.css";
import builderLogo from "../../media/dlf_logo.png";
import "../../carousel/MyCarousel.css";
import Carousel from "react-elastic-carousel";
import { useQuery } from "@apollo/client";
import { GET_ALL_BUILDERS } from "../../../service/ProjectDetailsservice";

function BuildersSlider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2.4 },
    { width: 768, itemsToShow: 2.4 },
    { width: 1200, itemsToShow: 4 },
  ];

  const { loading, error, data } = useQuery(GET_ALL_BUILDERS);

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
            {data?.builders?.map((builder, i) => {
              return (
                <div className="card builder_card" key={i}>
                  <div className="builder_img">
                    <img
                      src={builder?.BuilderLogo}
                      className="card-img-top"
                      alt={builder?.alt}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text builder_card_text">
                      {builder?.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BuildersSlider;
