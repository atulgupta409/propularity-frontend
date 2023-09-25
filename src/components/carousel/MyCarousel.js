import React from "react";
import Card from "../card/Card";
import Carousel from "react-elastic-carousel";
import "./MyCarousel.css";
import ProjectCard from "../project/ProjectCard";

function MyCarousel({
  carouselClass,
  isProjectcard,
  projectImages,
  name,
  city,
  microlocation,
  startingPrice,
  floorPlans,
}) {
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
          {isProjectcard ? (
            <ProjectCard
              projectImages={projectImages}
              name={name}
              city={city}
              microlocation={microlocation}
              startingPrice={startingPrice}
              floorPlans={floorPlans}
            />
          ) : (
            <Card />
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
