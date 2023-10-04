import React from "react";
import "./FeaturedCollection.css";
import newLaunchImg from "../../media/new-launch.png";
import { BsArrowRight } from "react-icons/bs";
import readyMoveImg from "../../media/ready-to-move.png";
import underConstructionImg from "../../media/under-construction.png";
import { Link } from "react-router-dom";

function FeaturedCollection({ city }) {
  return (
    <div className="featured_box">
      <div className="container">
        <div className="featured_heading_box">
          <h2 className="heading featured_heading">
            Featured <span className="primary_color">Collections</span>
          </h2>
        </div>
        <div className="row mt30">
          <div className="col-12 col-md-6 featured_left_box">
            <div className="featured_new_launch">
              <img
                src={newLaunchImg}
                alt="new launch projects"
                className="img-fluid"
              />
            </div>
            <h3 className="mt20 mob_hide featured_collection_h3">
              New Launch Projects
            </h3>
            <p className="mt20 mob_hide">
              Residential properties that are fully completed and available for
              immediate occupancy.
            </p>
            <Link
              to={`/${city}/projects/new-launch-projects`}
              className="mob_hide"
            >
              <p className="featured_explore">
                Explore <BsArrowRight />
              </p>
            </Link>
            <div className="mt10 d-flex align-items-center justify-content-between desk_hide">
              <h3 className="desk_hide featured_collection_h3">
                New Launch Projects
              </h3>
              <Link
                to={`/${city}/projects/new-launch-projects`}
                className="desk_hide"
              >
                <p className="featured_explore">
                  Explore <BsArrowRight />
                </p>
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6 featured_right">
            <div className="featured_card_box">
              <div className="featured_card">
                <div className="featured_ready_move">
                  <img
                    src={readyMoveImg}
                    alt="ready to move"
                    className="img-fluid"
                  />
                </div>
                <div className="ms-4 featured_collection_status">
                  <h3 className="featured_collection_h3">Ready to Move In</h3>
                  <p className="mob_hide">
                    Residential properties that are fully completed and
                    available for immediate occupancy.
                  </p>
                  <Link to={`/${city}/projects/ready-to-move-projects`}>
                    <p className="featured_explore">
                      Explore <BsArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="featured_card ml2">
                <div className="featured_ready_move">
                  <img
                    src={underConstructionImg}
                    alt="under construction"
                    className="img-fluid"
                  />
                </div>
                <div className="ms-4 featured_collection_status">
                  <h3 className="featured_collection_h3">
                    Under Construction Projects
                  </h3>
                  <p className="mob_hide">
                    Residential properties that are fully completed and
                    available for immediate occupancy.
                  </p>
                  <Link to={`/${city}/projects/under-construction-projects`}>
                    <p className="featured_explore">
                      Explore <BsArrowRight />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollection;
