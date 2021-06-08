import "./Favesection.css";

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
        ></div>
      </div>
    </div>
  );
}
