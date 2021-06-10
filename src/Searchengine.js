import React from "react";

export default function Searchengine() {
  return (
    <div className="searchengine col-6">
      <form
        onSubmit={searchcitysubmit}
        className="d-flex"
        id="searchcountrybar"
      >
        <input
          type="text"
          className="form-control"
          id="searchcountryinput"
          placeholder="Country or City"
          required
          autoFocus="on"
          autoComplete="off"
          onChange={searchcityinputchange}
        />
        <button className="btn btn-primary ms-3" id="searchcountrybutton">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
