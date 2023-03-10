import React, { useState, useRef, useEffect } from "react";
import modalStyle from "../Modal/Modal.module.css";
import axios from "axios";
import close from "../../assets/close.svg";
import Rating from "../Rating/Rating";
function Modal(props, { rating, onRatingChange }) {
  const [newProduct, setNewProduct] = useState([]);
  const Title = useRef();
  const cost = useRef();
  const rate = useRef(null);

  const removeModal = (e) => {
    props.onsetShowModal(false);
  };

  const sentDataToServer = async (e) => {
    props.onsetShowModal(false);
    try {
      const data = {
        Title: Title.current.value,
        cost: cost.current.value,
      };
      const response = await axios.post(
        "https://lookirealtime-default-rtdb.firebaseio.com/data.json",
        data
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    window.location.reload(false);
  };

  return (
    <div className={modalStyle["modal-wrapper"]}>
      <div className={modalStyle["modal-container"]}>
        <button
          className={modalStyle["modal-btn-remove"]}
          onClick={removeModal}
        >
          <img className={modalStyle["modal-remove"]} src={close} alt="" />
        </button>
        <form onSubmit={sentDataToServer} className={modalStyle["modal-form"]}>
          <input
            ref={Title}
            className={modalStyle["modal-input"]}
            type="text"
            name="Title"
            placeholder="Title"
          />

          <input
            ref={cost}
            className={modalStyle["modal-input"]}
            type="number"
            name="Cost"
            placeholder="Cost: $"
          />

          <button
            onSubmit={sentDataToServer}
            className={modalStyle["edit-btn"]}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
