import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CADetails from "./CA_details/CADetails";
import Recommendations from './Recomendation/Recomendation'
import './details.scss'

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:3000/data/${id}`);

      setData(data);
    };
    fetchData();
  }, [id]);

  return (
    <div id="details">
      <CADetails data={data} />
      <Recommendations />
    </div>
  );
};

export default Details;
