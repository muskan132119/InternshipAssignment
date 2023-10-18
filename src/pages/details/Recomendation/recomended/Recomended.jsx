import React from "react";
import "./recomended.scss";
import img from "../../../../assets/recommendation.png";

const Recomended = ({data}) => {
  return (
    <div className="recommended">
      <img src={img} alt="" />
      <div className="main">
        <div className="top">
          <div>{data.name}</div>
          <div>{data.price}</div>
        </div>
        <div className="middle">
          I will do business evaluation and corporate services
        </div>
        <div className="bottom">
            <div>&#9733; 4.8 </div>
            <div style={{color:"black",marginLeft:"5px",fontWeight:"500"}}>(89)</div>
        </div>
        <div className="btn">View services</div>
      </div>
    </div>
  );
};

export default Recomended;
