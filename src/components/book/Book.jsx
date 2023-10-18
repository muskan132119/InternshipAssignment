import React from "react";
import "./book.scss";
import calender from "../../assets/calender.svg";

const Book = ({ price }) => {
  return (
    <div className="book">
      <div className="top flex">
        <div>Basic to complex tasks</div>
        <div>{price}</div>
      </div>
      <div className="middle flex">
        <img src={calender} alt="" style={{marginRight:"0.7rem"}} />
        <span>Delivers the job within 2 days</span>
      </div>
      <div className="bottom flex">
        <div className="btn">Request Proposal</div>
        <div className="btn">Chat with me</div>
      </div>
    </div>
  );
};

export default Book;
