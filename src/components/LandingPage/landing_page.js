import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export default function Landingpage() {
  return (
    <div className="LandingPage">
      <div className="Img-container">
        <img src="images/landingPageImage.png" alt="no photo" />
      </div>

      <div className="Title-box">
        <div className="title"><h2>10x Team04</h2></div>
        <Link to="/postview"><div className="button">Enter</div></Link>
      </div>
    </div>
  );
}
