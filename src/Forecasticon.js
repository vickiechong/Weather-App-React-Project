import React from "react";

export default function Forecasticon(props) {
  let iconurl = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;

  return (
    <div className="col icon">
      <img src={iconurl} alt="" className="forecasticon" width="" />
    </div>
  );
}
