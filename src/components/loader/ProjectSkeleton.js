import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectSkeleton({cards}) {
  return Array(cards)
    .fill(0)
    .map((item) => (
      <div className="col-sm-8 col-md-3">
        <div className="carousel-items">
          <div className="row property_homecard property_card_mob">
            <div className="col-6 col-sm-12 img_box2 img_box_micro">
              <Skeleton
                className="wave-effect"
                height={220}
                width={293}
                borderRadius={20}
              />
            </div>
            <div className="card_body_skeleton col-6 col-sm-12">
              <p className="card_title">
                <Skeleton className="wave-effect" />
              </p>
              <div className="card_p homecard_p">
                <p>
                  <Skeleton className="wave-effect" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
}

export default ProjectSkeleton;