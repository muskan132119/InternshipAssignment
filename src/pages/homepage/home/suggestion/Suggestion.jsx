import React from "react";
import "./suggestion.scss";
import { useNavigate } from "react-router-dom";

const Suggestion = ({ item }) => {
  const navigate = useNavigate();
  const Redirect = (id)=>{
    return navigate(`/details/${id}`)
  }

  return (
    <div className="suggested-item" onClick={()=>Redirect(item.id)}>
      {item.name}
    </div>
  );
};

export default Suggestion;
