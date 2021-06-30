import React from "react";

import "./Favesection.css";
import Favecity from "./Favecity";

export default function Favesection(props) {
  return (
    <div className="Favesection">
      <div className="faveheader">
        <i className="fas fa-heart favehearticon"></i> <span>PLACES</span>
      </div>
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
