import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonBox = () => {
  return (
    <div className="row mt30">
    <div className="col-6">
      <div className="main_img">
      <Skeleton
                className="wave-effect"
                height={220}
                width={293}
                borderRadius={20}
              />
      </div>
    </div>
    <div className="col-3 small_img_main">
      <div className="col-12">
        <div className="small_img">
        <Skeleton
                className="wave-effect"
                height={220}
                width={293}
                borderRadius={20}
              />
        </div>
      </div>
      <div className="col-12 mt20">
        <div className="small_img small_img_position">
        <Skeleton
                className="wave-effect"
                height={220}
                width={293}
                borderRadius={20}
              />
        </div>
      </div>
    </div>
  </div>
  )
}

export default SkeletonBox;
