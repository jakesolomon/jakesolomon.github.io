import React from "react";

import Social from "./social.js";

import "./footer.css";

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <Social display="horizontal"/>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </div>
  </footer>
);

export default Footer;
