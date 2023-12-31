import React, { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ALL_MICROLOCATIONS } from "../../service/MicrolocationService";
import TopFooter from "./TopFooter";

function Footer() {
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
      {/* <TopFooter /> */}
      <div className="footer_main_box">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_logo navbar-brand">
                <img src={logo} alt="propularity logo" />
              </div>
              <p className="footer_text">
                At Propularity, we take immense pride in curating a world-class
                real estate experience in the bustling city of Gurgaon. Our
                passion lies in providing exceptional residential
                flats/apartments and cutting-edge commercial office space that
                meet the diverse needs of modern urban living and thriving
                businesses.
              </p>
              <a href="mailto:hello@propularity.in" className="footer_link">
                Email us: hello@propularity.in
              </a>
            </div>

            {cities?.map((myCity, i) => {
              return (
                <div className="col-md-3 footer_col mob_hide" key={i}>
                  <div className="footer_heading">
                    <h6>{myCity} Localities</h6>
                  </div>
                  {microlocations
                    ?.filter((microlocation) => {
                      return microlocation.city.name === myCity;
                    })
                    ?.slice(0, 7)
                    ?.map((filteredMicrolocation, j) => {
                      return (
                        <p className="footer_text" key={j}>
                          <Link
                            to={`/${myCity.toLowerCase()}/${filteredMicrolocation.name
                              .split(" ")
                              .join("-")
                              .toLowerCase()}`}
                            className="footer_text"
                          >
                            {filteredMicrolocation.name}
                          </Link>
                        </p>
                      );
                    })}
                </div>
              );
            })}
            <div className="col-md-3 footer_col mob_hide">
              <div className="footer_heading">
                <h6>Propularity</h6>
              </div>
              <p className="footer_text">
                <Link to="/gurugram" className="footer_text">
                  Gurugram
                </Link>
              </p>
              <p className="footer_text">
                <Link to="/mumbai" className="footer_text">
                  Mumbai
                </Link>
              </p>
              <p className="footer_text">
                <Link to="/contact" className="footer_text">
                  Contact us
                </Link>
              </p>

              <p className="footer_text">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <p className="text-center">
          COPYRIGHT © 2023 PROPULARITY ALL RIGHTS RESERVED | PROPULARITY IS A
          PART OF{" "}
          <a style={{ color: "#ff385c" }} href="https://cofynd.com/">
            COFYND
          </a>{" "}
          SPACE NETWORK
        </p>
      </div>
    </>
  );
}

export default Footer;
