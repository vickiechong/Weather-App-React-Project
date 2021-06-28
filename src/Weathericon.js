import React from "react";

export default function Weathericon(props) {
  let animatedicon = `/media/${props.icon}.svg`;

  return (
    <img
      className=" Weathericon todayicon"
      src={animatedicon}
      alt={props.description}
      width={props.width}
    />
  );
}
