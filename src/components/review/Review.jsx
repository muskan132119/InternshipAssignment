import React from "react";
import nav from "../../assets/navbar.svg";
import "./review.scss";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="title">What people say?</div>
      <div className="main">{review?.text}</div>
      <div className="nav">
        <img src={nav} alt="" />
      </div>
    </div>
  );
};

export default Review;
