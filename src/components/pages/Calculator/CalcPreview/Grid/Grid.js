import React from "react";

import "./Grid.scss";

export function Grid() {
  return (
    <div className="grid">
      {Array.from(Array(200)).map((_, index) => {
        const flip = index % 2 === 0;

        if (flip) {
          return (
            <div
              key={index}
              className="line-vertical"
              style={{ left: index * 5 + 10 + "px" }}
            />
          );
        }

        return (
          <div
            key={index}
            className="line-horizontal"
            style={{ top: index * 5 + 5 + "px" }}
          />
        );
      })}
    </div>
  );
}
