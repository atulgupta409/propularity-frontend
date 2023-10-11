import React, { useState } from "react";
import ContactFormModal from "../modal-form/ContactFormModal";
import Modal from "react-modal";
import "./RequestCallBtn.css";
import { MdCall } from "react-icons/md";
import {BiSolidDownload} from "react-icons/bi"

function RequestCallBtn({ button_name, downloadPdf, darkBtn }) {
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
        <p className={darkBtn ? "color_white card_p mb-0" : "card_p mb-0"}>
          <span>
            {button_name === "Enquire" ? (
              ""
            ) : (
              <BiSolidDownload className="download_card_icon" />
            )}
          </span>
          {button_name + " Now"}
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <ContactFormModal
          closeModal={closeModal}
          button_name={button_name}
          downloadPdf={downloadPdf}
        />
      </Modal>
    </>
  );
}

export default RequestCallBtn;
