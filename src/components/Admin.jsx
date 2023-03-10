import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { useNavigate } from "react-router-dom";
import adminStyle from "./Admin.module.css";
import Modal from "./Modal/Modal";
import axios from "axios";
import Loading from "./Loading/Loading";
import OurProduct from "../assets/ourProducts1.jpg";
import Servicess from "../components/Servicess/Services";
import Footer from "../components/Footer/Footer";
function Admin() {
  const [newproduct, setNewProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [sendData, setSendData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      navigate("/checkLogin");
    } else {
      navigate("/admin");
    }
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://lookirealtime-default-rtdb.firebaseio.com/data.json"
        );
        const data = response.data;
        const newData = Object.keys(response.data).map((item) => {
          return {
            ...data[item],
            id: item,
          };
        });
        setNewProduct(newData);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  const deleteDataFromFirebase = (id) => {
    axios
      .delete(
        `https://lookirealtime-default-rtdb.firebaseio.com/data/${id}.json`
      )
      .then((response) => {
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const openModal = (e) => {
    setShowModal(true);
  };

  return (
    <div>
      <Header />
      <div className={adminStyle["wrap"]}>
        <div className={adminStyle["hero"]}>
          <h1 className={adminStyle["title"]}>Admin</h1>
          <hr className={adminStyle["line"]} />
          <div className={adminStyle["link_wrap"]}>
            <a className={adminStyle["home"]} href="/">
              Home
            </a>
            <a className={adminStyle["home"]} href="/admin">
              Admin
            </a>
          </div>
        </div>
        <div className={adminStyle["container"]}>
          <div className={adminStyle["text-wrap"]}>
            <div className={adminStyle["add-btn-wrap"]}>
              <p className={adminStyle["text"]}>Your New Items</p>
              <button onClick={openModal} className={adminStyle["add_btn"]}>
                ADD NEW ITEM
              </button>
            </div>
            <hr className={adminStyle["line2"]} />
          </div>
          <div className={adminStyle["list_wrap"]}>
            <ul className={adminStyle["list"]}>
              {newproduct.length === 0 && <Loading />}
              {newproduct.map((item) => (
                <li key={item.id} className={adminStyle["item"]}>
                  <div className={adminStyle["item-inner"]}>
                    <div className={adminStyle["img_warp"]}>
                      <img
                        className={adminStyle["img"]}
                        src={OurProduct}
                        alt=""
                      />
                    </div>

                    <h2 className={adminStyle["subtitle"]}>{item.Title}</h2>
                    <p className={adminStyle["cost"]}>${item.cost}</p>
                    <button
                      onClick={() => deleteDataFromFirebase(item.id)}
                      className={adminStyle["btn"]}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {showModal && <Modal onsetShowModal={setShowModal} />}
      </div>
      <Servicess />
      <Footer />
    </div>
  );
}
export default Admin;
