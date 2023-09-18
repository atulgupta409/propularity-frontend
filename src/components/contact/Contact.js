import React from "react";
import "./Contact.css";
import ContactForm from "../form/ContactForm";

function Contact() {
  return (
    <div className="container mt100">
      <div className="row">
        <div className="col-md-6 contact_left_box">
          <div className="propularity_logo">
            <img
              src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1695015812091.png"
              alt="propularity-logo"
            />
          </div>
          <div className="contact_text">
            <h1>Where Property Comes To Life</h1>
            <p className="mt20">
              We value your feedback and here to assist you. If you have any
              questions, concerns, or suggestions. Please don't hesitate to get
              in touch with us. Our dedicated team is ready to respond to your
              inquiries promptly. You can reach us by sending an email to{" "}
              <a href="mailto: hello@propularity.in">hello@propularity.in</a>.
              We're here to help you.
            </p>
          </div>
        </div>
        <div className="col-md-6 contact_right_box">
          <div className="contact_form_box">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
