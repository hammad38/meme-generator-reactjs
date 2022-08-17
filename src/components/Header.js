import React from "react";
import trollface from "../images/Troll-Face.png";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={trollface} alt="troll face" className="header--image"/>
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
      </header>
    </div>
  );
};

export default Header;
