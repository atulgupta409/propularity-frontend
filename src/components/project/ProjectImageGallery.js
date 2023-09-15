import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GET_PROJECT_DETAILS } from "../../service/ImageGalleryService";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function ProjectImageGallery() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT_DETAILS, {
    variables: {
      slug: slug,
    },
  });
  console.log(data);
  const [imgData, setImgdata] = useState({ img: "", i: "" });

  const viewImage = (img, i) => {
    setImgdata({ img: img.image, i });
  };
  console.log(imgData);

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

  return (
    <>
      {imgData?.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{ position: "absolute", top: "10px", right: "10px " }}
          >
            X
          </button>
          <button onClick={() => imgAction("prev-img")}>Prev</button>
          <img
            src={imgData?.img}
            alt="largeImage"
            style={{ width: "auto", maxWidth: "90%", maxHeight: "90%" }}
          />
          <button onClick={() => imgAction("next-img")}>Next</button>
        </div>
      )}

      <div className="container mt100">
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
