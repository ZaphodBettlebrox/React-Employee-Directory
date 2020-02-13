import React from "react";
import "../styles/body.css";

function SortBtn(props) {
  return (
    <div>
      <button className="sortBtn" onClick={props.onClick}>
      Sort by Name</button>
    </div>
  );
}

export default SortBtn;