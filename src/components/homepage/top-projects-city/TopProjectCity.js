import React from "react";
import HomeCarousel from "../../carousel/HomeCarousel";

function TopProjectCity() {
  return (
    <>
      <div className="container mt100">
        <h2 className="heading">
          Top Projects in <span className="primary_color">Gurugram</span>
        </h2>
        <p className="heading_text">
          Find Your Home In The City Of Your Choice
        </p>
        <HomeCarousel carouselClass={"full_carousel"} city={"Gurugram"} />
      </div>
      <div className="container mt100">
        <h2 className="heading">
          Top Projects in <span className="primary_color">Mumbai</span>
        </h2>
        <p className="heading_text">
          Find Your Home In The City Of Your Choice
        </p>
        <HomeCarousel carouselClass={"full_carousel"} city={"Mumbai"} />
      </div>
    </>
  );
}

export default TopProjectCity;
