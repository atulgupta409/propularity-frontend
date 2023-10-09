import React from "react";
import Carousel from "react-bootstrap/Carousel";

function ImageCarousel({ images }) {
  console.log(images);
  const noImage =
    "https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694841091626.jpg";
  return (
    <div className="col-12 desk_hide">
      <Carousel interval={null} controls={false}>
        {images?.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <div className="img_card">
                <img
                  src={images?.length !== 0 ? image?.image : noImage}
                  alt={image?.alt}
                  className="img-fluid img_cover"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
