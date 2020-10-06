import React from "react";
import "./header-module.css";

function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-light">
        <div className="Title">
          <h1 className="white-word">Song</h1>
          <span className="lyric-word">Lyrics</span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
