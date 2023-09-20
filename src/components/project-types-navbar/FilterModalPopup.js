import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";
import { useQuery } from "@apollo/client";
import { GET_MICROLOCATIONS } from "../../service/MicrolocationService";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";

function FilterModalPopup({
  closeModal,
  city,
  sendDataToParent,
  projectsData,
}) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [projects, setProjects] = useState([]);
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

  const applyFilters = () => {
    let filteredData = projectsData;

    if (selectedBuilder) {
      filteredData = filteredData.filter(
        (project) => project?.builder[0]?.name === selectedBuilder.label
      );
    }

    if (selectedStatus) {
      filteredData = filteredData?.filter(
        (project) => project?.project_status === selectedStatus.label
      );
    }

    // if (selectedPrice) {
    //   const [minPrice, maxPrice] = selectedPrice.value.split(" - ");
    //   filteredData = filteredData.filter((project) => {
    //     const projectPrice = parseFloat(project?.starting_price);
    //     return (
    //       projectPrice >= parseFloat(minPrice) &&
    //       projectPrice <= parseFloat(maxPrice)
    //     );
    //   });
    // }

    setProjects(filteredData);
  };
  // console.log(projectsData);

  useEffect(() => {
    applyFilters();
  }, [selectedBuilder, selectedStatus]);

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

  const [value, setValue] = useState("1000000");
  const handleChangePrice = (e) => {
    setValue(e.target.value);
  };

  const handleClickFilter = () => {
    // Some action in the child component
    const dataToSend = projects;

    // Call the function passed as a prop with the data
    sendDataToParent(dataToSend);
    closeModal();
  };
  console.log(projects);

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
          <div className="input_range_box">
            <div className="price_value_text">
              0 - ₹{" "}
              {value < 10000000
                ? (value / 100000).toFixed(2) + " " + "Lacs*"
                : (value / 10000000).toFixed(2) + " " + "Cr*"}
            </div>
            <input
              type="range"
              defaultValue={value}
              onChange={handleChangePrice}
              min={1000000}
              max={100000000}
              step={1000000}
              className="w-100"
            />
          </div>
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
