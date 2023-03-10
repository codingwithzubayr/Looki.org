import footerStyle from "../Footer/footer.module.css";
import brand from "../../assets/brand-logos.png";

function Footer(props) {
  return (
    <div className={footerStyle["wrapper"]}>
      <div className={footerStyle["container"]}>
        <div className={footerStyle["footer"]}>
          <p className={footerStyle["text"]}>
            Copyright ©{" "}
            <span className={footerStyle["text_span"]}>HasThemes</span>. All
            Rights Reserved
          </p>
          <a href="/">
            <img src={brand} alt="brand" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
