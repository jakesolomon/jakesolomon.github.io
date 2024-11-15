import React from "react";
import { useState, useEffect } from "react";

import "./landingBackground.css";

function LandingBackground(props) {

  return(
    <div className="background-container" >
      <div
        className="landing-to-projects-indicator"
      >
        <p style={{opacity: props.loadingPhase >= 7 ? "1" : "0"}}>Projects</p>
        <div className="landing-to-projects-line" style={{opacity: props.loadingPhase >= 7 ? "1" : "0"}}/>
      </div>
    </div>
  );
}

export default LandingBackground;
