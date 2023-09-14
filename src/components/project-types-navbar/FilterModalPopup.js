import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Select from "react-select";

function FilterModalPopup({ closeModal }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [value, setValue] = useState("1000000");
  const handleChangePrice = (e) => {
    setValue(e.target.value);
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
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Project Status"}
            className="select_builder"
          />
        </div>
        <div className="col-md-6 mb-4">
          <label className="filter_label">Location</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Location"}
            className="select_builder"
          />
        </div>
        <div className="col-md-12 mb-4">
          <label className="filter_label">Builder</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Builder"}
            className="select_builder"
          />
        </div>
        <div className="col-12 mb-4">
          <div className="input_range_box">
            <input
              type="range"
              defaultValue={value}
              onChange={handleChangePrice}
              min={1000000}
              max={100000000}
              step={1000000}
            />
          </div>
        </div>
        <div className="col-12 mb-4">
          <button className="btn globalBtn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModalPopup;
