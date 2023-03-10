import serviceStyle from "../Deliver/Service.module.css";
import freeShiping from "../../assets/free-shipin.svg";
import freeReturn from "../../assets/free-returns-icon.svg";
import Support from "../../assets/support-icon.svg";
import callCentre from "../../assets/call-centre-icon.svg";
import eco from "../../assets/1.jpg.png";
import lipstik from "../../assets/lipistik.jpg";
import lail from "../../assets/lail.jpg";
import { LanguageContext } from "../LanguageContext/Language";
import React, { useContext } from "react";

function Service(props) {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className={serviceStyle["wrapper"]}>
      <div className={serviceStyle["container"]}>
        <ul className={serviceStyle["list"]}>
          <li className={serviceStyle["item"]}>
            <img
              className={serviceStyle["item-img_list"]}
              src={freeShiping}
              alt="dilver"
            />
            <div className={serviceStyle["item_content_wrap"]}>
              <h3 className={serviceStyle["item-title"]}>
                {language === "en" && "Free Shipping"}
                {language === "uz" && "Bepul Yetkazib Berish"}
              </h3>
              <p className={serviceStyle["item_text"]}>
                {language === "en" && "On all orders over $75.00"}
                {language === "uz" &&
                  "$75.00 dan ortiq barcha buyurtmalar bo'yicha"}
              </p>
            </div>
          </li>
          <li className={serviceStyle["item"]}>
            <img
              className={serviceStyle["item-img_list"]}
              src={freeReturn}
              alt="dilver"
            />
            <div className={serviceStyle["item_content_wrap"]}>
              <h3 className={serviceStyle["item-title"]}>
                {language === "en" && "Free Returns"}
                {language === "uz" && "Bepul qaytarish"}
              </h3>
              <p className={serviceStyle["item_text"]}>
                Returns are free within 9 days
                {language === "en" && "Returns are free within 9 days"}
                {language === "uz" && "9 kun ichida qaytarib berish bepul"}
              </p>
            </div>
          </li>
          <li className={serviceStyle["item"]}>
            <img
              className={serviceStyle["item-img_list"]}
              src={callCentre}
              alt="dilver"
            />
            <div className={serviceStyle["item_content_wrap"]}>
              <h3 className={serviceStyle["item-title"]}>
                {language === "en" && "100% Payment Secure"}
                {language === "uz" && "100% toʻlov xavfsizligi"}
              </h3>
              <p className={serviceStyle["item_text"]}>
                {language === "en" && "Your payment are safe with us."}
                {language === "uz" && "Sizning to'lovingiz biz bilan xavfsiz."}
              </p>
            </div>
          </li>
          <li className={serviceStyle["item"]}>
            <img
              className={serviceStyle["item-img_list"]}
              src={Support}
              alt="dilvering "
            />
            <div className={serviceStyle["item_content_wrap"]}>
              <h3 className={serviceStyle["item-title"]}>
                {language === "en" && "Support 24/7"}
                {language === "uz" && "24/7 qo'llab-quvvatlash"}
              </h3>
              <p className={serviceStyle["item_text"]}>
                {language === "en" && "Contact us 24 hours a day"}
                {language === "uz" && "Biz bilan kuniga 24 soat bog'laning"}
              </p>
            </div>
          </li>
        </ul>
        <ul className={serviceStyle["list-img"]}>
          <li className={serviceStyle["item_img"]}>
            <img className={serviceStyle["img"]} src={eco} alt="eco" />
          </li>
          <li className={serviceStyle["item_img_wrap"]}>
            <ul className={serviceStyle["list_inner_item"]}>
              <li className={serviceStyle["inner_item_img"]}>
                <img
                  className={serviceStyle["img"]}
                  src={lipstik}
                  alt="lipstik"
                />
              </li>
              <li className={serviceStyle["inner_item_img"]}>
                <img
                  className={serviceStyle["img"]}
                  src={lail}
                  alt="lail polish"
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Service;
