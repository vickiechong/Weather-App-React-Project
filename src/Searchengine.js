export default function Searchengine() {
  return (
    <div className="searchengine col-6">
      <form className="d-flex" id="searchcountrybar">
        <input
          type="text"
          className="form-control"
          id="searchcountryinput"
          placeholder="Country or City"
          required
          autoFocus
          autoComplete="off"
        />
        <button className="btn btn-primary ml-3" id="searchcountrybutton">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
