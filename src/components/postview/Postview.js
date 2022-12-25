import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Postview.css";
import axios from 'axios';
export default function Postview() {
  const [data, setData] = useState([]);   
  const fetchData = async () => {
    let response = await axios.get(`/posts`)
    console.log(response.data.data);
    setData(response.data.data)
  };
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div id="mainContainer">
      <Card data={data} />
    </div>
  );
}

