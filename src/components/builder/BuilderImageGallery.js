import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GET_ALL_IMAGES } from "../../service/BuildersService";
import { useQuery } from "@apollo/client";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function BuilderImageGallery() {
  const navigate = useNavigate();
  const url = window.location.href;
  const urlArr = url.split("/");
  const slug = urlArr[urlArr.length - 2];
  console.log(slug);
  const { loading, error, data } = useQuery(GET_ALL_IMAGES, {
    variables: {
      slug: slug,
    },
  });

  const [imgData, setImgdata] = useState({ img: "", i: "" });

  const viewImage = (img, i) => {
    setImgdata({ img: img.image, i });
    document.body.classList.add("hide-scrollbar");
  };

  const imgAction = (action) => {
    let i = imgData.i;
    if (action === "next-img") {
      setImgdata({
        img: data?.buildersBySlug[0]?.images[i + 1]?.image,
        i: i + 1,
      });
    }
    if (action === "prev-img") {
      setImgdata({
        img: data?.buildersBySlug[0]?.images[i - 1]?.image,
        i: i - 1,
      });
    }
    if (!action) {
      setImgdata({
        img: "",
        i: 0,
      });
      document.body.classList.remove("hide-scrollbar");
    }
  };

  const goBack = () => {
    navigate(`/builder/${slug}`);
  };

  const handleEscapeKeyPress = (event) => {
    if (event.keyCode === 27) {
      navigate(`/builder/${slug}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyPress);
    return () => {
      window.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, []);

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
            style={{
              width: "68%",
              height: "80%",
              maxWidth: "90%",
              maxHeight: "90%",
            }}
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
            {data?.buildersBySlug[0]?.images?.map((image, i) => {
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

export default BuilderImageGallery;
