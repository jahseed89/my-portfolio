import React from "react";
import { CgClose } from "react-icons/cg";
import './pagesModal.scss'

const PagesModal = ({ handleClose, children }) => {
  return (
    <div className="modal">
      <button onClick={handleClose}>
        <CgClose className="cancelIcon" />
      </button>
      <div className="children">{children}</div>
    </div>
  );
};

export default PagesModal;
