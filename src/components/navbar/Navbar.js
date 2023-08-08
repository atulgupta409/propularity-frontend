import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import logo from "../media/logo.png";
import searchIcon from "../media/search-icon.png";

function Navbar() {
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Location
                  </a>
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Builder
                  </a>
                  <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                      <div className="row megamenu-row">
                        <div className="col-md-4 mega_menu_items">
                          <Link>M3M India</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="vertical_line"></div>
                <li className="nav-item dropdown has-megamenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Budget
                  </a>
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </a>
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
                <form class="d-flex search_form">
                  <div className="search_box" type="submit">
                    <img src={searchIcon} alt="search" />
                  </div>
                </form>
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
