import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../environment/apiconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./HomeContact.css";
import Select from "react-select";

function HomeContact() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [selectedLookingFor, setSelectedLookingFor] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const optionsLookingFor = [
    { value: "Residential", label: "Residential" },
    { value: "Commercial", label: "Commercial" },
    { value: "Collaboration", label: "Collaboration" },
    { value: "Any/others", label: "Any/others" },
  ];

  const optionsCity = [
    { value: "Gurugram", label: "Gurugram" },
    { value: "Mumbai", label: "Mumbai" },
  ];

  const selectChangeHandlerLooking = (lookingFor) => {
    setSelectedLookingFor(lookingFor?.value);
  };

  const selectChangeHandlerCity = (city) => {
    setSelectedCity(city?.value);
  };

  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const inputChangeHandler = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const location = window.location.href;
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
            looking: selectedLookingFor,
            city: selectedCity,
            PageLocation: location,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLoading(false);
        setIsSending(false);
        notify();
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

  //   const handleSheet = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://v1.nocodeapi.com/propularity/google_sheets/tYUnsaSLwvJXDnpB?tabId=sheet1",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify([
  //             [
  //               user.name,
  //               user.email,
  //               user.phone,
  //               location,
  //               new Date().toLocaleString(),
  //             ],
  //           ]),
  //         }
  //       );
  //       await response.json();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="container mob_hide">
      <div className="row">
        <div className="col-md-6">
          <div className="home_contact_bg">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1697091654423.jpg"
              alt="homepage contact image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="home_contact_right">
            <h2 className="heading text-start">
              Connect With <span className="primary_color">Propularity</span>
            </h2>
            <p className="heading_text text-start">
              Let our expert help you to find the best property
            </p>
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    className="form-control modal_form_input home_input"
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
                    className="form-control modal_form_input home_input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={inputChangeHandler}
                    onBlur={validationEmail}
                    name="email"
                    value={user.email}
                  />
                  {emailError && <p className="error_validate">{emailError}</p>}
                </div>
                <div className="col-md-12 mb-4">
                  <input
                    type="text"
                    placeholder="Phone*"
                    className="form-control modal_form_input home_input"
                    id="exampleInputEmail1"
                    name="phone"
                    value={user.phone}
                    aria-describedby="emailHelp"
                    onChange={inputChangeHandler}
                    onBlur={validationPhone}
                  />
                  {phoneError && <p className="error_validate">{phoneError}</p>}
                </div>
                <div className="col-md-6 mb-4">
                  <Select
                    value={optionsLookingFor.find(
                      (option) => option.value === selectedLookingFor
                    )}
                    onChange={selectChangeHandlerLooking}
                    options={optionsLookingFor}
                    placeholder="I am looking for"
                    inputProps={{
                      name: "looking for",
                    }}
                    className="home_select"
                  />
                </div>
                <div className="col-md-6 mb-4">
                  <Select
                    value={optionsCity.find(
                      (option) => option.value === selectedCity
                    )}
                    onChange={selectChangeHandlerCity}
                    options={optionsCity}
                    placeholder="City"
                    inputProps={{
                      name: "city",
                    }}
                    className="home_select"
                  />
                </div>
              </div>
              <button className="modal_form_btn home_btn mb-4" type="submit">
                {isSending ? "Sending..." : "Submit"}
              </button>
            </form>
            <a href="mailto:hello@propularity.in" className="footer_link">
              Email us: hello@propularity.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
