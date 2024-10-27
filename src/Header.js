import React from "react";
import Nav from "./Nav";

const Header = (props) => {
    return (
      <header>
        <img src="logo/lemon_yellow.png" alt="Little Lemon Logo" height="100"></img> 
        <Nav />
      </header>
    );
};

export default Header;