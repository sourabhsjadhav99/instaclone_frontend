import "./Header.css";
import { Router, Link } from "react-router-dom";
export default function Header() {
  return (
    <div id="HeaderContainer">
      <div>
        <img className="logo" src="images/logo.svg" />
        <span className="logo-text">Instaclone</span>
      </div>
      <Link to="/form">
        <img src="images/camera.png" alt="no image" className="camera" />
      </Link>
    </div>
  );
}
