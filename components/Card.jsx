import React from "react";

export default function Card(props) {
  return (
    <div className="full--div">
      <div className="img--div">
        <img src={props.items.mainImg} className="main--img"></img>
      </div>
      <div className="text--div">
        <div className="text--1">
          <img
            src={props.items.stats.locationImg}
            className="location--img"
          ></img>
          <h3 className="location">{props.items.stats.location}</h3>
          <a href={props.items.stats.link} target="blank" className="link">
            View on Google Maps
          </a>
        </div>
        <div className="text--2">
          <h1 className="title--text">{props.items.titleText}</h1>
        </div>
        <div className="text--3">
          <h5 className="date">{props.items.date} </h5>
        </div>
        <div className="text--4">
          <p className="para">{props.items.para}</p>
        </div>
      </div>
    </div>
  );
}
