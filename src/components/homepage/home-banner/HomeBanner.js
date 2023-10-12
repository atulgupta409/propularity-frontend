import React, { useEffect, useState } from "react";
import "./HomeBanner.css";
import logo from "../../media/logo.png";
import buildingImg from "../../media/sample-image.png";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Carousel from "react-bootstrap/Carousel";

function HomeBanner() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    const twelveHourFormat = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

    return `${twelveHourFormat}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  const images = [
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697087952052.jpg",
      name: "Lodha Woods",
      location: "Kandivali, Mumbai",
    },
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697088357091.jpeg",
      name: "Godrej Habitat",
      location: "Dwarka Expressway, Gurugram",
    },
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697088281781.jpg",
      name: "The World Towers",
      location: "Lower parel, Worli, Mumbai",
    },
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697088689048.jpg",
      name: "Tata La Vida",
      location: "Sector 113, Gurugram",
    },
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107805600.jpeg",
      name: "Trump Towers",
      location: "Worli, Mumbai",
    },
    {
      img: "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697088899716.jpg",
      name: "Elan The Presidensial",
      location: "Sector 106, Gurugram",
    },
  ];

  return (
    <div className="home_banner_main">
      <div className="brand_logo">
        <img src={logo} alt="propularity logo" />
        <h1>Where Property Comes To Life</h1>
      </div>
      <div className="container my_container mob_hide">
        <div className="mob_box">
          <Carousel
            controls={false}
            interval={3000}
            className="carousel-container"
          >
            {images?.map((image, i) => {
              return (
                <Carousel.Item key={i}>
                  <div className="img_cards">
                    <img
                      src={image.img}
                      alt={image.name}
                      className="img-fluid img_covers"
                    />
                  </div>
                  <div className="phone_text">
                    <p>{image.name}</p>
                    <p>{image.location}</p>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="time">{time}</div>
          <div className="phone_camera">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697005681613.png"
              alt="phone camera"
              className="phone_camera"
            />
          </div>
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697005665857.png"
            alt="mobile image"
            className="img-fluid"
          />
        </div>
        <div className="circle_box circle_box1" data-tooltip-id="my-tooltip-1">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107875363.jpeg"
            alt="Tulip"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-1"
          place="top"
          content="Tulip"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box2" data-tooltip-id="my-tooltip-2">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107856945.png"
            alt="Mahindra Lifespace"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-2"
          place="top"
          content="Mahindra Lifespace"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box3" data-tooltip-id="my-tooltip-3">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107837214.jpeg"
            alt="M3M India"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-3"
          place="top"
          content="M3M India"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box4" data-tooltip-id="my-tooltip-4">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107824170.jpg"
            alt="Lodha"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
        <ReactTooltip
          id="my-tooltip-4"
          place="top"
          content="Lodha"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box5" data-tooltip-id="my-tooltip-5">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107805600.jpeg"
            alt="Godrej Properties"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-5"
          place="top"
          content="Godrej Properties"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box6" data-tooltip-id="my-tooltip-6">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107786561.jpeg"
            alt="Emaar"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-6"
          place="top"
          content="Emaar"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box7"></div>
        <div className="circle_box circle_box8"></div>
        <div className="circle_box circle_box9"></div>
        <div className="circle_box circle_box10"></div>
        <div className="circle_box circle_box11"></div>
        <div className="circle_box circle_box12"></div>
        <div className="circle_box circle_box13"></div>
        <div className="circle_box circle_box14" data-tooltip-id="my-tooltip-7">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107708820.jpg"
            alt="DLF Ltd."
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-7"
          place="top"
          content="DLF Ltd."
          className="builder_tooltip"
        />
        <div className="circle_box circle_box15" data-tooltip-id="my-tooltip-8">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107694674.jpg"
            alt="BPTP"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-8"
          place="top"
          content="BPTP"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box16" data-tooltip-id="my-tooltip-9">
          <img
            src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695107678478.jpeg"
            alt="Ashiana"
            className="img-fluid"
          />
        </div>
        <ReactTooltip
          id="my-tooltip-9"
          place="top"
          content="Ashiana"
          className="builder_tooltip"
        />
        <div
          className="circle_box circle_box17"
          data-tooltip-id="my-tooltip-10"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip
          id="my-tooltip-10"
          place="top"
          content="DLF Belaire"
          className="builder_tooltip"
        />
        <div
          className="circle_box circle_box18"
          data-tooltip-id="my-tooltip-11"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip
          id="my-tooltip-11"
          place="top"
          content="DLF Belaire"
          className="builder_tooltip"
        />
        <div
          className="circle_box circle_box19"
          data-tooltip-id="my-tooltip-12"
        >
          <img src={buildingImg} alt="builder name" className="img-fluid" />
        </div>
        <ReactTooltip
          id="my-tooltip-12"
          place="top"
          content="DLF Belaire"
          className="builder_tooltip"
        />
        <div className="circle_box circle_box20"></div>
        <div className="circle_box circle_box21"></div>
        <div className="circle_box circle_box22"></div>
        <div className="circle_box circle_box23"></div>
      </div>
    </div>
  );
}

export default HomeBanner;
