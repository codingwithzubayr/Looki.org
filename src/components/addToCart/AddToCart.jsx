import addToCartStyle from "../addToCart/addToCart.module.css";
import Increase from "../../assets/incrase.svg";
import Decriase from "../../assets/decrease.svg";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, deleteCartItem } from "../../store";
import { Link } from "react-router-dom";
import product1 from "../../assets/productImage8.png";

export function AddToCart({ item }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleIncreaseCount = (itemId) => {
    dispatch(increaseCount(itemId));
    console.log(items);
  };

  const handleDelete = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };

  const handleDecreaseCount = (itemId) => {
    dispatch(decreaseCount(itemId));
  };

  return (
    <div className={addToCartStyle["cart_wrap"]}>
      <div className={addToCartStyle["wrap"]}>
        <div className={addToCartStyle["hero"]}>
          <div className={addToCartStyle["hero_wrap"]}>
            <h1 className={addToCartStyle["title"]}>Cart</h1>
            <hr className={addToCartStyle["line"]} />
            <div className={addToCartStyle["link_wrap"]}>
              <Link className={addToCartStyle["home"]} to="/">
                Home <span className={addToCartStyle["home_span"]}>></span>
              </Link>
              <Link className={addToCartStyle["cart"]} to="/AddToCart">
                Cart
              </Link>
            </div>
          </div>
        </div>
        <div className={addToCartStyle["container"]}>
          <div className={addToCartStyle["text-wrap"]}>
            <div className={addToCartStyle["add-btn-wrap"]}>
              <p className={addToCartStyle["text"]}>Your Cart Items</p>
              <button className={addToCartStyle["add_btn"]}>
                BUY CART ITEMS
              </button>
            </div>
            <hr className={addToCartStyle["line2"]} />
          </div>
          <div className={addToCartStyle["list_wrap"]}>
            <ul className={addToCartStyle["list"]}>
              {items.map((item) => (
                <li key={item.id} className={addToCartStyle["item"]}>
                  <div className={addToCartStyle["item-inner"]}>
                    <div className={addToCartStyle["img_warp"]}>
                      <img
                        className={addToCartStyle["img"]}
                        src={product1}
                        alt=""
                      />
                    </div>
                    <h2 className={addToCartStyle["subtitle"]}>{item.Title}</h2>
                    <div className={addToCartStyle["stock"]}>
                      <p className={addToCartStyle["stock_text"]}>In Stock</p>
                    </div>
                    <div className={addToCartStyle["countStyle"]}>
                      <div className={addToCartStyle["count_wrap"]}>
                        <p className={addToCartStyle["count"]}>
                          {item.counter ? item.counter : 1}
                        </p>
                      </div>
                      <div className={addToCartStyle["increase_wrap"]}>
                        <button
                          onClick={() => handleIncreaseCount(item.id)}
                          className={addToCartStyle["count-btn"]}
                        >
                          <img src={Increase} alt="" />
                        </button>
                        <button
                          onClick={() => handleDecreaseCount(item.id)}
                          className={addToCartStyle["count-btn"]}
                        >
                          <img src={Decriase} alt="" />
                        </button>
                      </div>
                    </div>

                    <p className={addToCartStyle["cost"]}>
                      ${Number(item.price ? item.price : item.cost)}
                    </p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className={addToCartStyle["btn"]}
                    >
                      Delete
                    </button>
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
