import RealHeaderStyle from "../header/realHeader.module.css";
import siteLogo from "../../assets/looki-logo.svg";
import search from "../../assets/search.svg";
import goTo from "../../assets/goTo-icon.svg";
import wishList from "../../assets/wishlist-icon.svg";
import addToCard from "../../assets/addToCard-icon.svg";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageContext } from "../LanguageContext/Language";
import { Link } from "react-router-dom";
import CosmeticDropDown from "../../assets/cosmetic_dropdown.webp";
import RightModal from "../rightModal/RightModal";
import ModalMenu from "../ModalMenu/ModalMenu";

function RealHeader() {
  const [background, setBackground] = useState("tansparent");
  const [top, setTop] = useState(50);
  const [counter, setCounter] = useState(0);
  const { items, total } = useSelector((state) => state.cart);
  const { language, setLanguage } = useContext(LanguageContext);
  const [isHomePage, setIsHomePage] = useState(true);

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.pageYOffset > 40) {
      setTop(0);
      setBackground("lightgray");
    } else {
      setTop(50);
      setBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setCounter(items.length);
  }, [items]);

  const goToCartPage = () => {
    navigate("/AddToCart");
  };

  const [showModal, setShowModal] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveClick = () => {
    setIsRemoving(true);
    setTimeout(() => {
      setShowModal(false);
      setIsRemoving(false);
    }, 300);
  };

  const toggleModal = () => {
    if (!showModal) {
      setIsRemoving(false);
    }
    setShowModal(!showModal);
  };
  return (
    <div className={RealHeaderStyle["RealHeader"]}>
      <div className={RealHeaderStyle["container"]} style={{ background, top }}>
        <div className={RealHeaderStyle["wrapper"]}>
          <div>
            <img
              className={RealHeaderStyle["site_logo"]}
              src={siteLogo}
              alt="site logo"
            />
          </div>
          <ul className={RealHeaderStyle["list"]}>
            <li className={RealHeaderStyle["item"]}>
              <Link to={"/"} className={RealHeaderStyle["item-link"]}>
                {language === "en" && "HOME"}
                {language === "uz" && "UY"}
              </Link>
              <ul className={RealHeaderStyle["inner_list"]}>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    Home 1
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    Home 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className={RealHeaderStyle["item"]}>
              <Link to={"/"} className={RealHeaderStyle["item-link"]}>
                {language === "en" && "ShOP"}
                {language === "uz" && "DO'KON"}
              </Link>
              <ul className={RealHeaderStyle["inner_list_shop"]}>
                <li className={RealHeaderStyle["inner_list_item"]}>
                  <ul className={RealHeaderStyle["list_page"]}>
                    <li className={RealHeaderStyle["inner_page_item"]}>
                      <h2 className={RealHeaderStyle["inner_title"]}>
                        shop list
                      </h2>
                      <ul className={RealHeaderStyle["page_inner_list"]}>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 3 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 4 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 5 Sidebar
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 6 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 7 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 8 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 9 Column
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={RealHeaderStyle["inner_item-pages"]}>
                      <h2 className={RealHeaderStyle["inner_title"]}>
                        shop list
                      </h2>
                      <ul className={RealHeaderStyle["page_inner_list2"]}>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop List
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop List Left Sidebar
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className={RealHeaderStyle["page_img_wrap"]}>
                    <Link to={"/"}>
                      <img
                        className={RealHeaderStyle["page_inner_image"]}
                        src={CosmeticDropDown}
                        alt="different cosmetics"
                      />
                    </Link>
                  </div>
                </li>
                <li className={RealHeaderStyle["inner_list_item"]}>
                  <ul className={RealHeaderStyle["list_page"]}>
                    <li className={RealHeaderStyle["inner_page_item"]}>
                      <h2 className={RealHeaderStyle["inner_title"]}>
                        shop Single
                      </h2>
                      <ul className={RealHeaderStyle["page_inner_list"]}>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 3 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 4 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 5 Sidebar
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 6 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 7 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 8 Column
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid 9 Column
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className={RealHeaderStyle["inner_item-pages"]}>
                      <h2 className={RealHeaderStyle["inner_title"]}>
                        Another page
                      </h2>
                      <ul className={RealHeaderStyle["page_inner_list2"]}>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop List
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop List Left Sidebar
                          </Link>
                        </li>
                        <li className={RealHeaderStyle["page_inner_item"]}>
                          <Link
                            className={RealHeaderStyle["page_inner_link"]}
                            to={"/"}
                          >
                            Shop Grid Right Sidebar
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <div className={RealHeaderStyle["page_img_wrap"]}>
                    <Link to={"/"}>
                      <img
                        className={RealHeaderStyle["page_inner_image"]}
                        src={CosmeticDropDown}
                        alt="different cosmetics"
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className={RealHeaderStyle["item"]}>
              <Link to={"/"} className={RealHeaderStyle["item-link"]}>
                {language === "en" && "PAGES"}
                {language === "uz" && "SAHIFALAR"}
              </Link>
              <ul className={RealHeaderStyle["inner_list"]}>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    About Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Cart Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Checkout Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Cart Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Compare Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Login & Register Page
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link
                    className={RealHeaderStyle["inner_link"]}
                    to={"/addToCart"}
                  >
                    Wishlist Page
                  </Link>
                </li>
              </ul>
            </li>
            <li className={RealHeaderStyle["item"]}>
              <Link
                to={"/"}
                className={RealHeaderStyle["item-link"]}
                href="/index.html"
              >
                {language === "en" && "BLOG"}
                {language === "uz" && "BLOG"}
              </Link>
              <ul className={RealHeaderStyle["inner_list"]}>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    Blog Grid
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    Blog List
                  </Link>
                </li>
                <li className={RealHeaderStyle["inner_item"]}>
                  <Link className={RealHeaderStyle["inner_link"]} to={"/"}>
                    Blog List
                  </Link>
                </li>
              </ul>
            </li>
            <li className={RealHeaderStyle["item"]}>
              <Link
                to={"/"}
                className={RealHeaderStyle["last-child"]}
                href="/index.html"
              >
                {language === "en" && "CONTACT US"}
                {language === "uz" && "BIZ BILAN BOG'LANISH"}
              </Link>
            </li>
          </ul>
          <ul className={RealHeaderStyle["addToCard-list"]}>
            <li className={RealHeaderStyle["addToCard-item"]}>
              <button className={RealHeaderStyle["addToCard-btn"]}>
                <img
                  className={RealHeaderStyle["addToCard-icon"]}
                  src={search}
                  alt=""
                />
              </button>
            </li>
            <li className={RealHeaderStyle["addToCard-item"]}>
              <button className={RealHeaderStyle["addToCard-btn"]}>
                <img
                  className={RealHeaderStyle["addToCard-icon"]}
                  src={goTo}
                  alt=""
                />
                <div className={RealHeaderStyle["addToCard-count"]}>
                  <p className={RealHeaderStyle["addToCart-counter"]}>0</p>
                </div>
              </button>
            </li>
            <li className={RealHeaderStyle["addToCard-item"]}>
              <button className={RealHeaderStyle["addToCard-btn"]}>
                <img
                  className={RealHeaderStyle["addToCard-icon"]}
                  src={wishList}
                  alt=""
                />
                <div className={RealHeaderStyle["addToWishList-count"]}>
                  <p className={RealHeaderStyle["addToCart-counter"]}>0</p>
                </div>
              </button>
            </li>
            <li className={RealHeaderStyle["addToCard-item"]}>
              <button
                onClick={goToCartPage}
                className={RealHeaderStyle["addToCard-btn"]}
              >
                <img
                  className={RealHeaderStyle["addToCard-icon"]}
                  src={addToCard}
                  alt=""
                />
                <div className={RealHeaderStyle["addToCard-count"]}>
                  <p className={RealHeaderStyle["addToCart-counter"]}>
                    {counter}
                  </p>
                </div>
              </button>
            </li>
            <li className={RealHeaderStyle["addToCard-item"]}>
              <Link className={RealHeaderStyle["admin-btn"]} to={"/admin"}>
                Admin
              </Link>
            </li>
            <li className={RealHeaderStyle["menu_burger_item"]}>
              <div className={RealHeaderStyle["button_app"]}>
                <button
                  className={`${RealHeaderStyle["burger-btn"]} ${
                    isRemoving ? RealHeaderStyle["removing"] : ""
                  }`}
                  onClick={toggleModal}
                >
                  {showModal ? <span>&times;</span> : <span>&#9776;</span>}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <RightModal isOpen={showModal}>
        <ModalMenu onhandleClickRemove={handleRemoveClick} />
      </RightModal>
    </div>
  );
}
export default RealHeader;
