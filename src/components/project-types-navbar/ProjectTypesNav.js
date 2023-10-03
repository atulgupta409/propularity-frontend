import React from "react";
import "./ProjectTypesNav.css";
import { Link } from "react-router-dom";
import FilterModal from "./FilterModal";

function ProjectTypesNav({ city, sendDataToParent, projectsData, showFilter }) {
  const planTypes = [
    {
      name: "Apartment",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695977020209.png",
    },
    {
      name: "Town House",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695977030821.png",
    },
    {
      name: "Villa",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695977005255.png",
    },
    {
      name: "Plot",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976921735.png",
    },
    {
      name: "Studio Apartment",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976941172.png",
    },
    {
      name: "Service Apartment",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976931764.png",
    },
    {
      name: "Penthouse",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976911670.png",
    },
    {
      name: "Farmhouse",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976886523.png",
    },
    {
      name: "Office",
      icon: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695976900770.png",
    },
  ];

  return (
    <div className="project_type_main">
      <div className="container">
        <div className="filter_nav_main">
          {planTypes.map((planType, i) => {
            return (
              <div className="filter_nav_item" key={i}>
                <Link
                  to={`/${city}/filter/${planType?.name
                    ?.split(" ")
                    .join("-")
                    .toLowerCase()}`}
                >
                  <img src={planType?.icon} alt="filter type" />
                  <p>{planType?.name}</p>
                </Link>
              </div>
            );
          })}
          {showFilter && (
            <div className="filter_nav_item">
              <FilterModal
                city={city}
                sendDataToParent={sendDataToParent}
                projectsData={projectsData}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectTypesNav;
