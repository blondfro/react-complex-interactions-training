import React from "react";
import "./navigation.css";

function Navigation({ closeNav, ...props }) {
  return (
    <div id="myNav" className="overlay">
      <a className="closebtn" onClick={() => closeNav()}>
        &times;
      </a>
      <div className="overlay-content">
        <a href="">Vitamin Juice</a>
        <a href="">Clothing</a>
        <a href="">Supplements</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navigation;
