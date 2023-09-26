import React, { useState } from "react";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";
import "./RequestCallBtn.css";
import { MdCall } from "react-icons/md";

function RequestCallBtn() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div onClick={openModal} style={{ cursor: "pointer" }}>
        <p className="card_p mb-0">
          <span>
            <MdCall className="card_icon" />
          </span>
          Enquire
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ContactFormModal closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default RequestCallBtn;
