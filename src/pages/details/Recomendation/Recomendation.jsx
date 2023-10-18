import React from "react";
import Recomended from "./recomended/Recomended";
import "./recomendation.scss";

const Recomendation = () => {
  const arr = [
    {
      name: "Michael Jackson",
      price: "₹4,370",
    },
    {
      name: "Stevie Wonder",
      price: "₹4,263",
    },
    {
      name: "Ray Charles",
      price: "₹2,586",
    },
  ];
  return (
    <div className="recommendation">
      <h1>Recommended for you</h1>
      <div className="container">
        {arr.map((item, i) => {
          return <Recomended data={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Recomendation;
