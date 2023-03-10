import React from "react";
import serviceStyle from "../Servicess/Service.module.css";
import lookiLogo from "../../assets/looki-logo.svg";
import twitter from "../../assets/twitter-logo.svg";
import youTube from "../../assets/youtube-logo.svg";
import facebook from "../../assets/facebook-logo.svg";
import instagram from "../../assets/instahram-logo.svg";

function Service(props) {
  return (
    <div className={serviceStyle["wrapper"]}>
      <div className={serviceStyle["container"]}>
        <div className={serviceStyle["wrap_info"]}>
          <div className={serviceStyle["new_wrap"]}>
            <ul className={serviceStyle["new_list"]}>
              <li className={serviceStyle["info_wrap"]}>
                <a className={serviceStyle["info_link"]} href="/">
                  <img
                    className={serviceStyle["img"]}
                    src={lookiLogo}
                    alt="looki logo"
                  />
                </a>
                <p className={serviceStyle["text"]}>
                  We are a team of professional designers and developers that
                  create high quality wordpress plugins, Html, React Template.
                </p>
                <ul className={serviceStyle["list"]}>
                  <li className={serviceStyle["item"]}>
                    <a className={serviceStyle["link"]} href="/">
                      <img src={instagram} alt="" />
                    </a>
                  </li>
                  <li className={serviceStyle["item"]}>
                    <a className={serviceStyle["link"]} href="/">
                      <img src={youTube} alt="" />
                    </a>
                  </li>
                  <li className={serviceStyle["item"]}>
                    <a className={serviceStyle["link"]} href="/">
                      <img src={twitter} alt="" />
                    </a>
                  </li>
                  <li className={serviceStyle["item"]}>
                    <a className={serviceStyle["link"]} href="/">
                      <img src={facebook} alt="" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className={serviceStyle["new_item"]}>
                <h2 className={serviceStyle["new_title"]}>Information</h2>
                <ul className={serviceStyle["inner_list"]}>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      About us
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      payment
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      Contact us
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      Stores
                    </a>
                  </li>
                </ul>
              </li>
              <li className={serviceStyle["new_item"]}>
                <h2 className={serviceStyle["new_title"]}>social Links</h2>
                <ul className={serviceStyle["inner_list"]}>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      New products
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      Best sales
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      Login
                    </a>
                  </li>
                  <li className={serviceStyle["inner_item"]}>
                    <a className={serviceStyle["link_inner"]} href="/">
                      My account
                    </a>
                  </li>
                </ul>
              </li>
              <li className={serviceStyle["new_items"]}>
                <h2 className={serviceStyle["new_title"]}>Newsletter</h2>
                <p className={serviceStyle["link_inner"]}>
                  Subcribe to the TheFace mailing list to receive update on mnew
                  arrivals, special offers and other discount information.
                </p>
                <form className={serviceStyle["forms"]}>
                  <div className={serviceStyle["input_wrap"]}>
                    <input
                      placeholder="Your email address"
                      className={serviceStyle["inputs"]}
                      type="text"
                    />
                    <button className={serviceStyle["buttons"]}>Sign up</button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
