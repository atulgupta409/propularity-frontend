import React from "react";
import RequestCallBtn from "../request-call-button/RequestCallBtn";
import "./FixedForm.css";

function FixedForm() {
  return (
    <nav className="navbar fixed-bottom navbar-light desk_hide fixed_bottom fixed_bottom_home">
      <div className="container-fluid">
        <div className="starting_price">
          <button className="fixed_form_btn">
            <a href="tel:9999063322">Call Now</a>
          </button>
        </div>
        <button>
          <RequestCallBtn button_name={"Enquire"} darkBtn={true} />
        </button>
      </div>
    </nav>
  );
}

export default FixedForm;
