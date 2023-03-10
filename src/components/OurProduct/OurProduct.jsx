import ourStyle from "../OurProduct/ourProduct.module.css";
import product1 from "../../assets/ourProducts5.jpg";
import products3 from "../../assets/ourProduct6.jpg";
import product2 from "../../assets/ourProdcuts6.jpg";

function OurProduct(props) {
  return (
    <div className={ourStyle["wrapper"]}>
      <div className={ourStyle["container"]}>
        <ul className={ourStyle["list-item"]}>
          <li className={ourStyle["item_wrap"]}>
            <li className={ourStyle["item"]}>
              <img className={ourStyle["img"]} src={product1} alt="cosmetic" />
            </li>
            <li className={ourStyle["item"]}>
              <img className={ourStyle["img"]} src={product2} alt="cosmetic" />
            </li>
          </li>
          <li className={ourStyle["item_wrap"]}>
            <img className={ourStyle["img"]} src={products3} alt="cosmetic" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurProduct;
