import React from "react";
import Nav from "./Nav";

const Footer = (props) => {
    return (
      <footer>
        <div>
          <img src="logo/vertical_lemon_green.png" alt="Little Lemon Footer Logo" height="50"></img>
        </div>
        <div>
          Doormat Navigation
          <Nav />
        </div>
        <div>
          Contact
        </div>
        <div>
          Social Media Links
        </div>
      </footer>
    );
};

export default Footer;