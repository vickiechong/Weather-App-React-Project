import React from "react";

import "./Favesection.css";
import Favecity from "./Favecity";

export default function Favesection(props) {
  return (
    <div className="Favesection">
      <h4 className="faveheader">
        <i className="fas fa-heart favehearticon"></i>{" "}
        <span>
          <strong>PLACES</strong>
        </span>
      </h4>
      <div className="container favecitysection">
        <div
          className="row pt-2 justify-content-center favecity"
          id="faveblock"
        >
          <Favecity city="Singapore" unit={props.unit} />
          <Favecity city="London" unit={props.unit} />
          <Favecity city="New York" unit={props.unit} />
        </div>
      </div>
    </div>
  );
}
