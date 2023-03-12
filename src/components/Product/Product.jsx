import productStyle from "../Product/Product.module.css";
import React, { useState } from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import { LanguageContext } from "../LanguageContext/Language";
import { useContext } from "react";
import Loading from "../Loading/Loading";

function Product(props) {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className={productStyle["product"]}>
      <div className={productStyle["container"]}>
        <div className={productStyle["wrapper"]}>
          <div className={productStyle["content-wrap"]}>
            <h3 className={productStyle["title"]}>
              {language === "en" && "Our Products"}
              {language === "uz" && "Bizning mahsulotlarimiz"}
            </h3>
            <hr className={productStyle["line"]} />
            <p className={productStyle["text"]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, culpa?
            </p>
            <h2 className={productStyle["subtitle"]}>
              {language === "en" && "New Products"}
              {language === "uz" && "Yangi mahsulotlar"}
            </h2>
          </div>
          <div className={productStyle["products_wrap"]}>
            <ul className={productStyle["product_list"]}>
              {<ProductSlider /> ? <ProductSlider /> : <Loading />}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
