import React from "react";
import "./header-module.css";

const Header = () => {
  return (
    <div>
      <div className="header-content">
        <div className="navigation-bar"></div>
        <div className="Title">
          <p className="white-word">Find Song</p>
          <span className="lyric-word">Lyric</span>
        </div>

        <div className="row-lg">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="input-group mb-3 center-block">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary btn-lg" type="button">
                  GO!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
