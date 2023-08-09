import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./ContactFormModal.css";
import ContactForm from "../form/ContactForm";

function ContactFormModal({ closeModal }) {
  return (
    <div className="modal_form_main">
      <div className="cross_icon">
        <button>
          <RxCross2 className="close_icon" onClick={closeModal} />
        </button>
      </div>

      <ContactForm />
    </div>
  );
}

export default ContactFormModal;



