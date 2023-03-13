import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "../Rating/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store";
import cart from "../../assets/cart.svg";
import "../ProductSlider/productSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import product1 from "../../assets/productImage8.png";

const ProductSlider = () => {
  const [newproduct, setNewProduct] = useState([]);
  const dispatch = useDispatch();

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-4 px-4 justify-content-center">
      <Slider {...settings}>
        {newproduct.map((item) => (
          <li className="product_item" key={item.id}>
            <div className="img_Slider_wrapper">
              <img
                className="product_img"
                src={item.imageLists ? item.imageLists : product1}
                alt="Make up beauty"
              />
            </div>
            <div className="product_content">
              <h2 className="product_subtitle">{item.Title}</h2>
              <div className="rating_wrap">
                <Rating />
              </div>
              <div className="product_cost">
                <strong className="cost">${item.cost}</strong>
                <button
                  onClick={() => dispatch(addToCart(item, item.id))}
                  className="cart"
                >
                  <img className="product_img-cart" src={cart} alt="" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
