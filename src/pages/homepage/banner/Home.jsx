import React, { useState } from "react";
import img1 from "../../../assets/Picture.jpg";
import img2 from "../../../assets/picture 2.png";
import img3 from "../../../assets/picture@2x.png";
import "./Banner.scss";
import Suggestion from "./suggestion/Suggestion";

const Banner = () => {
  const [suggestion, setSuggestion] = useState();

  return (
    <div className="banner">
      <div className="left-container">
        <div className="top">
          <h1>
            Find <span>Partners</span> (CAs) <br /> available online
          </h1>
        </div>
        <div className="middle">
          <p>
            <b>CONNECT</b> with us where your services listed and visible to a
            myriad {/* <br /> */}
            of bussiness seeking CA's for compliance support
          </p>
        </div>
        <div className="bottom">
          <div className="searchBox">
            <input type="text" placeholder="Search here.." />
            <div className="search-btn">Search</div>
          </div>
          <div className="suggestion" style={{display: !suggestion?.length && "none"}}>
            {suggestion?.map((item, i) => {
              return <Suggestion value={item} key={i} />;
            })}
          </div>
        </div>
      </div>

      <div className="right-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
    </div>
  );
};

export default Banner;
