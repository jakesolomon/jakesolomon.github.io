import React from "react";

import "./hero.css";

import Social from "./social.js";

function Hero(props) {

  var disappear = "";
  var heroTitleLoadingPhase = "";
  if (!props.state.hero) { disappear = "disappear"; }
  if (props.loadingPhase <= 3) { heroTitleLoadingPhase = "medallion"}
  // if (props.loadingPhase >= 3) { heroTitleLoadingPhase = "spread-title"}
  if (props.loadingPhase >= 4) { heroTitleLoadingPhase = "fade-in-title"}

  var hero = `hero ${disappear}`;
  var heroTitle = `hero-title ${disappear} ${heroTitleLoadingPhase}`;
  var heroSubtitle = `hero-subtitle ${disappear}`;
  var heroSocial = `hero-social`;

  return(
    <div>
      <div className={hero} >
        <h1
          className={heroTitle}
          style={{
            transform: props.loadingPhase >= 3 ? null : "translateX(100%) scale(2, 2)",
            opacity: props.loadingPhase >= 1 ? "1" : "0",
            size: props.loadingPhase >= 4 ? "0px" : null
          }}
        >
          <span>J</span>
          <span>a</span>
          <span>k</span>
          <span>e</span>
          <span> </span>
          <span>S</span>
          <span>o</span>
          <span>l</span>
          <span>o</span>
          <span>m</span>
          <span>o</span>
          <span>n</span>
        </h1>
        <h4
          className={heroSubtitle}
          style={{opacity: props.loadingPhase >= 5 ? "1" : "0"}}
        >
          Front-End Developer
        </h4>
        <div
          className="read-more-button-wrapper"
          style={{opacity: props.loadingPhase >= 6 ? "1" : "0"}}
        >
          {props.readMoreButton}
        </div>
      </div>
      <div className={heroSocial} style={{opacity: props.loadingPhase >= 7 ? "1" : "0"}}>
        <Social display="vertical"/>
      </div>
    </div>
  );
}

export default Hero;
