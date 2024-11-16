import React from "react";

import "./spinner.css";

function Spinner(props) {

  var spinnerClassName = "loader"
  if (props.size === "big") {
    spinnerClassName = "loader loader-big"
  }
  if (props.size === "small") {
    spinnerClassName = "loader loader-small"
  }

  return (
    <div style={{transform: "translate(-1.6rem, -2.1rem)"}}>
      <span className={spinnerClassName}></span>
    </div>
  );
}

export default Spinner;
