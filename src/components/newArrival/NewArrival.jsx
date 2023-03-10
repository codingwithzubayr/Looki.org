import productStyle from "../Product/Product.module.css";
import product1 from "../../assets/ourProducts1.jpg";
import cart from "../../assets/cart.svg";
import React, { useEffect, useState } from "react";
import Admin from "../Admin";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store";

function NewArrival() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://newdata-8480e-default-rtdb.firebaseio.com/newData.json"
        );
        const data = response.data;
        const newData = Object.keys(response.data).map((item) => {
          return {
            ...data[item],
            id: item,
          };
        });
        setProduct(newData);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className={productStyle["product"]}>
      <div className={productStyle["container"]}>
        <div className={productStyle["wrapper"]}>
          <div className={productStyle["content-wrap"]}>
            <h3 className={productStyle["title"]}>Our products</h3>
            <hr className={productStyle["line"]} />
            <p className={productStyle["text"]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, culpa?
            </p>
            <h2 className={productStyle["subtitle"]}>New products</h2>
          </div>
          <div className={productStyle["products_wrap"]}>
            <ul className={productStyle["products_list"]}>
              {product.map((item) => (
                <li key={item.id} className={productStyle["product_item"]}>
                  <img
                    className={productStyle["product_img"]}
                    src={product1}
                    alt="Make up beauty"
                  />
                  <div className={productStyle["product_content"]}>
                    <h2 className={productStyle["product_subtitle"]}>
                      {item.Title}
                    </h2>
                    <div className={productStyle["product_cost"]}>
                      <strong className={productStyle["$11.90"]}>
                        {item.cost}
                      </strong>
                      <button
                        onClick={() => dispatch(addToCart(item, item.id))}
                        className={productStyle["cart"]}
                      >
                        <img
                          className={productStyle["product_img-cart"]}
                          src={cart}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
