import React from "react";
import "./card.scss";

const Card = ({ data, index }) => {
  return (
    <div className="card">
      <div className="top">
        <div>{data.title}</div>
        <div>{data.desc}</div>
      </div>
      <div className="bottom">
        <div>
          <div style={{ color: "#0076CE" }}>Due date</div>
          <div>{data.due}</div>
        </div>
        <div>
          <div style={{ color: "#FF6666" }}>Penalty fees</div>
          {data.penalty.map((item, i) => {
            return (
              <div key={i}>
                <b>₹{item.amount}</b> {item.para}
              </div>
            );
          })}
        </div>
      </div>
      <div className="number">
        {index}
        <span>
          {index === 1 ? "st" : index === 2 ? "nd" : index === 3 ? "rd" : "st"}
        </span>
      </div>
    </div>
  );
};

export default Card;
