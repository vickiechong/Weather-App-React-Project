import "./Searchtop.css";

import Favebutton from "./Favebutton";
import Searchengine from "./Searchengine";
import Locationbutton from "./Locationbutton";

export default function Searchtop() {
  return (
    <div className="Searchtoprow">
      <div className="row justify-content-center searchrow">
        <Favebutton />
        <Searchengine />
        <Locationbutton />
      </div>
    </div>
  );
}
