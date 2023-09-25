import React from "react";
import builderImg from "../media/sample-image.png";
import Carousel from "react-bootstrap/Carousel";
import { MdCall } from "react-icons/md";

function ProjectCard({
  projectImages,
  name,
  city,
  microlocation,
  startingPrice,
  floorPlans,
}) {
  return (
    <>
      {floorPlans?.map((plan, i) => {
        return (
          <div className="property_card" key={i}>
            <div>
              <div className="img_card">
                <img
                  src={projectImages[i % projectImages.length]?.image}
                  alt={projectImages[i % projectImages.length]?.name}
                  className="img-fluid img_cover"
                />
              </div>
            </div>
            <div className="card_body">
              <h5 className="card_title">
                {plan?.category[0]?.name?.toLowerCase()?.includes("bhk")
                  ? plan?.category[0]?.name +
                    " Apartment" +
                    " " +
                    plan?.size +
                    (plan?.size_sq ? plan?.size_sq : "Sq.Ft") +
                    " in " +
                    name
                  : plan?.category[0]?.name +
                    " " +
                    plan?.size +
                    (plan?.size_sq ? plan?.size_sq : "Sq.Ft") +
                    " in " +
                    name}
              </h5>
              <p className="card_p">{microlocation + ", " + city}</p>
              <div className="card_footer">
                <div>
                  <p className="card_p mb-0">
                    <span>
                      {plan?.price ===
                      ("Call For Price" ||
                        "call for price" ||
                        "Call for price" ||
                        "Call for Price") ? (
                        <a href="tel: 9999063322">Call For Price</a>
                      ) : (
                        "Starting ₹ " + plan?.price
                      )}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="card_p mb-0">
                    <span>
                      <MdCall className="card_icon" />
                    </span>
                    Enquire
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectCard;
