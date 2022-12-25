import "./Card.css";
import { FaRegHeart, FaRegPaperPlane, FaEllipsisH } from "react-icons/fa";
import Header from "../Header/Header";
export default function Card(props) {

  return (
    <div>
      <Header />
      {props.data.map((data, index) => {
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(data.postImage.data.data))
        )
        return (
          <div className="container" key={index}>
            <div className="subContainer1">
              <div>
                <b>{data.name}</b>
                <p className="location">{data.location}</p>
              </div>
              <div className="dots">
                <FaEllipsisH />
              </div>
            </div>
            <div className="subContainer2">
              <img className="mainImg" src={`data:image/png;base64,${base64String}`} alt="no image" />
            </div>
            <div className="subContainer3">
              <div id="imgcontainer">
                <FaRegHeart id="likes" />
                <FaRegPaperPlane id="share" />
              </div>
              <div id="dateContainer">
                <p id="date">{data.date.split("T")[0]}</p>
              </div>
            </div>
            <div className="subContainer4">
              <p className="likes">{data.likes} likes</p>
              <b>{data.description}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
}
