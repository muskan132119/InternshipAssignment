import React from "react";
import "./about.scss";

const About = ({ about, name }) => {
  return (
    <div className="about">
      <div className="top">
        <div className="tittle">About {name}</div>
        <table className="info">
          <thead>
            <tr>
              <th>FROM</th>
              <th>PARTNER SINCE</th>
              <th>AVERAGE RESPONSE TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{about?.from}</td>
              <td>{about?.partnerSince}</td>
              <td>{about?.averageResponseTime}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="main">
        <h2>ABOUT</h2>
        <div>{about?.description}</div>
      </div>

      <div className="bottom">
        <div>SERVICES I OFFER</div>
        <div>WHY ME?</div>
        <ul>
          {about?.services.map((item, i) => {
            return <li>{item}</li>;
          })}
        </ul>
        <ul>
          {about?.benefits.map((item, i) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
