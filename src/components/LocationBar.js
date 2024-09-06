import React from "react";
import "./LocationBar.css";

function LocationBar({ depth1, depth2 }) {
  return (
    <div className="location-bar">
      <h3>{depth1}</h3> <span> &#62;</span> <h3>{depth2}</h3>
    </div>
  );
}

export default LocationBar;
