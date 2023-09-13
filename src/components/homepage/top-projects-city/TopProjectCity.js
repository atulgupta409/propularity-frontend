import React from "react";
import MyCarousel from "../../carousel/MyCarousel";

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
        <MyCarousel carouselClass={"full_carousel"} />
      </div>
    </>
  );
}

export default TopProjectCity;
