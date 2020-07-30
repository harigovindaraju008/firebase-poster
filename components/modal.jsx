import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <FontAwesomeIcon
      icon={faWindowClose}
      onClick={closeModal}
      size="lg"
      style={{
        color: "red",
        padding: "10px",
        cursor: "pointer",
        backgroundColor: "transprant",
        border: 0,
        position: "absolute",
        top: "0.3rem",
        right: "0.5rem",
      }}
    />
  );

  return (
    <div className="overlay">
      <div className="contents">
        {closeicon()}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
