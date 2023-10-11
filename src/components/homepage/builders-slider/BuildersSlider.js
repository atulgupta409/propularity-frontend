import React from "react";
import "./BuildersSlider.css";
import "../../carousel/MyCarousel.css";
import Carousel from "react-elastic-carousel";
import { useQuery } from "@apollo/client";
import { GET_ALL_BUILDERS } from "../../../service/ProjectDetailsservice";
import { Link } from "react-router-dom";

function BuildersSlider({ myClass, name }) {
  const breakPoints = [
    { width: 1, itemsToShow: 3.2 },
    { width: 576, itemsToShow: 3.2 },
    { width: 768, itemsToShow: 4.4 },
    { width: 1200, itemsToShow: 6 },
  ];

  const { loading, error, data } = useQuery(GET_ALL_BUILDERS);

  return (
    <div
      className={
        myClass === "home_top_builders"
          ? "container builder_container"
          : "other_builders_top"
      }
    >
      {myClass === "home_top_builders" ? (
        <>
          <h2 className="heading">
            Top Developers In <span className="primary_color">India</span>
          </h2>
          <p className="heading_text mob_hide">
            Discover Top Developers to Your Specific Preferences.
          </p>
        </>
      ) : (
        ""
      )}

      <div className="carousel_container mt30">
        <div className="carousel-wrapper carousel-wrapper-home-builder">
          {myClass === "other_builders" ? (
            <Carousel breakPoints={breakPoints}>
              {data?.builders
                ?.filter((build) => {
                  return build?.name !== name;
                })
                ?.map((builder, i) => {
                  return (
                    <Link to={`/builder/${builder?.slug}`} key={i}>
                      <div className="card builder_card">
                        <div className="builder_img">
                          <img
                            src={builder?.BuilderLogo}
                            className="card-img-top"
                            alt={builder?.alt}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </Carousel>
          ) : (
            <Carousel breakPoints={breakPoints}>
              {data?.builders?.map((builder, i) => {
                return (
                  <Link to={`/builder/${builder?.slug}`} key={i}>
                    <div className="card builder_card">
                      <div className="builder_img">
                        <img
                          src={builder?.BuilderLogo}
                          className="card-img-top"
                          alt={builder?.alt}
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuildersSlider;
