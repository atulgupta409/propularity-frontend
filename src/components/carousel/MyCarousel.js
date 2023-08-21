import React, { Component } from "react";
import Card from "../card/Card";
import Carousel from "react-elastic-carousel";
import "./MyCarousel.css";

function MyCarousel({ carouselClass }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2.4 },
    { width: 768, itemsToShow: 2.4 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div
      className={
        carouselClass === "full_carousel"
          ? "mt30 carousel_container full_carousel"
          : "mt30 carousel_container half_carousel"
      }
    >
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
