import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="container mt100">
      <div className="page_not_found">
        <img
          src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697438988598.png"
          alt="page-not-found"
        />
        <h1>Page Not found.</h1>
        <Link to="/">
          <button className="modal_form_btn w-auto">Go to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
