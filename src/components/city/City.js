import React, { useEffect, useState } from "react";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";
import "./City.css";
import { useParams } from "react-router-dom";
import searchIcon from "../media/search-icon.png";
import TopProjectCity from "../homepage/top-projects-city/TopProjectCity";
import HomeCard from "../card/HomeCard";
import TopLocalities from "./TopLocalities";
import PriceRangeSlider from "../homepage/price-range-slider/PriceRangeSlider";
import FeaturedCollection from "../homepage/featured-collection/FeaturedCollection";
import BuildersSlider from "./BuilderSlider";
import { useLocation } from "react-router-dom";

function City() {
  const { city } = useParams();
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <>
      <div className="city_banner_main">
        <ProjectTypesNav city={city} />
        <h1 className="cityPage_heading">
          <span>{cityName}</span>
          <br />
          Where Property Comes To Life
        </h1>
        <form class="d-flex searchForm" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="search_img_box">
            <img src={searchIcon} alt="search icon" width={16} height={16} />
          </div>
        </form>
      </div>
      <div className="container mt100">
        <div className="row">
          <h2 className="heading">
            Top Projects in <span className="primary_color">{cityName}</span>
          </h2>
          <p className="heading_text">
            Find Your Home In The City Of Your Choice
          </p>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
          <div className="col-md-3 mt30">
            <HomeCard />
          </div>
        </div>
      </div>
      <TopLocalities cityName={cityName} myCity={city} />
      <PriceRangeSlider cityName={cityName} />
      <FeaturedCollection />
      <BuildersSlider />
    </>
  );
}

export default City;
