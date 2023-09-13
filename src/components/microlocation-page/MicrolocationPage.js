import React, { useState } from "react";
import "./MicrolocationPage.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import HomeCard from "../card/HomeCard";

function MicrolocationPage() {
  const { microlocation } = useParams();
  const microlocationArray = microlocation.split("-");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const microlocationName = microlocationArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

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
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
        <div className="col-md-3">
          <HomeCard />
        </div>
      </div>
    </div>
  );
}

export default MicrolocationPage;
