import React from "react";

import "./Favesection.css";
import Favecity from "./Favecity";

export default function Favesection() {
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
          <Favecity city="Singapore" />
          <Favecity city="London" />
          <Favecity city="New York" />
        </div>
      </div>
    </div>
  );
}
