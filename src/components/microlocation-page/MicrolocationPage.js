import React, { useState, useEffect } from "react";
import "./MicrolocationPage.css";
import { useParams } from "react-router-dom";
import Select from "react-select";
import HomeCard from "../card/HomeCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_BY_MICROLOCATIONS } from "../../service/ProjectsByMicrolocation";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
function MicrolocationPage() {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [curPage, setCurPage] = useState(1)
  const [projects, setProjects] = useState([]);
  const [searchedprojects, setSearchedprojects] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  let item_per_page = 16;
  const { microlocation } = useParams();
  const microlocationArray = microlocation.split("-");
  const microlocationName = microlocationArray
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const pageUrl = window.location.href;
  const pageUrlArr = pageUrl.split("/");
  const city = pageUrlArr[pageUrlArr.length - 2];
  
  const {
    loading: isLoading,
    error: isError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);


  const {
    loading,
    error,
    data: projectsData,
  } = useQuery(GET_PROJECTS_BY_MICROLOCATIONS, {
    variables: { location: microlocationName, city:  city},
  });


  let totalPage = Math.ceil((isSearch ? searchedprojects?.length : projectsData?.builderProjectsByLocation?.length) / item_per_page);
  let current_page = 1;
  const handlePageClick = async (data_page) => {
    current_page += data_page.selected;
    setCurPage(current_page);
  };
  useEffect(() => {
    if (projectsData) {
      setProjects(projectsData?.builderProjectsByLocation);
    }
  }, [projectsData]);
  function convertPriceToNumeric(priceStr) {
    const regexCr = /([\d.]+)\s*Cr/;
    const regexLacs = /([\d.]+)\s*Lacs?/i;
    const matchCr = priceStr.match(regexCr);
    if (matchCr) {
      const value = parseFloat(matchCr[1]);
      return value * 10000000; 
    }
    const matchLacs = priceStr.match(regexLacs);
    if (matchLacs) {
      const value = parseFloat(matchLacs[1]);
      return value*100000
    }
    return 0;
  }
  
  const applyFilters = () => {
    let filteredData =   projectsData?.builderProjectsByLocation;

         if (selectedBuilder) {
      filteredData = filteredData.filter(
        (project) => project?.builder[0]?.name === selectedBuilder.label
      );
    }

    if (selectedStatus) {
      filteredData = filteredData.filter(
        (project) => project?.project_status === selectedStatus.label
      );
    }

      if (selectedPrice) {
      const [minPrice, maxPrice] = selectedPrice.value.split(" - ");
      const minPriceVal = convertPriceToNumeric(minPrice);
      const maxPriceVal = convertPriceToNumeric(maxPrice);
      filteredData = filteredData.filter((project) => {
        const projectPrice = convertPriceToNumeric(project?.starting_price);
        return (
          parseFloat(projectPrice) >= parseFloat(minPriceVal) &&
          parseFloat(projectPrice) <= parseFloat(maxPriceVal)
        );
      });
    }
    setSearchedprojects(filteredData);
    setCurPage(1);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedBuilder, selectedStatus, selectedPrice]);
  const onChangeOptionHandler = (selectedOption, dropdownIdentifier) => {
    switch (dropdownIdentifier) {
      case "status":
        setSelectedStatus(selectedOption);
        setIsSearch(true)
        break;
      case "price":
        setSelectedPrice(selectedOption);
        setIsSearch(true)
        break;
      case "builder":
        setSelectedBuilder(selectedOption);
        setIsSearch(true)
        break;
      default:
        break;
    }
  }; 
  const statusOptions = [
    { value: "Ready To Move", label: "Ready To Move" },
    { value: "Under Construction", label: "Under Construction" },
    { value: "New Launch", label: "New Launch" },
  ];

  const priceOptions = [
    { value: "0 - 1.00Cr", label: "0 - 1.00Cr" },
    { value: "1.00Cr - 2.00Cr", label: "1.00Cr - 2.00Cr" },
    { value: "2.00Cr - 4.00Cr", label: "2.00Cr - 4.00Cr" },
    { value: "4.00Cr - 6.00Cr", label: "4.00Cr - 6.00Cr" },
    { value: "6.00Cr - 10.00Cr", label: "6.00Cr - 10.00Cr" },
  ];
    
  const builderOptions = builderData?.builders?.map((builder) => ({
    value: builder._id,
    label: builder.name,
  }));
  
  const resetFilterHandler = () => {
    setSelectedBuilder(null);
    setSelectedStatus(null);
    setSelectedPrice(null);
    setIsSearch(false);
  };

  return (
    <div className="container mt100 microlocation_container">
      <div className="row">
        <div className="col-md-6">
          <h1>Projects in {microlocationName}</h1>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-end">
            <div className="col-3">
              <Select
                value={selectedBuilder}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "builder")
                }
                isSearchable
                options={builderOptions}
                placeholder={"Builder"}
                className="select_builder"
              />
            </div>
            <div className="col-3">
              <Select
                value={selectedStatus}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "status")
                }
                isSearchable
                options={statusOptions}
                placeholder={"Project Status"}
                className="select_builder"
              />
            </div>
            <div className="col-3">
              <Select
                value={selectedPrice}
                onChange={(selectedOption) =>
                  onChangeOptionHandler(selectedOption, "price")
                }
                options={priceOptions}
                placeholder={"Price"}
                className="select_builder"
              />
            </div>
            <div className="col-md-2">
              <button
                className="clear_filter_btn"
                role="button"
                onClick={resetFilterHandler}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row microlocation_projects">
        {(isSearch ? searchedprojects?.length : projects?.length > 0) ? (
          (isSearch
            ? searchedprojects?.slice(
                (curPage - 1) * item_per_page,
                curPage * item_per_page
              )
            : projects?.slice(
              (curPage - 1) * item_per_page,
              curPage * item_per_page
            )
          )?.map((element, i) => {
            return (
              <div className="col-md-3" key={i}>
                <HomeCard
                  builder={element?.builder[0].name
                    .split(" ")
                    .join("-")
                    .toLowerCase()}
                  city={city}
                  projectName={element?.name}
                  startingPrice={element?.starting_price}
                  microlocationName={microlocationName}
                  slug={element?.slug}
                  images={element?.images}
                  ratings={element?.ratings}
                />
              </div>
            );
          })
        ) : (
          <p className="no_filter_match">
            No projects match the selected filter criteria.
          </p>
        )}
      </div>
      <ReactPaginate
        previousLabel={<MdKeyboardArrowLeft className="pagination_icon" />}
        nextLabel={<MdKeyboardArrowRight className="pagination_icon" />}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={
          "pagination justify-content-center pagination_box mt20"
        }
        pageClassName={"page-item page_item"}
        pageLinkClassName={"page-link page_link"}
        previousClassName={"page-item page_item"}
        previousLinkClassName={"page-link page_link"}
        nextClassName={"page-item page_item"}
        nextLinkClassName={"page-link page_link"}
        activeClassName={"active"}
      ></ReactPaginate>
    </div>
  );
}

export default MicrolocationPage;
