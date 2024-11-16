import React, { Component } from "react";

import Hero from "./hero.js";
import ReadMore from "./readMore.js";
import LandingBackground from "./landingBackground.js";
import Button from "./button.js";

import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      loadingPhase: 0
    };
  }

  componentDidMount() {
    this.setState( {windowWidth: window.innerWidth} );
    setTimeout(() => {  this.setState( {loadingPhase: 1} ); }, 200);
    setTimeout(() => {  this.setState( {loadingPhase: 2} ); }, 600);
    setTimeout(() => {  this.setState( {loadingPhase: 3} ); }, 2000);
    setTimeout(() => {  this.setState( {loadingPhase: 4} ); }, 2300);
    setTimeout(() => {  this.setState( {loadingPhase: 5} ); }, 3200);
    setTimeout(() => {  this.setState( {loadingPhase: 6} ); }, 3350);
    setTimeout(() => {  this.setState( {loadingPhase: 7} ); }, 3500);
  }


  render() {

    const readMoreButton = (
      <Button clicked={!this.props.pageState.hero} text="About Me" onClick={() => this.props.readMore()}/>
    );

    const contactButton = (
      <Button clicked={!this.props.pageState.readMore} text="Contact" onClick={() => this.props.viewContact()}/>
    );

    const viewProjectsButton = (
      <a href="#projects">
        <Button clicked={!this.props.pageState.readMore} text="Projects" />
      </a>
    );

    const closeReadMore = (
      <button className="close-about-me" onClick={() => this.props.readLess()} >
        <span />
        <span />
      </button>
    );

    return(
      <div className="landing" id="landing">
        <div className="hero-container">
          <Hero
            loadingPhase={this.state.loadingPhase}
            state={this.props.pageState}
            readMoreButton={readMoreButton} />
        </div>
        <ReadMore
          state={this.props.pageState}
          contactButton={contactButton}
          closeReadMore={closeReadMore}
          viewProjectsButton={viewProjectsButton}
        />
        <LandingBackground
          loadingPhase={this.state.loadingPhase}
          state={this.props.pageState}
          windowWidth={this.state.windowWidth}
        />
      </div>
    );
  }
}

export default Landing;
