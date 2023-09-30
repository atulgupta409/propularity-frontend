import React from "react";
import HomeCard from "../card/HomeCard";
import "./FilteredItems.css";
import ProjectTypesNav from "../project-types-navbar/ProjectTypesNav";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_PLAN_TYPE } from "../../service/DataByPlanTypeService";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function FilteredItems() {
  const currentUrl = window.location.href;
  const parsedUrl = new URL(currentUrl);
  const path = parsedUrl.pathname;
  const pathParts = path.split("/");
  const desiredPart = pathParts[1];
  const city = desiredPart;
  const { filteredValue } = useParams();
  const planType = filteredValue.split("-").join(" ");

  const { loading, error, data } = useQuery(GET_PROJECTS_BY_PLAN_TYPE, {
    variables: { city: city, planType: planType },
  });
  
  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (data) {
      setProjects(data.topProjectsByPlanAndCity);
    }
  }, [data]);

  const receiveDataFromChild = (datas) => {
    setProjects(datas);
  };
  console.log(data, city, planType);  

  return (
    <>
      <ProjectTypesNav
        city={desiredPart}
        showFilter={true}
        sendDataToParent={receiveDataFromChild}
        projectsData={data?.topProjectsByPlanAndCity}
      />
      <div className="container">
        <div className="filtered_items_main">
          <div className="row">
            {projects?.length > 0 ? (
              projects?.map((project, i) => {
                return (
                  <div className="col-sm-6 col-md-3" key={i}>
                    <HomeCard
                      builder={project?.builder[0]?.name}
                      city={project?.location?.city[0]?.name}
                      projectName={project?.name}
                      startingPrice={project?.starting_price}
                      microlocationName={
                        project?.location?.micro_location[0]?.name
                      }
                      slug={project?.slug}
                      images={project?.images}
                      ratings={project?.ratings}
                    />
                  </div>
                );
              })
            ) : (
              <p className="no_filter_match">Not Available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilteredItems;
