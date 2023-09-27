import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../media/logo.png";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MICROLOCATIONS } from "../../service/MicrolocationService";
import { GET_ALL_BUILDERS } from "../../service/ProjectDetailsservice";

function Navbar() {
  const location = useLocation();
  const cities = ["Gurugram", "Mumbai"];
  const { loading, error, data } = useQuery(GET_ALL_MICROLOCATIONS);
  const {
    loading: builderLoading,
    error: builderError,
    data: builderData,
  } = useQuery(GET_ALL_BUILDERS);

  const [microlocations, setMicrolocations] = useState([]);
  useEffect(() => {
    if (data) {
      setMicrolocations(data.allmicrolocations);
    }
  }, [data]);

  const [builder, setBuilder] = useState(() => {
    const storedBuilder = localStorage.getItem("builder");
    return storedBuilder || "Builder";
  });

  useEffect(() => {
    setBuilder("Builder");
  }, [location]);

  const searchBuilderHandler = (e) => {
    const linkText = e.target.textContent;
    setBuilder(linkText);
    localStorage.setItem("builder", linkText);
  };

  let builderSlug = builder.toLowerCase().split(" ").join("-");
  // console.log(builderSlug);

  return (
    <>
      <div className="nav-main">
        <nav className="navbar navbar-expand-lg navbar_custom">
          <div className="container pl_0">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="propularity-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-controls="main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "#444", padding: "0" }}
            ></button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav mx-auto custom_ul">
                <li className="nav-item dropdown has-megamenu">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694599024516.png"
                    alt="location icon"
                    className="nav_icon"
                  />

                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Location
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        {cities?.map((myCity, i) => {
                          return (
                            <div
                              className="col-6 mega_menu_items mega_menu_location"
                              key={i}
                            >
                              <div className="row megamenu_locations">
                                <div className="col-12">
                                  <p>{myCity}</p>
                                  <div className="row">
                                    {microlocations
                                      ?.filter((microlocation) => {
                                        return (
                                          microlocation.city.name === myCity
                                        );
                                      })
                                      ?.map((filteredMicrolocation, i) => {
                                        return (
                                          <div
                                            className="col-md-6 location_name"
                                            key={i}
                                          >
                                            <Link
                                              to={`/${myCity.toLowerCase()}/${filteredMicrolocation.name
                                                .split(" ")
                                                .join("-")
                                                .toLowerCase()}`}
                                            >
                                              {filteredMicrolocation.name}
                                            </Link>
                                          </div>
                                        );
                                      })}
                                  </div>
                                  <Link
                                    to={`/${myCity.toLowerCase()}`}
                                    className="m-0"
                                  >
                                    <button>View All</button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </li>
                <div className="vertical_line"></div>
                <li className="nav-item dropdown has-megamenu">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694599042041.png"
                    alt="location icon"
                    className="nav_icon"
                  />
                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Builder
                  </p>
                  <div
                    className="dropdown-menu megamenu megamenu_builder"
                    role="menu"
                  >
                    <div className="container">
                      <div className="row megamenu-row megamenu_locations">
                        <div className="col-12">
                          <p className="builder_dropdown">Top Builders</p>
                          <hr />
                          <div className="row">
                            {builderData?.builders?.map((builder, i) => {
                              return (
                                <div className="col-md-4 location_name" key={i}>
                                  <Link to={`/builder/${builder?.slug}`}>
                                    {builder?.name}
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown mob_hide">
                  <button className="globalBtn callBack_btn_nav">
                    <a href="tel: 9999063322">Call: +919999063322</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
