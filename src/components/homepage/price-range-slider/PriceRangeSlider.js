import React, { useState } from "react";
import topBuilderImg from "../../media/vertical-shot-white-building-clear-sky.png";
import "./PriceRangeSlider.css";
import { AiFillStar } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";

function PriceRangeSlider() {
  const [value, setValue] = useState("1000000");
  const priceValue = value / 100000;
  const handleChangePrice = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="container price_range_container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="top_builder_img">
            <img src={topBuilderImg} alt="top rated" className="img-fluid" />
            <div className="star_box">
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <AiFillStar className="icon" />
              <BiSolidStarHalf className="icon" />
            </div>
            <div className="top_builder_text">
              <h5>M3M Golf 79</h5>
              <p>Golf Course Extension Road, Gurugram</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <p className="price_range_p">
            <span>Budget Friendly</span>
            <br /> Projects in Gurugram
          </p>
          <p className="price_range_value">
            ₹{" "}
            {value < 10000000
              ? (value / 100000).toFixed(2) + " " + "Lacs*"
              : (value / 10000000).toFixed(2) + " " + "Cr*"}
          </p>
          <div className="input_range_box">
            <input
              type="range"
              defaultValue={value}
              onChange={handleChangePrice}
              min={1000000}
              max={100000000}
              step={1000000}
            />
            <p className="mt-3">Exploring Value-Packed Real Estate Options</p>
            <button className="globalBtn callBack_btn_nav">
              Search Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
