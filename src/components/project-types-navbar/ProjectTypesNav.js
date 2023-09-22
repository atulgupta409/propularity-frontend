import React from "react";
import buildingImg from "../media/building-icon.png";
import "./ProjectTypesNav.css";
import { Link } from "react-router-dom";
import FilterModal from "./FilterModal";

function ProjectTypesNav({ city, sendDataToParent, projectsData, showFilter }) {
  const planTypes = [
    "Apartment",
    "Town House",
    "Villa",
    "Plot",
    "Studio Apartment",
    "Service Apartment",
    "Penthouse",
    "Farmhouse",
    "Office",
  ];

  return (
    <div className="project_type_main">
      <div className="container">
        <div className="filter_nav_main">
          {planTypes.map((planType, i) => {
            return (
              <div className="filter_nav_item" key={i}>
                <Link
                  to={`/${city}/filter/${planType
                    ?.split(" ")
                    .join("-")
                    .toLowerCase()}`}
                >
                  <img src={buildingImg} alt="filter type" />
                  <p>{planType}</p>
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
