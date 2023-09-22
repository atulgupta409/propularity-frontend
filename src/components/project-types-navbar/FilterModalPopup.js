import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { useQuery } from "@apollo/client";
import { GET_MICROLOCATIONS } from "../../service/MicrolocationService";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function FilterModalPopup({
  closeModal,
  city,
  sendDataToParent,
  projectsData,
}) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000000);
  const [filteredData, setFilteredData] = useState(projectsData);
  const { loading, error, data } = useQuery(GET_MICROLOCATIONS, {
    variables: {
      city: city,
    },
  });
  const {
    loading: isLoading,
    error: isError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);

  const options = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
    { value: "New Launch", label: "New Launch" },
  ];

  const onChangeOptionHandler = (selectedOption, dropdownIdentifier) => {
    switch (dropdownIdentifier) {
      case "status":
        setSelectedStatus(selectedOption);
        break;
      case "location":
        setSelectedLocation(selectedOption);
        break;

      case "builder":
        setSelectedBuilder(selectedOption);
        break;
      default:
        break;
    }
  };
  const locationOptions = data?.microlocations.map((microLocation) => ({
    value: microLocation._id,
    label: microLocation.name,
  }));

  const builderOptions = builderData?.builders?.map((builder) => ({
    value: builder._id,
    label: builder.name,
  }));

  const [isPriceChange, setIsPriceChange] = useState(false);

  const handleSliderChange = (values) => {
    setIsPriceChange(true);
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  function parsePrice(priceStr) {
    const regex = /([\d.]+)\s*(Cr|Lacs?)/i;
    const match = priceStr.match(regex);
    if (match) {
      const value = parseFloat(match[1]);
      const unit = match[2].toLowerCase();
      if (unit === "cr") {
        return value * 10000000;
      } else if (unit === "lacs" || unit === "lac") {
        return value * 100000;
      }
    }
    return 0;
  }

  const applyFilters = () => {
    let filteredDatas;
    if (selectedBuilder) {
      filteredDatas = projects?.filter(
        (project) => project?.builder[0]?.name === selectedBuilder.label
      );
    }

    if (selectedStatus) {
      filteredDatas = projects?.filter(
        (project) => project?.project_status === selectedStatus.label
      );
    }

    if (selectedLocation) {
      filteredDatas = projects?.filter(
        (project) =>
          project?.location?.micro_location[0]?.name === selectedLocation.label
      );
    }

    if (isPriceChange) {
      filteredDatas = projects?.filter(
        (project) =>
          parsePrice(project?.starting_price) > minValue &&
          parsePrice(project?.starting_price) < maxValue
      );
    }

    setFilteredData(filteredDatas);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedBuilder, selectedStatus, selectedLocation, minValue, maxValue]);

  const handleClickFilter = () => {
    applyFilters();
    const dataToSend = filteredData;
    sendDataToParent(dataToSend);
    closeModal();
  };

  return (
    <div className="modal_filter_main">
      <div className="cross_icon">
        <button>
          <RxCross2 className="close_icon" onClick={closeModal} />
        </button>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <label className="filter_label">Project Status</label>
          <Select
            value={selectedStatus}
            onChange={(selectedOption) =>
              onChangeOptionHandler(selectedOption, "status")
            }
            isSearchable
            options={options}
            placeholder={"Project Status"}
            className="select_builder"
          />
        </div>
        <div className="col-md-6 mb-4">
          <label className="filter_label">Location</label>
          <Select
            value={selectedLocation}
            onChange={(selectedOption) =>
              onChangeOptionHandler(selectedOption, "location")
            }
            isSearchable
            options={locationOptions}
            placeholder={"Location"}
            className="select_builder"
          />
        </div>
        <div className="col-md-12 mb-4">
          <label className="filter_label">Builder</label>
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
        <div className="col-12 mb-4">
          <label className="filter_label">Budget</label>
          <div className="price_main_box">
            <div className="price_slider_value_box">
              <p className="mb-0 min_max">Minimum</p>
              <p className="mb-0 value_text">
                ₹{" "}
                {minValue < 10000000
                  ? (minValue / 100000).toFixed(2) + " " + "Lacs*"
                  : (minValue / 10000000).toFixed(2) + " " + "Cr*"}
              </p>
            </div>
            <div className="price_slider_value_box">
              <p className="mb-0 min_max">Maximum</p>
              <p className="mb-0 value_text">
                ₹{" "}
                {maxValue < 10000000
                  ? (maxValue / 100000).toFixed(2) + " " + "Lacs*"
                  : (maxValue / 10000000).toFixed(2) + " " + "Cr*"}
              </p>
            </div>
          </div>

          <Slider
            range
            min={0}
            max={100000000}
            defaultValue={[minValue, maxValue]}
            onChange={handleSliderChange}
          />
        </div>
        <div className="col-12 mb-4">
          <button
            className="btn globalBtn filter_modal_btn"
            onClick={handleClickFilter}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModalPopup;
