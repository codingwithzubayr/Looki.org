import React from "react";
import latestStyle from "../Latest/latest.module.css";
import latestBlog from "../../assets/latestBlog1.jpg";
import latestBlog2 from "../../assets/latestBlog2.jpg";
import latestBlog3 from "../../assets/latestBlog3.jpg";
import latestBlog4 from "../../assets/latestBlog4.jpg";
import shineOn from "../../assets/shineOn-logo.png";
import onlyBeauty from "../../assets/onlyBeauty-logo.png";
import getA from "../../assets/getA-logo.png";
import makeUp from "../../assets/makeUp-logo.png";
import cosmetics from "../../assets/cosmetics-logo.png";

function Latest(props) {
  return (
    <div className={latestStyle["wrapper"]}>
      <div className={latestStyle["container"]}>
        <div className={latestStyle["info_wrap"]}>
          <h2 className={latestStyle["title"]}>From Our Latest Blogs</h2>
          <hr className={latestStyle["line"]} />
          <p className={latestStyle["text"]}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className={latestStyle["list_wrap"]}>
          <ul className={latestStyle["list"]}>
            <li className={latestStyle["item"]}>
              <img
                className={latestStyle["img"]}
                src={latestBlog}
                alt="cosmetic"
              />
              <h2 className={latestStyle["subtitle"]}>Fashion</h2>
              <h3 className={latestStyle["info_title"]}>
                This is first Post For Blog
              </h3>
              <p className={latestStyle["info_text"]}>
                Posted by
                <span className={latestStyle["info_span"]}>HasTech</span>
                12TH Nov 2023
              </p>
            </li>
            <li className={latestStyle["item"]}>
              <img
                className={latestStyle["img"]}
                src={latestBlog2}
                alt="cosmetic"
              />
              <h2 className={latestStyle["subtitle"]}>Fashion</h2>
              <h3 className={latestStyle["info_title"]}>
                This is Secound Post For Blog
              </h3>
              <p className={latestStyle["info_text"]}>
                Posted by
                <span className={latestStyle["info_span"]}>HasTech</span>
                12TH Nov 2023
              </p>
            </li>
            <li className={latestStyle["item"]}>
              <img
                className={latestStyle["img"]}
                src={latestBlog3}
                alt="cosmetic"
              />
              <h2 className={latestStyle["subtitle"]}>Fashion</h2>
              <h3 className={latestStyle["info_title"]}>
                This is third Post For Blog
              </h3>
              <p className={latestStyle["info_text"]}>
                Posted by
                <span className={latestStyle["info_span"]}>HasTech</span>
                12TH Nov 2023
              </p>
            </li>
            <li className={latestStyle["item"]}>
              <img
                className={latestStyle["img"]}
                src={latestBlog4}
                alt="cosmetic"
              />
              <h2 className={latestStyle["subtitle"]}>Fashion</h2>
              <h3 className={latestStyle["info_title"]}>
                This is fourth Post For Blog
              </h3>
              <p className={latestStyle["info_text"]}>
                Posted by
                <span className={latestStyle["info_span"]}>HasTech</span>
                12TH Nov 2023
              </p>
            </li>
          </ul>
        </div>
        <div className={latestStyle["logo_wrap"]}>
          <ul className={latestStyle["logo_list"]}>
            <li className={latestStyle["logo_item"]}>
              <img src={onlyBeauty} alt="only Beauty logo" />
            </li>
            <li className={latestStyle["logo_item"]}>
              <img src={shineOn} alt="only Beauty logo" />
            </li>
            <li className={latestStyle["logo_item"]}>
              <img src={getA} alt="only Beauty logo" />
            </li>
            <li className={latestStyle["logo_item"]}>
              <img src={makeUp} alt="only Beauty logo" />
            </li>
            <li className={latestStyle["logo_item"]}>
              <img src={cosmetics} alt="only Beauty logo" />
            </li>
            <li className={latestStyle["logo_item"]}>
              <img src={shineOn} alt="only Beauty logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Latest;
