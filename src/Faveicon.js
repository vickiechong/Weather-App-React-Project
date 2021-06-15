import React from "react";

export default function Faveicon(props) {
  let iconurl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <img src={iconurl} alt="" className="fave1icon" id="fave1icon" width="" />
  );
}
