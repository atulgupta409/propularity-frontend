import React from "react";
import HomeCard from "../card/HomeCard";
import "./FilteredItems.css";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";

function FilteredItems() {
  const currentUrl = window.location.href;
const parsedUrl = new URL(currentUrl);
const path = parsedUrl.pathname;
const pathParts = path.split('/');
const desiredPart = pathParts[1];
  return (
    <>
      <ProjectTypesNav city = {desiredPart} />
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
