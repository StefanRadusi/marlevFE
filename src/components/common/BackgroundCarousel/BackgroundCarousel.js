import React, { useState } from "react";

import "./BackgroundCarousel.scss";
import { mergeCssClass } from "../../../utils";
import { useInterval } from "../../../utils/componentUtils";

export function BackgroundCarousel({ imgs, children }) {
  const [imgIndex, setImgIndex] = useState(0);

  useInterval(() => {
    setImgIndex(imgs.length === imgIndex + 1 ? 0 : imgIndex + 1);
  }, 5000);

  return (
    <div className="background-carousel-container">
      <div className="background-carousel">
        {imgs.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="img"
            className={mergeCssClass(
              "background-carousel-img",
              imgIndex === index && "background-carousel-img-visible"
            )}
          />
        ))}
      </div>
      <div className="background-carousel-component">{children}</div>
    </div>
  );
}
