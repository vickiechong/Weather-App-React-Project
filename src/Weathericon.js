import React from "react";

export default function Weathericon(props) {
  let animatedicon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <img
      className=" Weathericon"
      src={animatedicon}
      alt={props.description}
      id="todayicon"
      className="todayicon"
      width={props.width}
    />
  );
}
