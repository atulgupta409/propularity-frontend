import React, { useState } from "react";
import axios from "axios"
import { baseUrl } from "../../environment/apiconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm({ button_name, downloadPdf, city, location }) {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const url = window.location.href;
  const notify = () =>
    toast.success("Thank You for submitting the query!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyError = () =>
    toast.error("Error Ocurred!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const [isSending, setIsSending] = useState(false);

  const phonePattern = /^\d{10}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationName = () => {
    if (user.name.trim() === "") {
      setNameError("Name is required");
    } else {
      setNameError("");
    }
  };
  const validationEmail = () => {
    if (!emailPattern.test(user.email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const validationPhone = () => {
    if (!phonePattern.test(user.phone)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      user.name.trim() !== "" &&
      emailPattern.test(user.email) &&
      phonePattern.test(user.phone)
    ) {
      setUser({ name: "", email: "", phone: "" });
      setIsSending(true);
      validationName();
      validationEmail();
      validationPhone();
      setLoading(true);
      try {
        await axios.post(
          `${baseUrl}/sendmail`,
          {
            name: user.name,
            email: user.email,
            phone: user.phone,
            city: city,
            location: location,
            PageLocation: url,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        setIsSending(false);
        handleSheet();
        notify();
        if (button_name === "Download Brochure") {
          downloadPdf();
        }
      } catch (error) {
        console.error(error);
        notifyError();
      }
    } else {
      validationName();
      validationEmail();
      validationPhone();
    }
  };

  const dateTimeString = new Date().toLocaleString();
  const [date, time] = dateTimeString.split(", ");
  const handleSheet = async () => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/propularity/google_sheets/tYUnsaSLwvJXDnpB?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [
              date,
              time,
              user.name,
              user.email,
              user.phone,
              city,
              location,
              url,
            ],
          ]),
        }
      );
      await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer style={{ zIndex: "99999" }} />
      <div className="form_heading">
        <h3 className="req_box">Yes, I'm Interested</h3>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-12 mb-4">
            <input
              type="text"
              className="form-control modal_form_input"
              id="exampleInputtext"
              aria-describedby="emailHelp"
              placeholder="Name*"
              value={user.name}
              name="name"
              onChange={inputChangeHandler}
              onBlur={validationName}
            />
            {nameError && <p className="error_validate">{nameError}</p>}
          </div>
          <div className="col-md-12 mb-4">
            <input
              type="email"
              placeholder="Email*"
              className="form-control modal_form_input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={inputChangeHandler}
              onBlur={validationEmail}
              name="email"
              value={user.email}
            />
            {emailError && <p className="error_validate">{emailError}</p>}
          </div>
          <div className="col-md-12 mb-3">
            <input
              type="text"
              placeholder="Phone*"
              className="form-control modal_form_input"
              id="exampleInputEmail1"
              name="phone"
              value={user.phone}
              aria-describedby="emailHelp"
              onChange={inputChangeHandler}
              onBlur={validationPhone}
            />
            {phoneError && <p className="error_validate">{phoneError}</p>}
          </div>
          <div className="form-check custom_form_check col-12 mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Send me alerts for similar properties
            </label>
          </div>
        </div>
        <p className="form_footer mb-4">
          Please visit <a>privacy policy</a> to understand how propularity
          handle your personal data
        </p>
        <button className="modal_form_btn" type="submit">
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default ContactForm;
