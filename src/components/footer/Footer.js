import React from "react";
import "./Footer.css";
import logo from "../media/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
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
              <a href="mailto: hello@propularity.in" className="footer_link">
                Email us: hello@propularity.in
              </a>
            </div>
            <div className="col-md-3">
              <div className="footer_heading">
                <h6>Residential Projects</h6>
              </div>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
              <p className="footer_text">Residential Projects in Sector 51</p>
            </div>
            <div className="col-md-3">
              <div className="footer_heading">
                <h6>Commercial Projects</h6>
              </div>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
              <p className="footer_text">Commercial Projects in Sector 51</p>
            </div>
            <div className="col-md-3">
              <div className="footer_heading">
                <h6>Propularity</h6>
              </div>
              <p className="footer_text">Builders</p>
              <p className="footer_text">About us</p>
              <Link to="/contact" className="footer_text">
                Contact us
              </Link>
              <p className="footer_text">Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer">
        <p className="text-center">
          COPYRIGHT © 2023 PROPULARITY ALL RIGHTS RESERVED | PROPULARITY IS A
          PART OF COFYND SPACE NETWORK
        </p>
      </div>
    </>
  );
}

export default Footer;
