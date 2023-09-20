import React, { useState } from "react";
import Modal from "react-modal";
import FilterModalPopup from "./FilterModalPopup";

function FilterModal({ city, sendDataToParent, projectsData }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className="btn filter_button" onClick={openModal}>
        <img
          src="https://propularity-bucket.s3.ap-south-1.amazonaws.com/image-1694669032405.png"
          alt="filter icon"
          className="filter_icon"
        />
        Filter
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <FilterModalPopup
          city={city}
          closeModal={closeModal}
          sendDataToParent={sendDataToParent}
          projectsData={projectsData}
        />
      </Modal>
    </>
  );
}

export default FilterModal;
