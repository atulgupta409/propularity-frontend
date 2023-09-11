import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import logo from "../media/logo.png";
import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MICROLOCATIONS } from "../../service/MicrolocationService";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const cities = ["Gurugram", "Mumbai"];
  const city = "Gurugram";
  const { loading, error, data } = useQuery(GET_MICROLOCATIONS, {
    variables: { city },
  });

  const [microlocations, setMicrolocations] = useState([]);
  useEffect(() => {
    if (data) {
      setMicrolocations(data.microlocations);
    }
  }, [data]);
  console.log(microlocations);

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
                            <div className="col-6 mega_menu_items" key={i}>
                              <div className="row megamenu_locations">
                                <div className="col-12">
                                  <p>{myCity}</p>
                                  <div className="row">
                                    <div className="col-md-6 location_name">
                                      Dwarka Expressway
                                    </div>
                                    <div className="col-md-6 location_name">
                                      Udyog Vihar
                                    </div>
                                    <div className="col-md-6 location_name">
                                      Golf Course Road
                                    </div>
                                    <div className="col-md-6 location_name">
                                      Golf Course Ext. Road
                                    </div>
                                    <div className="col-md-6 location_name">
                                      NH-8
                                    </div>
                                    <div className="col-md-6 location_name">
                                      New Gurugram
                                    </div>
                                    <div className="col-md-6 location_name">
                                      Sohna Gurugram
                                    </div>
                                    <div className="col-md-6 location_name">
                                      DLF City
                                    </div>
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
                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Builder
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        <div className="col-md-4 mega_menu_items">
                          <Link to="/m3m-india">M3M India</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="vertical_line"></div>
                <li className="nav-item dropdown has-megamenu">
                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Budget
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        <div className="col-md-4 mega_menu_items">
                          <Link>Gurugram</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="vertical_line"></div>
                <li className="nav-item dropdown has-megamenu">
                  <p
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </p>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        <div className="col-md-4 mega_menu_items">
                          <Link>Ready to move</Link>
                        </div>
                        <div className="col-md-4 mega_menu_items">
                          <Link>Under Construction</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <form className="d-flex search_form">
                  <div className="search_box" type="submit">
                    <img
                      src={searchIcon}
                      alt="search"
                      onClick={globalSearchHandler}
                    />
                  </div>
                </form> */}
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item dropdown mob_hide">
                  <RequestCallBtn />
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
