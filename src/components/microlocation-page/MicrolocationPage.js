import React, { useState, useEffect } from "react";
import "./MicrolocationPage.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import HomeCard from "../card/HomeCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_MICROLOCATIONS } from "../../service/ProjectsByMicrolocation";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";

function MicrolocationPage() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const { microlocation } = useParams();
  const microlocationArray = microlocation.split("-");
  const microlocationName = microlocationArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const pageUrl = window.location.href;
  const pageUrlArr = pageUrl.split("/");
  const city = pageUrlArr[pageUrlArr.length - 2];

  const {
    loading: isLoading,
    error: isError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);

  const [selectedOption, setSelectedOption] = useState(null);

  const {
    loading,
    error,
    data: projectsData,
  } = useQuery(GET_PROJECTS_BY_MICROLOCATIONS, {
    variables: { page: 1, perPage: 16, location: microlocationName },
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (projectsData) {
      setProjects(projectsData?.builderProjectsByLocation?.filteredProjects);
    }
  }, [projectsData]);

  const applyFilters = () => {
    let filteredData =
      projectsData?.builderProjectsByLocation?.filteredProjects;

    if (selectedBuilder) {
      filteredData = filteredData.filter(
        (project) => project?.builder[0]?.name === selectedBuilder.label
      );
    }

    if (selectedStatus) {
      filteredData = filteredData.filter(
        (project) => project?.project_status === selectedStatus.label
      );
    }

    if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.value.split(" - ");
      filteredData = filteredData.filter((project) => {
        const projectPrice = parseFloat(project?.starting_price);
        return (
          projectPrice >= parseFloat(minPrice) &&
          projectPrice <= parseFloat(maxPrice)
        );
      });
    }

    setProjects(filteredData);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedBuilder, selectedStatus, selectedPrice]);

  const onChangeOptionHandler = (selectedOption, dropdownIdentifier) => {
    switch (dropdownIdentifier) {
      case "status":
        setSelectedStatus(selectedOption);
        break;
      case "price":
        setSelectedPrice(selectedOption);
        break;
      case "builder":
        setSelectedBuilder(selectedOption);
        break;
      default:
        break;
    }
  };

  const statusOptions = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
    { value: "New Launch", label: "New Launch" },
  ];

  const priceOptions = [
    { value: "0 - 1.00Cr", label: "0 - 1.00Cr" },
    { value: "1.00Cr - 2.00Cr", label: "1.00Cr - 2.00Cr" },
    { value: "2.00Cr - 4.00Cr", label: "2.00Cr - 4.00Cr" },
    { value: "4.00Cr - 6.00Cr", label: "4.00Cr - 6.00Cr" },
    { value: "6.00Cr+", label: "6.00Cr +" },
  ];

  const builderOptions = builderData?.builders?.map((builder) => ({
    value: builder._id,
    label: builder.name,
  }));

  const resetFilterHandler = () => {
    setSelectedBuilder(null);
    setSelectedStatus(null);
    setSelectedPrice(null);
    applyFilters();
  };

  return (
    <div className="container mt100 microlocation_container">
      <div className="row">
        <div className="col-md-6">
          <h1>Projects in {microlocationName}</h1>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end">
            <div className="col-3">
              <Select
                value={selectedBuilder}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "builder")
                }
                isSearchable
                options={builderOptions}
                placeholder={"Builder"}
                className="select_builder"
              />
            </div>
            <div className="col-3">
              <Select
                value={selectedStatus}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "status")
                }
                isSearchable
                options={statusOptions}
                placeholder={"Project Status"}
                className="select_builder"
              />
            </div>
            <div className="col-3">
              <Select
                value={selectedPrice}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "price")
                }
                options={priceOptions}
                placeholder={"Price"}
                className="select_builder"
              />
            </div>
            <div className="col-md-2">
              <button
                className="clear_filter_btn"
                role="button"
                onClick={resetFilterHandler}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row microlocation_projects">
        {projects?.length > 0 ? (
          projects?.map((element, i) => {
            return (
              <div className="col-md-3" key={i}>
                <HomeCard
                  builder={element?.builder[0].name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}
                  city={city}
                  projectName={element?.name}
                  startingPrice={element?.starting_price}
                  microlocationName={microlocationName}
                  slug={element?.slug}
                  images={element?.images}
                />
              </div>
            );
          })
        ) : (
          <p className="no_filter_match">
            No projects match the selected filter criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default MicrolocationPage;
