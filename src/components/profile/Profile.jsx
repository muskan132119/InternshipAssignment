import React from "react";
import "./profile.scss";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <div className="name">{profile.name}</div>
      <div className="desc">{profile.desc}</div>
      <div className="rating">
        <span style={{fontSize:"1.2rem"}}>&#9733; </span>
        {profile.rating} <span style={{color:"black"}}>({profile.reviewCount})</span>
      </div>
    </div>
  );
};

export default Profile;
