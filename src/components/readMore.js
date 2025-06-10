import React from "react";

import Contact from "./contact.js";

import "./readMore.css";

function ReadMore(props) {

  var aboutMeClass = "read-more-container";
  var aboutMeContent = "about-me-content";
  var contactClass = "contact-container about-me-disappear";
  if (props.state.readMore) { aboutMeClass += " read-more-container-appear"; }
  if (props.state.transition !== "readMore") { aboutMeContent += " about-me-disappear"; }
  if (props.state.viewContact) { contactClass = "contact-container"; }

  return(
    <div className={aboutMeClass}>
      {props.closeReadMore}
      <div className={aboutMeContent}>
        <h3>About Me</h3>
        <p style={{marginBottom: "0px"}}>
          I’m a front-end engineer who specializes in building responsive, user-friendly interfaces with React/JavaScript, backed by AWS architecture.
        <br/><br/>
          I split my week between coding and working at <a href="https://www.barrettsmillfarm.com/" target="_blank">Barrett's Mill Farm</a>. Currently available for part-time contract work in both software and vegetable fields.
        </p>
        <div style={{display: "inline-block", marginTop: "1.5rem"}}>
          {props.viewProjectsButton}
        </div>
        <div style={{display: "inline-block", marginLeft: "1rem"}}>
          {props.contactButton}
        </div>
      </div>
      <div className={contactClass}>
        <h2>Contact</h2>
        <Contact />
      </div>
    </div>
  );
}

export default ReadMore;
