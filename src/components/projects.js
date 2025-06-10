import React from "react";

import "./projects.css";

import aPDesignMockup from "../images/cost-insight-design-2.webp";
import areaMockup from "../images/area_mockup.png";
import tutorstatMockup from "../images/tutorstat.png";

function Projects() {

  const aPDesignDescription = (
    <p className="project-description">
      <b>aP Design</b> is a cost optimization solution for design engineers. <br/><br/>
      I worked on this project for three years at <a href="https://www.apriori.com/" target="_blank" rel="noreferrer">aPriori Technologies</a>,
      joining right at the V1 release but seeing the project through over a dozen enhancements.
      The app is built using React/Typescript and is supported by a Java/Spring Boot microservice backend, housed on AWS.
    </p>
  );

  const areaDescription = (
    <p className="project-description">
    <br/>
      <b>Area</b> is a location-sharing app that highlights user-generated content.<br/><br/>
      I built the browser-native MVP to be used as a foundation for the development of an accompanying native mobile app.
      Area is built on React, and is powered by <a href="https://hasura.io/cloud/" target="_blank" rel="noreferrer">Hasura Cloud</a>, <a href="https://stripe.com/" target="_blank" rel="noreferrer">Stripe</a>, <a href="https://auth0.com/" target="_blank" rel="noreferrer">Auth0</a>, <a href="https://cloudinary.com/" target="_blank" rel="noreferrer">Cloudinary</a>, and <a href="https://developers.google.com/maps/documentation/javascript/overview" target="_blank" rel="noreferrer">Google Maps API</a>.
    </p>
  );

  const areaReview = (
    <p className="project-review">
      "Jake delivered incredible work on this Google Maps API development project
      and I enjoyed working with him. Very responsive, provided weekly
      detailed updates. He provided powerful insight in our brainstorms which
      left positive impacts on future designs and decisions." -Upwork Client
    </p>
  );

  const tutorstatDescription = (
    <p className="project-description">
      <b>Tutorstat</b> is an internal data analytics app that shows insights about tutor and student performance.<br/><br/>
      I developed this project for a test-prep center to help inform training policy and educate clients.
      Tutorstat is built using react. Data is processed in Ruby and displayed using React Vis.<br/><br/>
    </p>
  );

  return(
    <div className="projects-wrapper" id="projects">
      <div className="project-container">
        <h1>Experience</h1>
        <br />
        <div style={{transform: "translateY(-2em)"}}>
          <img className="project-image project-image-large" src={aPDesignMockup} alt="thing"/>
        </div>
        {aPDesignDescription}
      </div>
      <div className="project-container">
        <h2>Freelance</h2>
        <img className="project-image" src={areaMockup} alt="location sharing app"/>
        {areaDescription}
        {areaReview}
      </div>
      <div className="project-container">
        <img className="project-image project-image-large" src={tutorstatMockup} alt="data analytics app"/>
        {tutorstatDescription}
      </div>
    </div>
  );
}

export default Projects;
