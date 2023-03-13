import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { useNavigate, Link } from "react-router-dom";
import adminStyle from "./Admin.module.css";
import Modal from "./Modal/Modal";
import { useSpring, animated } from "react-spring";
import axios from "axios";
import Loading from "./Loading/Loading";
import Servicess from "../components/Servicess/Services";
import Footer from "../components/Footer/Footer";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

function Admin() {
  const [newproduct, setNewProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imageList, setImageList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token");
    if (!isLoggedIn) {
      navigate("/checkLogin");
    } else {
      navigate("/admin");
    }
  }, [navigate]);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: showModal ? 1 : 0 },
  });

  const imageListRef = ref(storage, "images/");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const imageUrls = await Promise.all(
          (
            await listAll(imageListRef)
          ).items.map((item) => getDownloadURL(item))
        );
        const response = await axios.get(
          "https://lookirealtime-default-rtdb.firebaseio.com/data.json"
        );
        const data = response.data;
        const newData = Object.keys(response.data).map((item, index) => {
          return {
            ...data[item],
            id: item,
            imageLists: imageUrls[index],
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
    const productToDelete = newproduct.find((item) => item.id === id);
    const imageToDelete = productToDelete.imageLists;

    axios
      .delete(
        `https://lookirealtime-default-rtdb.firebaseio.com/data/${id}.json`
      )
      .then((response) => {
        const filteredProducts = newproduct.filter((item) => item.id !== id);
        setNewProduct(filteredProducts);
        const filteredImages = imageList.filter((url) => url !== imageToDelete);
        setImageList(filteredImages);
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
            <Link className={adminStyle["home"]} to="/">
              Home <span className={adminStyle["home_span"]}>></span>
            </Link>
            <Link className={adminStyle["admin"]} href="/admin">
              Admin
            </Link>
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
                        src={item.imageLists}
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
        {showModal && (
          <animated.div
            style={{
              ...fade,
              background: "white",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
            }}
          >
            <Modal
              onsetShowModal={setShowModal}
              onsetImageList={setImageList}
            />
          </animated.div>
        )}
      </div>
      <Servicess />
      <Footer />
    </div>
  );
}
export default Admin;
