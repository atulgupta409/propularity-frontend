import React from "react";
import HomeCard from "../card/HomeCard";
import "./FilteredItems.css";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";

function FilteredItems() {
  return (
    <>
      <ProjectTypesNav />
      <div className="container">
        <div className="filtered_items_main">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
            <div className="col-sm-6 col-md-3">
              <HomeCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredItems;
