import React from "react";
import "./CADetails.scss";
import Profile from "../../../components/profile/Profile";
import Book from "../../../components/book/Book";
import Review from "../../../components/review/Review";
import About from "../../../components/about/About";

const CADetails = ({ data }) => {
  const profile = {
    name: data.name,
    desc: data.intro,
    rating: data.rating,
    reviewCount: data.reviewCount,
  };

  return (
    <div className="CA-details">
      <div className="left">
        <Profile profile={profile} />
        <Book price={data.price} />
        <Review review={data.testimonial} />
      </div>
      <div className="right">
        <img src={data.image} alt="" />
        <About about={data.about} name={data.name}/>
      </div>
    </div>
  );
};

export default CADetails;
