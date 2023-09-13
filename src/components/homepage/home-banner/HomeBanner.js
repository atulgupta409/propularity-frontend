import React from "react";
import "./HomeBanner.css";
import logo from "../../media/logo.png";
import mobileImg from "../../media/home-mobile.png";
import buildingImg from "../../media/sample-image.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import searchIcon from "../../media/search-icon.png";

function HomeBanner() {
  return (
    <div className="home_banner_main">
      <div className="brand_logo">
        <img src={logo} alt="propularity logo" />
        <h1>Where Property Comes To Life</h1>
      </div>
      <form class="d-flex searchForm" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="search_img_box">
          <img src={searchIcon} alt="search icon" width={16} height={16} />
        </div>
      </form>
      <div className="container my_container">
        <div className="mob_box">
          <img src={mobileImg} alt="mobile image" className="img-fluid" />
        </div>
        <div className="circle_box circle_box1" data-tooltip-id="my-tooltip-1">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-1" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box2" data-tooltip-id="my-tooltip-2">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-2" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box3" data-tooltip-id="my-tooltip-3">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-3" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box4" data-tooltip-id="my-tooltip-4">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-4" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box5" data-tooltip-id="my-tooltip-5">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-5" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box6" data-tooltip-id="my-tooltip-6">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-6" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box7"></div>
        <div className="circle_box circle_box8"></div>
        <div className="circle_box circle_box9"></div>
        <div className="circle_box circle_box10"></div>
        <div className="circle_box circle_box11"></div>
        <div className="circle_box circle_box12"></div>
        <div className="circle_box circle_box13"></div>
        <div className="circle_box circle_box14" data-tooltip-id="my-tooltip-7">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-7" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box15" data-tooltip-id="my-tooltip-8">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-8" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box16" data-tooltip-id="my-tooltip-9">
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-9" place="top" content="DLF Belaire" />
        <div
          className="circle_box circle_box17"
          data-tooltip-id="my-tooltip-10"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-10" place="top" content="DLF Belaire" />
        <div
          className="circle_box circle_box18"
          data-tooltip-id="my-tooltip-11"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-11" place="top" content="DLF Belaire" />
        <div
          className="circle_box circle_box19"
          data-tooltip-id="my-tooltip-12"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip id="my-tooltip-12" place="top" content="DLF Belaire" />
        <div className="circle_box circle_box20"></div>
        <div className="circle_box circle_box21"></div>
        <div className="circle_box circle_box22"></div>
        <div className="circle_box circle_box23"></div>
      </div>
    </div>
  );
}

export default HomeBanner;
