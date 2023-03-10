import headerMediaStyle from "../header/headerMedia.module.css";
import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../LanguageContext/Language";
import menu from "../../assets/listMenu.svg";

function HeaderMedia() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
  };
  return (
    <div className={headerMediaStyle["headerMedia"]}>
      <div className={headerMediaStyle["container"]}>
        <div className={headerMediaStyle["wrapper"]}>
          <ul className={headerMediaStyle["networks_list"]}>
            <li className={headerMediaStyle["networks_item"]}>
              <a href="https://www.facebook.com/">
                <svg
                  className={headerMediaStyle["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li className={headerMediaStyle["networks_item"]}>
              <a href="https://www.twitter.com/">
                <svg
                  className={headerMediaStyle["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li className={headerMediaStyle["networks_item"]}>
              <a href="https://www.youtube.com/">
                <svg
                  className={headerMediaStyle["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li className={headerMediaStyle["networks_item"]}>
              <a href="https://www.instagram.com/">
                <svg
                  className={headerMediaStyle["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li
              className={headerMediaStyle[("netwroks-item", "network_phone")]}
            >
              <a
                className={headerMediaStyle["network-phone"]}
                type="tel"
                href="(+123)4567890"
              >
                <svg
                  className={headerMediaStyle["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M451,374c-15.88-16-54.34-39.35-73-48.76C353.7,313,351.7,312,332.6,326.19c-12.74,9.47-21.21,17.93-36.12,14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48,5.41-23.23,14.79-36c13.22-18,12.22-21,.92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9,44,119.9,47,108.83,51.6A160.15,160.15,0,0,0,83,65.37C67,76,58.12,84.83,51.91,98.1s-9,44.38,23.07,102.64,54.57,88.05,101.14,134.49S258.5,406.64,310.85,436c64.76,36.27,89.6,29.2,102.91,23s22.18-15,32.83-31a159.09,159.09,0,0,0,13.8-25.8C465,391.17,468,391.17,451,374Z"
                    fill="white"
                  ></path>
                </svg>
                (+123)4567890
              </a>
            </li>
          </ul>
          <ul className={headerMediaStyle["service_list"]}>
            <li className={headerMediaStyle["service_item"]}>
              <select
                className={headerMediaStyle["service-select"]}
                name=""
                id=""
              >
                <option className={headerMediaStyle["service-option"]} value="">
                  {language === "en" && "Setting"}
                  {language === "uz" && "Sozlama"}
                </option>
                <option className={headerMediaStyle["service-option"]} value="">
                  {language === "en" && "My Account"}
                  {language === "uz" && "Mening Hisobim"}
                </option>
                <option className={headerMediaStyle["service-option"]} value="">
                  {language === "en" && "Checkout"}
                  {language === "uz" && "Ro'yxatdan O'chirilish"}
                </option>
                <option className={headerMediaStyle["service-option"]} value="">
                  {language === "en" && "Sign out"}
                  {language === "uz" && "Tizimdan chiqish"}
                </option>
              </select>
            </li>
            <li className={headerMediaStyle["service_item"]}>
              <select
                className={headerMediaStyle["service-select"]}
                name=""
                id=""
              >
                <option className={headerMediaStyle["service-option"]} value="">
                  USD$
                </option>
                <option className={headerMediaStyle["service-option"]} value="">
                  UZS
                </option>
              </select>
            </li>
            <li className="service_item">
              <select
                value={language}
                onChange={handleLanguageChange}
                className={headerMediaStyle["service-select"]}
                name=""
                id=""
              >
                <option
                  value="en"
                  data
                  className={headerMediaStyle["service-option"]}
                >
                  English
                </option>
                <option
                  value="uz"
                  className={headerMediaStyle["service-option"]}
                >
                  Uzbek
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderMedia;
