import React, { useEffect, useState } from "react";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";
import "./City.css";
import { useNavigate, useParams } from "react-router-dom";
import HomeCard from "../card/HomeCard";
import TopLocalities from "./TopLocalities";
import FeaturedCollection from "../homepage/featured-collection/FeaturedCollection";
import BuildersSlider from "./BuilderSlider";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_CITY } from "../../service/ProjectsByCityService";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";
import { GET_MICROLOCATIONS } from "../../service/MicrolocationService";
import Select from "react-select";
import TopFooter from "../footer/TopFooter";
import CommonHeader from "../common-header/CommonHeader";
import PageNotFound from "../page-not-found/PageNotFound";
import gurugramVideo from "../media/Gurugram(2).mp4";
import gurugramVideoDesk from "../media/Gurugram.mp4";
import mumbaiVideo from "../media/Mumbai(2).mp4";
import mumbaiVideoDesk from "../media/Mumbai.mp4";

function City() {
  const { city } = useParams();
  const [cityVideo, setCityVideo] = useState("../media/Gurugram(2).mp4");
  const [cityVideoDesk, setCityVideoDesk] = useState("../media/Gurugram.mp4");
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const [projects, setProjects] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_CITY, {
    variables: { city: city },
  });

  const {
    loading: builderLoading,
    error: builderError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);
  const {
    loading: locationLoading,
    error: locationError,
    data: locationData,
  } = useQuery(GET_MICROLOCATIONS, {
    variables: { city: city },
  });

  const locationOptions = locationData?.microlocations?.map((location) => ({
    value: location._id,
    label: location.name,
  }));

  const onChangeOptionHandler = (selectedOption, dropdownIdentifier) => {
    switch (dropdownIdentifier) {
      case "location":
        setSelectedLocation(selectedOption);
        navigate(
          `/${city?.toLowerCase()}/${selectedOption?.label
            .split(" ")
            .join("-")
            .toLowerCase()}`
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (city === "gurugram") {
      setCityVideo(gurugramVideo);
      setCityVideoDesk(gurugramVideoDesk);
    }
    if (city === "mumbai") {
      setCityVideo(mumbaiVideo);
      setCityVideoDesk(mumbaiVideoDesk);
    }
  }, [city]);

  useEffect(() => {
    if (data) {
      setProjects(data.projectsByCity);
    }
  }, [data]);
  const validCities = ["gurugram", "mumbai"];

  if (!validCities.includes(city)) {
    return <PageNotFound />;
  }

  return (
    <>
      <CommonHeader />
      {/* className="city_banner_main" */}
      <div>
        <ProjectTypesNav city={city} showFilter={false} isMobile={false} />
        <div className="city_video_box desk_hide">
          <div className="video_overlay"></div>
          {/* <video src={cityVideo} autoPlay loop muted preload="metadata" /> */}
          <div
            style={{ height: "100%" }}
            dangerouslySetInnerHTML={{
              __html: `<video className="app__backgroundVideo" autoplay loop muted playsinline>
      <source src=${cityVideo} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
            }}
          />
          <h1 className="cityPage_heading">
            <span>{cityName}</span>
            <br />
            Where Property Comes To Life
          </h1>
          <div className="d-flex justify-content-center city_select_form">
            <Select
              value={selectedLocation}
              onChange={(selectedOption) =>
                onChangeOptionHandler(selectedOption, "location")
              }
              isSearchable
              options={locationOptions}
              placeholder={"Search Location"}
              className="search_location"
            />
          </div>
          <ProjectTypesNav city={city} showFilter={false} isMobile={true} />
        </div>
        <div className="city_video_box mob_hide">
          <div className="video_overlay"></div>
          <video src={cityVideoDesk} autoPlay loop muted preload="metadata" />
          <h1 className="cityPage_heading">
            <span>{cityName}</span>
            <br />
            Where Property Comes To Life
          </h1>
          <div className="d-flex justify-content-center city_select_form">
            <Select
              value={selectedLocation}
              onChange={(selectedOption) =>
                onChangeOptionHandler(selectedOption, "location")
              }
              isSearchable
              options={locationOptions}
              placeholder={"Search Location"}
              className="search_location"
            />
          </div>
          <ProjectTypesNav city={city} showFilter={false} isMobile={true} />
        </div>
      </div>
      <div
        className={
          city === "gurugram"
            ? "container mt100 city_container_main"
            : "container mt100 city_container_main2"
        }
      >
        <h2 className="heading desk_hide">
          Top Projects in <span className="primary_color">{cityName}</span>
        </h2>
        <div className="row city_row">
          <h2 className="heading mob_hide">
            Top Projects in <span className="primary_color">{cityName}</span>
          </h2>
          <p className="heading_text mob_hide">
            Find Your Home In The City Of Your Choice
          </p>
          {projects?.length > 0 ? (
            projects?.map((element, i) => {
              return (
                <div className="col-8 col-md-3 mt30" key={i}>
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
      <TopFooter />
    </>
  );
}

export default City;
