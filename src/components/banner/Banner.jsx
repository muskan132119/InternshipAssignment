import React from "react";
import img1 from "../../assets/Picture.jpg";
import img2 from "../../assets/picture 2.png";
import img3 from "../../assets/picture@2x.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="left-container">
          <div className="text">
            <h1>
              Find <span>Partners</span> (CAs) <br /> available online
            </h1>
          </div>
          <div className="para">
            <p>
              CONNECT with us where your services listed and visible to a myriad <br />
              of bussiness seeking CA's for compliance support
            </p>
          </div>
          <div className="text">
            <div className="input-area">
              <input type="text" placeholder="Search here.." />
              <div className="search-btn">Search</div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
