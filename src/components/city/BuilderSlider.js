import React from "react";

function BuildersSlider({ builders }) {
  console.log(builders);
  return (
    <div className="container builder_slider_container">
      <div className="builders_row">
        {builders?.map((builder, i) => {
          return (
            <div className="builder_logo_box" key={i}>
              <img
                src={builder?.BuilderLogo}
                alt={builder?.alt}
                className="img-fluid"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BuildersSlider;
