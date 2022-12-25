import React from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import Header from '../Header/Header';
import { useState } from "react";
import axios from 'axios';


const Form = () => {
  const [data, setData] = useState({
    postImage: "",
    name: "",
    location: "",
    description: "",
  });
  let navigate = useNavigate()
  let formData = new FormData()
  formData.append("postImage", data.postImage)
  formData.append("name", data.name)
  formData.append("location", data.location)
  formData.append("description", data.description)

  let config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }

  let postData = () => {
    axios.post('/posts', formData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  let submitHandler = (e) => {
    e.preventDefault()
    if (data.name, data.description, data.location) {
      postData()
      navigate("/postview")
    } else {
      alert("All fields required")
    }



  }
  return (
    <div>
      <Header />
      <form className="form-container" onSubmit={submitHandler}>
        <div>
          <input type="file" id="formFile"
            name="postImage"
            onChange={(e) => {
              setData({...data, postImage:e.target.files[0]});
            }} />
        </div>
            {/* ------ */}
        <div>     
          <input type="text"
             id="author-box" placeholder="Name" onChange={(e) => {
              setData({...data, name:e.target.value})
            }} />
          <input type="text"
           id="location-box" placeholder="Location" onChange={(e) => {
              setData({...data, location:e.target.value})
            }} />
        </div>
         {/* ------ */}
        <div>
          <input type="text" id="description-box" placeholder="Description" onChange={(e) => {
            setData({...data, description:e.target.value})
          }} />
        </div>
         {/* ------ */}
        <button id="button" type="submit" >Post</button>
      </form>
    </div>
  );
};

export default Form;
