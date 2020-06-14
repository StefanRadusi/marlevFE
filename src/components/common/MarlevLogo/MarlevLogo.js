import React from "react";

import "./MarlevLogo.scss";

export function MarlevLogo() {
  return (
    <div className="marlev-logo">
      <p>M</p>
      <div className="logo-container">
        <div className="img-container">
          <img
            src="http://marlevinvest.ro/wp-content/uploads/2018/03/cropped-MarlevInvest.png"
            alt="marlev-log"
          />
        </div>
      </div>
      <p>RLEV</p>
    </div>
  );
}
