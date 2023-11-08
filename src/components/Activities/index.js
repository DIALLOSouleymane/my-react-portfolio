import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import Slider from "./Slider";
import slides from './album.json';


const Activities = () => {
  return (
    <div className="slide-container">
      <Slider slides={slides}/>

      <Loader type="pacman" />
    </div>
    
  );
};

export default Activities;