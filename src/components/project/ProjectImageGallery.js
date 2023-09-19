import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GET_PROJECT_DETAILS } from "../../service/ImageGalleryService";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ProjectImageGallery() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      slug: slug,
    },
  });
  const [imgData, setImgdata] = useState({ img: "", i: "" });

  const viewImage = (img, i) => {
    setImgdata({ img: img.image, i });
  };

  const imgAction = (action) => {
    let i = imgData.i;
    if (action === "next-img") {
      setImgdata({
        img: data?.projectDetails[0]?.images[i + 1]?.image,
        i: i + 1,
      });
    }
    if (action === "prev-img") {
      setImgdata({
        img: data?.projectDetails[0]?.images[i - 1]?.image,
        i: i - 1,
      });
    }
    if (!action) {
      setImgdata({
        img: "",
        i: 0,
      });
    }
  };

  const goBack = () => {
    navigate(
      `/${data?.projectDetails[0]?.builder[0]?.name
        ?.split(" ")
        .join("-")
        .toLowerCase()}/${data?.projectDetails[0]?.location?.city[0]?.name.toLowerCase()}/${slug}`
    );
  };

  return (
    <>
      {imgData?.img && (
        <div className="large_img_box">
          <button onClick={() => imgAction()} className="gallery_close_btn">
            <AiOutlineClose /> Close
          </button>
          <button
            onClick={() => imgAction("prev-img")}
            className="gallery_arrow_btn prev_btn"
          >
            <IoIosArrowBack />
          </button>
          <img
            src={imgData?.img}
            alt="largeImage"
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button
            onClick={() => imgAction("next-img")}
            className="gallery_arrow_btn next_btn"
          >
            <IoIosArrowForward />
          </button>
        </div>
      )}
      <button className="go_back_gallery" onClick={goBack}>
        <IoIosArrowBack />
      </button>
      <div className="container mt100 img_gallery_container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
          <Masonry gutter="10px">
            {data?.projectDetails[0]?.images?.map((image, i) => {
              return (
                <img
                  src={image?.image}
                  alt={image?.alt}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  key={i}
                  onClick={() => viewImage(image, i)}
                />
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default ProjectImageGallery;
