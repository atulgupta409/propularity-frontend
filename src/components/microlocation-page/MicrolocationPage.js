import React, { useState, useEffect } from "react";
import "./MicrolocationPage.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import HomeCard from "../card/HomeCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_MICROLOCATIONS } from "../../service/ProjectsByMicrolocation";

function MicrolocationPage() {
  const { microlocation } = useParams();
  const microlocationArray = microlocation.split("-");
  const microlocationName = microlocationArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const pageUrl = window.location.href;
  const pageUrlArr = pageUrl.split("/");
  const city = pageUrlArr[pageUrlArr.length - 2];

  const [selectedOption, setSelectedOption] = useState(null);

  const { loading, error, data } = useQuery(GET_PROJECTS_BY_MICROLOCATIONS, {
    variables: { page: 1, perPage: 16, location: microlocationName },
  });

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    if (data) {
      setProjects(data.builderProjectsByLocation.filteredProjects);
    }
  }, [data]);

  console.log(projects);

  const options = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
    { value: "New Launch", label: "New Launch" },
  ];

  return (
    <div className="container mt100 microlocation_container">
      <div className="row">
        <div className="col-md-6">
          <h1>Projects on {microlocationName}</h1>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end">
            <div className="col-2">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={"Builder"}
                className="select_builder"
              />
            </div>
            <div className="col-3">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={"Project Status"}
                className="select_builder"
              />
            </div>
            <div className="col-2">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={"Price"}
                className="select_builder"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row microlocation_projects">
        {projects?.map((element, i) => {
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
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MicrolocationPage;
