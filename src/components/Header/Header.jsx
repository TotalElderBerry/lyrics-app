import React from "react";
import "./header-module.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="conts">
      <div className="header-content">
        <div className="navigation-bar">
          <NavBar />
        </div>

        <div className="header-text">
          <p className="first-text">LOVE FOR MUSIC?</p>
          <p className="second-text">Find it all in here</p>
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
