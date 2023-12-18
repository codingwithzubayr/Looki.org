import React, { useState } from "react";
import modalStyle from "../Modal/Modal.module.css";
import axios from "axios";
import close from "../../assets/close.svg";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Modal(props) {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [productList, setProductList] = useState([]);
  const oldCost = 0;

  const removeModal = (e) => {
    props.onsetShowModal(false);
  };

  const sentDataToServer = async (e) => {
    e.preventDefault();
    props.onsetShowModal(false);
    try {
      if (imageUpload == null) return;

      const imageRef = ref(storage, `images/${imageUpload.name}`);
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);

      const data = {
        title: title,
        cost: cost,
        imageUrl: url,
        oldCost: cost,
      };

      // Make a direct Axios POST request to save data
      const response = await axios.post(
        "https://lookirealtime-default-rtdb.firebaseio.com/data.json",
        data
      );

      // Handle success if needed
      console.log("Data saved successfully:", response.data);

      // Update the local product list
      setProductList([...productList, data]);
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={modalStyle["modal-input"]}
            type="text"
            name="title"
            placeholder="Title"
          />

          <input
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className={modalStyle["modal-input"]}
            type="number"
            name="Cost"
            placeholder="Cost: $"
          />
          <input
            className={modalStyle["input_file"]}
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
