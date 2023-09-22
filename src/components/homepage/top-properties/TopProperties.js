import React, { useState, useEffect } from "react";
import "./TopProperties.css";
import HomeCard from "../../card/HomeCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_COUNTRY } from "../../../service/TopProjectsInIndia";

function TopProperties() {
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_COUNTRY);

  const [topProjects, setTopProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setTopProjects(data.topIndiaProjects);
    }
  }, [data]);

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
        {topProjects?.map((project, i) => {
          return (
            <div className="col-12 col-sm-6 col-md-3 mt30" key={i}>
              <HomeCard
                images={project?.images?.length > 0 ? project?.images : noImage}
                builder={project?.builder[0]?.name}
                city={project?.location?.city[0]?.name}
                projectName={project?.name}
                startingPrice={project?.starting_price}
                microlocationName={project?.location?.micro_location[0]?.name}
                slug={project?.slug}
                ratings={project?.ratings}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopProperties;
