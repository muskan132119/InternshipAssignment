import React from "react";
import "./join.scss";
import Card from "../../../components/card/Card";
import wave from "../../../assets/wave.svg";

const Join = () => {
  const arr = [
    {
      title: "Commencement of business ",
      desc: "Invested shareholders must confirm payment and office address ",
      due: "Within 180 days",
      penalty: [
        {
          amount: "50,000",
          para: "for the company",
        },
        {
          amount: "1,000",
          para: "/day for directors",
        },
      ],
    },
    {
      title: "Auditor Appointment",
      desc: "Company informs new auditor and submits ADT.1 form to ROC.",
      due: "Within 30 days",
      penalty: [
        {
          amount: "300",
          para: "per month ",
        },
      ],
    },
    {
      title: "DIN eKYC",
      desc: "Directors share personal information for identification & verification ",
      due: "Every year",
      penalty: [
        {
          amount: "5000",
          para: "one time",
        },
      ],
    },
    {
      title: "DPT-3",
      desc: "Companies report money taken from people to ROC; auditors confirm details.",
      due: "Within 30 days ",
      penalty: [
        {
          amount: "300",
          para: "per month",
        },
      ],
    },
    {
      title: "MCA Form AOC-4",
      desc: "It's like an official report card for a company's documents",
      due: "On or Before 30th November ",
      penalty: [
        {
          amount: "200",
          para: "per day (No upper limit)*",
        },
      ],
    },
    {
      title: "MCA Form MGT-7",
      desc: "Companies must annually report activities and finances to the registrar.",
      due: "Due dateOn or Before 31st December",
      penalty: [
        {
          amount: "200",
          para: "per day (No upper limit)*",
        },
      ],
    },
  ];
  return (
    <div className="join-section">
      <div className="top">
        <div>
          Want to <span>Join</span> Us?
        </div>
        <div>
          To remain with us , it is essential that you diligently follow the
          steps provided
        </div>
      </div>
      <div className="bottom">
        <div className="main">
          {arr.map((item, i) => {
            return <Card data={item} index={i + 1} key={i} />;
          })}
        </div>
        <div className="para">
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200
          every day until you file the form . There is no maximum penalty
          amount. So, if you don't file the form for a year, you will owe
          ₹73,000 per form
        </div>
      </div>
      <div className="bg-img">
        <img src={wave} alt="" />
      </div>
    </div>
  );
};

export default Join;
