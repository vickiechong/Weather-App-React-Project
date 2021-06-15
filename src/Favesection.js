import React from "react";

import "./Favesection.css";
import Favecity from "./Favecity";

export default function Favesection() {
  return (
    <div className="Favesection">
      <h4>
        <i className="fas fa-heart"></i>{" "}
        <span>
          <strong>PLACES</strong>
        </span>
      </h4>
      <div className="container favesection">
        <div
          className="row pt-3 justify-content-center favecity"
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
