import React from "react";
import buildingImg from "../media/building-icon.png";
import "./ProjectTypesNav.css";
import { Link } from "react-router-dom";
import FilterModal from "./FilterModal";

function ProjectTypesNav({ city }) {
  const filteredValue = "apartments";
  return (
    <div className="project_type_main">
      <div className="container">
        <div className="filter_nav_main">
          <div className="filter_nav_item">
            <Link to={`/${city}/filter/${filteredValue}`}>
              <img src={buildingImg} alt="filter type" />
              <p>Apartment</p>
            </Link>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Town House</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Villa</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Plot</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Studio Apartment</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Service Apartment</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Penthouse</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Farmhouse</p>
          </div>
          <div className="filter_nav_item">
            <img src={buildingImg} alt="filter type" />
            <p>Office</p>
          </div>
          <div className="filter_nav_item">
            <FilterModal city = {city} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTypesNav;
