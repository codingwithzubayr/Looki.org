import React, { useState, useRef } from "react";
import modalStyle from "../Modal/Modal.module.css";
import axios from "axios";
import close from "../../assets/close.svg";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Modal(props) {
  const [imageUpload, setImageUpload] = useState(null);
  const Title = useRef();
  const cost = useRef();
  const [productList, setProductList] = useState([]);

  const removeModal = (e) => {
    props.onsetShowModal(false);
  };

  const sentDataToServer = async (e) => {
    e.preventDefault();
    props.onsetShowModal(false);
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snaphsot) => {
        getDownloadURL(snaphsot.ref).then((url) => {
          props.onsetImageList((prev) => [...prev, url]);
        });
      });
      const data = {
        Title: Title.current.value,
        cost: cost.current.value,
      };
      const response = await axios.post(
        "https://lookirealtime-default-rtdb.firebaseio.com/data.json",
        data
      );
      const newProduct = { ...data, imageUrl: imageRef.fullPath };
      setProductList([...productList, newProduct]);
    } catch (error) {
      console.error(error);
    }
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
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
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
