import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../media/logo.png";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MICROLOCATIONS } from "../../service/MicrolocationService";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const cities = ["Gurugram", "Mumbai"];
  const { loading, error, data } = useQuery(GET_ALL_MICROLOCATIONS);

  const [microlocations, setMicrolocations] = useState([]);
  useEffect(() => {
    if (data) {
      setMicrolocations(data.allmicrolocations);
    }
  }, [data]);

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
            >
              <FaBars />
            </button>
            <div className="collapse navbar-collapse" id="main_nav">
              <ul className="navbar-nav mx-auto custom_ul">
                <li className="nav-item dropdown has-megamenu">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694599024516.png"
                    alt="location icon"
                    className="nav_icon mob_hide"
                  />

                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Mumbai
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="megamenu-row">
                        <div className="mega_menu_items mega_menu_location">
                          <div className="row megamenu_locations">
                            {microlocations
                              ?.filter((microlocation) => {
                                return microlocation.city.name === "Mumbai";
                              })
                              ?.map((filteredMicrolocation, i) => {
                                return (
                                  <div
                                    className="col-md-4 location_name"
                                    key={i}
                                  >
                                    <Link
                                      to={`/mumbai/${filteredMicrolocation.name
                                        .split(" ")
                                        .join("-")
                                        .toLowerCase()}`}
                                    >
                                      {filteredMicrolocation.name}
                                    </Link>
                                  </div>
                                );
                              })}
                            <Link to={`/mumbai`} className="m-0">
                              <button>View All</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="vertical_line mob_hide"></div>
                <li className="nav-item dropdown has-megamenu">
                  <img
                    src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694599024516.png"
                    alt="location icon"
                    className="nav_icon mob_hide"
                  />

                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Gurugram
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="megamenu-row">
                        <div className="mega_menu_items mega_menu_location">
                          <div className="row megamenu_locations">
                            {microlocations
                              ?.filter((microlocation) => {
                                return microlocation.city.name === "Gurugram";
                              })
                              ?.map((filteredMicrolocation, i) => {
                                return (
                                  <div
                                    className="col-md-4 location_name"
                                    key={i}
                                  >
                                    <Link
                                      to={`/mumbai/${filteredMicrolocation.name
                                        .split(" ")
                                        .join("-")
                                        .toLowerCase()}`}
                                    >
                                      {filteredMicrolocation.name}
                                    </Link>
                                  </div>
                                );
                              })}
                            <Link to={`/mumbai`} className="m-0">
                              <button>View All</button>
                            </Link>
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
                    <a href="tel:9999063322">Call: +919999063322</a>
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
