import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
      <h1>Once loading complete, scroll down to see list. </h1>
    </div>
  );
}

export default Loading;
