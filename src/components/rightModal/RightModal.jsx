import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import rightModalStyle from "../rightModal/rightModal.module.css";

const RightModal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  return (
    <div
      className={`${rightModalStyle["modal"]} ${
        isOpen ? rightModalStyle["open"] : ""
      }`}
    >
      <div className={rightModalStyle["modal-content"]}>{children}</div>
    </div>
  );
};

export default RightModal;
