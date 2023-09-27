import React from "react";
import Carousel from "react-elastic-carousel";
import RequestCallBtn from "../request-call-button/RequestCallBtn";

function ProjectCard({
  projectImages,
  name,
  city,
  microlocation,
  floorPlans,
  isRent,
}) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2.4 },
    { width: 768, itemsToShow: 2.4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="mt30 carousel_container carousel_project full_carousel">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {floorPlans?.map((plan, i) => {
            return (
              <div className="col-md-3 property_card" key={i}>
                <div className="img_card">
                  <img
                    src={projectImages[i % projectImages.length]?.image}
                    alt={projectImages[i % projectImages.length]?.name}
                    className="img-fluid img_cover"
                  />
                </div>
                <div className="card_body">
                  <h5 className="card_title">
                    {plan?.category[0]?.name?.toLowerCase()?.includes("bhk")
                      ? plan?.category[0]?.name +
                        (isRent
                          ? " Apartment For Rent"
                          : " Apartment For Sale") +
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

                    <RequestCallBtn button_name={"Enquire"} />
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCard;
