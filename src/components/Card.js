import React from "react";

function Card(props) {
  return (
    <div>
      <div>{props.input}</div>

      <div className="weather-data">
        <h3 className="city">{props.name}</h3>
        <p className="temp">{props.temp}°C</p>
        <span></span>
        <img className="icon" src={props.img} />
        <p className="weather">{props.disc}</p>
      </div>
    </div>
  );
}

export default Card;
