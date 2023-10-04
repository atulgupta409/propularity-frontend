import React, { useEffect, useState } from "react";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";
import "./City.css";
import { useParams } from "react-router-dom";
import searchIcon from "../media/search-icon.png";
import HomeCard from "../card/HomeCard";
import TopLocalities from "./TopLocalities";
import FeaturedCollection from "../homepage/featured-collection/FeaturedCollection";
import BuildersSlider from "./BuilderSlider";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_CITY } from "../../service/ProjectsByCityService";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";

function City() {
  const { city } = useParams();
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const { loading, error, data } = useQuery(GET_PROJECTS_BY_CITY, {
    variables: { city: city },
  });

  const {
    loading: builderLoading,
    error: builderError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (data) {
      setProjects(data.projectsByCity);
    }
  }, [data]);

  return (
    <>
      <div className="city_banner_main">
        <ProjectTypesNav city={city} showFilter={false} />
        <h1 className="cityPage_heading">
          <span>{cityName}</span>
          <br />
          Where Property Comes To Life
        </h1>
        <form className="d-flex searchForm" role="search">
          <input
            className="form-control me-2"
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
          {projects?.length > 0 ? (
            projects?.map((element, i) => {
              return (
                <div className="col-md-3 mt30" key={i}>
                  <HomeCard
                    builder={element?.builder[0].name
                      .split(" ")
                      .join("-")
                      .toLowerCase()}
                    city={cityName}
                    projectName={element?.name}
                    startingPrice={element?.starting_price}
                    microlocationName={
                      element?.location?.micro_location[0]?.name
                    }
                    slug={element?.slug}
                    images={element?.images}
                    ratings={element?.ratings}
                  />
                </div>
              );
            })
          ) : (
            <p className="no_filter_match">Not Available</p>
          )}
        </div>
      </div>
      <TopLocalities cityName={cityName} myCity={city} />
      <FeaturedCollection city={city} />
      <BuildersSlider builders={builderData?.builders} />
    </>
  );
}

export default City;
