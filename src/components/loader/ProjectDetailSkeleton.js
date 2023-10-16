import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProjectDetailSkeleton() {
  return (
    <div className="container mt-5 mob_hide">
      <div className="row">
        <div className="col-12 col-md-6 m60">
          <h1 className="builder_h1">
            <Skeleton
              className="wave-effect"
              height={30}
              width={293}
              borderRadius={10}
            />
          </h1>
          <p className="detail_p d-inline-block">
            <Skeleton
              className="wave-effect"
              height={20}
              width={493}
              borderRadius={10}
            />
          </p>
        </div>
        <div className="col-6 m60 p-0 d-flex flex-column align-items-end mob_hide">
          <p className="detail_p mob_hide">
            <Skeleton
              className="wave-effect"
              height={20}
              width={193}
              borderRadius={10}
            />
          </p>
          <h1 className="mob_hide">
            <Skeleton
              className="wave-effect"
              height={30}
              width={293}
              borderRadius={10}
            />
          </h1>
        </div>
      </div>
      <div className="row mt30">
        <div className="col-12 desk_hide">
          <Skeleton
            className="wave-effect"
            height={100}
            width={350}
            borderRadius={20}
          />
        </div>

        <div className="col-6 mob_hide">
          <div className="main_img">
            <Skeleton
              className="wave-effect"
              height="100%"
              width="100%"
              borderRadius={10}
            />
          </div>
        </div>
        <div className="col-3 small_img_main mob_hide">
          <div className="col-12">
            <div className="small_img">
              <Skeleton
                className="wave-effect"
                height="100%"
                width="100%"
                borderRadius={10}
              />
            </div>
          </div>
          <div className="col-12 mt20">
            <div className="small_img small_img_position">
              <Skeleton
                className="wave-effect"
                height="100%"
                width="100%"
                borderRadius={10}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 pe-md-0">
          <div className="col-12 builder_overview mt-3 mt-md-0">
            <Skeleton
              className="wave-effect"
              height="100%"
              width="100%"
              borderRadius={10}
            />
          </div>
          <div className="col-12 builder_overview">
            <Skeleton
              className="wave-effect"
              height="100%"
              width="100%"
              borderRadius={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailSkeleton;
