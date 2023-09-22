import React, { useEffect, useState } from "react";
import HomeCard from "../card/HomeCard";
import Carousel from "react-elastic-carousel";
import "./MyCarousel.css";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_CITY } from "../../service/ProjectsByCityService";

function HomeCarousel({ carouselClass, city }) {
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_CITY, {
    variables: { city: city },
  });

  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    if (data) {
      setProjectData(data.projectsByCity);
    }
  }, [data]);
  const noImage = [
    {
      image:
        "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg",
      alt: "No image",
    },
  ];


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
          {projectData?.map((project, i) => {
            return (
              <div className="col-11" key={i}>
                <HomeCard
                  images={
                    project?.images?.length > 0 ? project?.images : noImage
                  }
                  builder={project?.builder[0]?.name}
                  city={project?.location?.city[0]?.name}
                  projectName={project?.name}
                  startingPrice={project?.starting_price}
                  microlocationName={project?.location?.micro_location[0]?.name}
                  slug={project?.slug}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousel;

// builder,
//   city,
//   projectName,
//   startingPrice,
//   microlocationName,
//   slug,
//   images,
