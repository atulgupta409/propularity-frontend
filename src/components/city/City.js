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
import { Helmet } from "react-helmet-async";
import { GET_SEO_BY_SLUG } from "../../service/CitySeoService";
import TopFooter from "../footer/TopFooter";

function City() {
  const currentUrl = window.location.href;
  const { city } = useParams();
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const [projects, setProjects] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PROJECTS_BY_CITY, {
    variables: { city: city },
  });

  const [seoContent, setSeoContent] = useState([]);
  const slug = city;
  const {
    loading: seoLoading,
    error: seoError,
    data: seoData,
  } = useQuery(GET_SEO_BY_SLUG, {
    variables: { slug: slug },
  });

  useEffect(() => {
    if (seoData) {
      setSeoContent(seoData.citySeoContent);
    }
  }, [seoData]);

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
    if (data) {
      setProjects(data.projectsByCity);
    }
  }, [data]);

  return (
    <>
      {/* <Helmet>
        <title>{seoContent[0]?.title}</title>
        <meta name="description" content={seoContent[0]?.description} />
        <meta name="keywords" content={seoContent[0]?.keywords} />
        <meta property="og:title" content={seoContent[0]?.open_graph?.title} />
        <meta
          property="og:description"
          content={seoContent[0]?.open_graph?.description}
        />
        <meta name="twitter:title" content={seoContent[0]?.twitter?.title} />
        <meta
          name="twitter:description"
          content={seoContent[0]?.twitter?.description}
        />
        <link rel="canonical" href={currentUrl} />
      </Helmet> */}
      <div className="city_banner_main">
        <ProjectTypesNav city={city} showFilter={false} isMobile={false} />
        <h1 className="cityPage_heading">
          <span>{cityName}</span>
          <br />
          Where Property Comes To Life
        </h1>
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
        <ProjectTypesNav city={city} showFilter={false} isMobile={true} />
      </div>
      <div className="container mt100">
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
